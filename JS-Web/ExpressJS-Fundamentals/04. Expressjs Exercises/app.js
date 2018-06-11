const port = 4200;
const config = require('./config/config');
const db = require('./config/database.config');
const express = require('express');

let app = express();
let environment = process.env.NODE_ENV || 'development';

db(config[environment]);
require('./config/express')(app, config[environment]);
require('./config/routes')(app);

app.listen(port, () => {
    console.log('Server started.');
    console.log(`Listening on port http://localhost:${port}...`);
});