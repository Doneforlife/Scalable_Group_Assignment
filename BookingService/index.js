const app = require('express')();

app.set('json spaces', 80);



app.get('/book/RRR', (req, res) => res.json({
    'theatreid': '1',
    'moviename': 'RRR',
    'BookingStatus': 'Booked',
  }));

app.listen(3000, () => console.log(`Products API listening on port 3000!`));


