const express = require('express');

let app = express();

let port = 4200;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public_assets/home.html');
});

app.listen(port);