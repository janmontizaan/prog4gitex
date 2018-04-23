const express = require('express');
const app = express();
const port = 8080;

app.all('*', (req, res, next) => {
    next();
});

app.listen(port, () => {
    console.log('the magic happens at localhost: ' + port);
});

module.exports = app;
