const express = require('express');
const app = express();

const port = process.env.port || 3000;

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Homepage');
});

app.get('/about', (req, res) => {
  res.type('text/plain');
  res.send('About page');
});

app.use((req, res) => {
  res.type('text/plain');
  res.status(400);
  res.send('404 - Not found');
});

app.use((err, req, res, next) => {
  console.log(err.message);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Server Error');
});

app.listen(port, () => console.log(`Server started on port ${port}`));
