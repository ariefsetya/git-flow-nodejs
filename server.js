var routes 	= require('./routes.js');
var express = require('express');
const app = express()
var port = 3000;

app.use('/', routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))