const express = require('express');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerJson = require('./schemas/swagger.json');
const lootBoxRouter = require('./routes/lootboxes.router');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));
app.use('/api/lootboxes', lootBoxRouter);

module.exports = app;
