const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend bhai !" });
});

app.get("/api/health", (req, res) => {
  res.json({ message: "come to dubai" });
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
