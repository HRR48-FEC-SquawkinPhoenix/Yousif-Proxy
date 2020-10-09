var component = `<!DOCTYPE html>
<head>
  <link rel="stylesheet" href="styles.css" />
  <link rel="stylesheet" href="http://localhost:3004/style.css" />
  <title>Petsy</title>
</head>
<body>
  <img src="https://addtocart123.s3.us-east-2.amazonaws.com/FEC/Screen+Shot+2020-10-06+at+4.21.49+PM.png" width="100%" height="5%" />
  <div id="line"></div>
  <div class="proxyContainer">
      <div id="carousel"></div>
      <div id="addToCart"></div>
      <div id="reviews"></div>
      <div id="seller"></div>
  </div>
  <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
  <script src="https://kit.fontawesome.com/d236a51708.js"></script>
  <script src="http://localhost:3003/bundle.js"></script>
  <script src="http://localhost:3002/bundle.js"></script>
  <script src="http://localhost:3001/bundle.js"></script>
  <script src="http://localhost:3004/bundle.js"></script>
</body>
</html>`

module.exports.component = component;