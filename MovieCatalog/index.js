const app = require('express')();

app.set('json spaces', 80);


app.get('/movies', (req, res) =>  res.json({
  'id': '3',
  'title': 'RRR',
  'format': 'IMAX',
  'releaseYear': 2023,
  'releaseMonth': 03,
  'releaseDay': 20
}));

 


app.listen(3000, () => console.log(`Products API listening on port 3000!`));

