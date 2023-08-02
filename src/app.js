const express = require('express');
const cors = require('cors');

class App {
  constructor() {
    this.application = express();
  }
}

const app = new App().application;
app.use(cors());

app.listen(3001, () => {
  console.info('✅ Start sparcs sample server✅');
});

app.get('/', function (req, res) {
  res.status(200).send('Welcome to Sparcs-kaist server!');
});


app.get('/health-check', function (req, res) {
  res.status(200).send('ok');
})

app.get('/assignment', function (req, res) {
  res.status(404).send('may be not found?');
})

module.exports = app;


