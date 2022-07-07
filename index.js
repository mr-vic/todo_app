require('dotenv').config();
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5000;
const app = express();

const todoRouter = require('./routes/route');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(todoRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.length(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});