const express = require('express');
const cors = require('cors');

const db = require('./Database');

const app = express();

app.use(cors());
app.use(express.json());


app.listen(4000, () => {
  console.log('Server listening on port 5000');
  db();
});

module.exports = app;