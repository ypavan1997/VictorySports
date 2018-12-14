const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const port = 9000;


const app = express();

app.use(helmet());

app.use(bodyParser.json());

app.use(cors());

app.use(morgan('combined'));

app.post('/login', (req, res) => {
  res.status(200).send();
});

app.get('*', (req, res) => {
  res.render(path.join(__dirname, '../public', 'index.html'));
});

app.listen(port, function (err) {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Listening on http://localhost:%d', port);
  }
});
