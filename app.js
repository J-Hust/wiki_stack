const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const layout = require('./views/layout.js');
const models = require('./models');

models.db.authenticate().
then(() => {
  console.log('connected to the database');
})


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send(layout(''));
})


const init = async () => {
 await models.db.sync({force: true});

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}

init();

