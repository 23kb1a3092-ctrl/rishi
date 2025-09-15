// app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Hello</title></head>
      <body>
        <h1>Check your browser console!</h1>
        <script>console.log('Hello World');</script>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
