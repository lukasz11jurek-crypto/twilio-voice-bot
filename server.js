const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/voice', (req, res) => {
  res.type('text/xml');
  res.send(`
    <Response>
      <Say voice="alice">Hello, everything works correctly</Say>
    </Response>
  `);
});

app.get('/', (req, res) => {
  res.send('OK');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
