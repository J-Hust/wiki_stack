const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const layout = require('./views/layout.js');
const { db } = require('./models');

db.authenticate().
then(() => {
  console.log('connected to the database');
})


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send(layout(''));
})


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
