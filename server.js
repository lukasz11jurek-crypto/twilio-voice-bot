const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post("/voice", (req, res) => {
  res.type("text/xml");
  res.send(`
    <Response>
      <Say>Hello! Everything is working correctly.</Say>
    </Response>
  `);
});

app.get("/", (req, res) => {
  res.send("OK");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
