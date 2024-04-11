import express from "express";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World from TypeScript with Express!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
