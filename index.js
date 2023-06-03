import express from "express";
import connectDB from "./config/dbConn.js";
import root from "./routes/root.route.js";

import { db } from "./config/dbConn.js";
// Importing the routes to handle the requests
import birthCertRoutes from "./routes/birthCert.routes.js";
import personRoutes from "./routes/person.routes.js";

const PORT = process.env.PORT || 3500;
const app = express();

// Handling JSON
app.use(express.json());

// HANDLING REQUESTS MADE TO DIFFERENT PATHS
app.use("/", root);

// using the default app function
app.use("/api/birthCert", birthCertRoutes);
app.use("/api/persons", personRoutes);




app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("json")) {
    res.json({ message: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

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

