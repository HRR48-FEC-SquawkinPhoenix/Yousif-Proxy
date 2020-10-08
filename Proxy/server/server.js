const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const port = 3000;
const {component} = require(./component.js);

app.use(morgan('dev'))
app.use(express.static('../public/index.html'));

app.get('/:id', (req, res) => {
  res.send(component)
})


app.listen(port, () => {
  `server is listening on port: ${port}`
})