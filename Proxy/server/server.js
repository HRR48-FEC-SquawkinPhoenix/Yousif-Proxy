const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const port = 3000;
const {component} = require('./template.js');

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, '../public')))

app.get('/:id', (req, res) => {
  res.send(component)
})


app.listen(port, () => {
  `server is listening on port: ${port}`
})