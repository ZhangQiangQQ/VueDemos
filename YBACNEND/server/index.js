var express = require('express');
var proxy = require('express-http-proxy');
var app = express();

app.use('/proxy', proxy('http://47.102.145.186/backtestbusiness', {
  timeout: 2000,
  skipToNextHandlerFilter: function(proxyRes) {
    return proxyRes.statusCode === 401;
  }
}));

app.use(function (req, res, next) {
  // handle 401 code;
  next();
});

app.listen(3000, function () {
  console.log('Proxy server listening on port 3000!');
});
