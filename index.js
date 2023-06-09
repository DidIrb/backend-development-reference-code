import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from "./config/dbConn.js";
import root from "./routes/root.js";
import cors from "cors"
import logger from "./middleware/logger.js";
import corsOptions from "./config/corsOptions.js";
import errorHandler from "./middleware/errorHandler.js";
import { db } from "./config/dbConn.js";
import UserRoute  from "./routes/user.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 3500;
const app = express();

app.use(logger);

// Handling JSON
app.use(express.json());

// CORS
app.use(cors(corsOptions));

// HANDLING REQUESTS MADE TO DIFFERENT PATHS
app.use("/", express.static(path.join(__dirname, "/public")));
app.use("/", root);


// using the default app function
// userRoute(); 
app.use("/api/users", UserRoute);

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

// USING THE ERROR HANDLER MIDDLEWARE
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// SEQUELIZE FUNCTIONS
connectDB();

// Sync
db.conn
  .sync({ alter: true })
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

