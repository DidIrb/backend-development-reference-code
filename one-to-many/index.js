import express from "express";
import connectDB from "./config/dbConn.js";
import root from "./routes/root.route.js";

import { db } from "./config/dbConn.js";
// Importing the routes to handle the requests
import userRoutes from "./routes/user.routes.js";
import postsRoutes from "./routes/posts.routes.js";

const PORT = process.env.PORT || 3500;
const app = express();

// Handling JSON
app.use(express.json());

// HANDLING REQUESTS MADE TO DIFFERENT PATHS
app.use("/", root);

// using the default app function
app.use("/api/users", userRoutes);
app.use("/api/posts", postsRoutes);

// app.use("/api/posts", birthCertRoutes); 


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
  .sync({ force: true })
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

