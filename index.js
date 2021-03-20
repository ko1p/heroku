const {PORT} = require('./config.js');
const app = require('express')();
const http = require('http').createServer(app);
const socket = require('./socket/socket');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

socket(http);

http.listen(PORT, () => {
    console.log(`Сервер запустился на ${PORT} порте.`)
});