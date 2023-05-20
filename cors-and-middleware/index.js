import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from "./config/dbConn.js";
import root from "./routes/root.js";
import cors from "cors"
import logger from "./middleware/logger.js";
import corsOptions from "./config/corsOptions.js";
import errorHandler from "./middleware/errorHandler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3500;
const app = express();

// using the logger js
app.use(logger)

// giving our app the ability to process json.
app.use(express.json());

// using cors package to protect our app
app.use(cors(corsOptions));

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

// using errorHandler that logs errors that happen.
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

connectDB();
