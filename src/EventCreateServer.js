const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();

const options = {
  key: fs.readFileSync('klucz-prywatny.pem'),
  cert: fs.readFileSync('certyfikat.pem')
};

https.createServer(options, app).listen(443);