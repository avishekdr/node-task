const express = require('express'), bodyParser = require('body-parser'),
    app = express(), db = require('./models');

db.sequelize.sync().then(() => console.log('Drop and re-sync db'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/post', require('./controller/post.controller'));

// Exporting the app to server.js
module.exports = app;
