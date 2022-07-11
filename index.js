require('dotenv').config();
const express = require('express');
const path = require('path');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');

const PORT = process.env.PORT || 5000;
const app = express();

const todoRouter = require('./routes/route');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger);
app.use(express.static('public'));
app.use(express.json());
app.use (express.urlencoded ({extended: true}));

app.use(todoRouter);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});