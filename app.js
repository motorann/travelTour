const express = require('express');
const app = express();

const fortune = require(__dirname + '/lib/fortune');

const port = process.env.port || 3000;
app.set('view engine', 'ejs');
// app.use(express.static(__dirname + 'public'));

app.get('/', (req, res) => {
  res.type('text/html');
  res.render('pages/home.ejs');
});

app.get('/about', (req, res) => {
  res.render('pages/about', { todayFortune: fortune() });
});

app.use((req, res) => {
  res.status(404);
  res.render('pages/404');
});

app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500);
  res.render('pages/500');
});

app.listen(port, () => console.log(`Server started on port ${port}`));
