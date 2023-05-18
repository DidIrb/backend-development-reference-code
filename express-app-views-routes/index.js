import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import root from "./routes/root.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Setting the port value.
const PORT = process.env.PORT || 3500;

// initializing an express app
const app = express();

// 
app.use("/", express.static(path.join(__dirname, "/public")));

// telling the app what to do when a request is made to the "/" path.
app.use("/", root);

// setting the wildcard and sending a 404 html file back to the user
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

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));