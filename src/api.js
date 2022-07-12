const express = require('express'), bodyParser = require('body-parser'),
    app = express(), db = require('./models'), swaggerUI = require('swagger-ui-express'),
    YAML = require('yamljs'), swaggerJsDoc = YAML.load('src\/doc.yaml');

db.sequelize.sync().then(() => console.log('Drop and re-sync db'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Api for CORS to connect Angular with backend
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    next();
});
app.use('/post', require('./controller/post.controller'));
app.use('/swagger-doc', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc));

// Exporting the app to server.js
module.exports = app;
