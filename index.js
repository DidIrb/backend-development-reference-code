import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from "./config/dbConn.js";
import root from "./routes/root.js";
import cors from "cors"
import logger from "./middleware/logger.js";
import corsOptions from "./config/corsOptions.js";
import errorHandler from "./middleware/errorHandler.js";
import UserTableSync from "./models/user.js";

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
UserTableSync();