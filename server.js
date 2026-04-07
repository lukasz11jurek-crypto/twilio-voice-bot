const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post("/voice", (req, res) => {
  res.set("Content-Type", "text/xml");
  res.send(`
    <Response>
      <Say>Hello! Everything is working correctly.</Say>
    </Response>
  `);
});

app.get("/", (req, res) => {
  res.send("Server działa");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
