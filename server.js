const express = require('express');
const app = express();
const port = 8080;

app.all('*', (req, res, next) => {
    next();
});



app.get('/hello', (req, res, next) => {
    res.status(200).json({
        'msg': 'Hello JEDI\'s'
    })
});

app.listen(port, () => {
    console.log('the magic happens at localhost: ' + port);
});

module.exports = app;
