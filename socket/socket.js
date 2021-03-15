module.exports = function socket(http) {

    let isButtonOn = false; // статус кнопки, по умолчанию при старте сервера false
    
    const io = require('socket.io')(http, {
        cors: {
            origin: "*", // чтобы хром не ругался на CORS
            methods: ["GET", "POST"],
            allowedHeaders: ["my-custom-header"],
            credentials: true
        }
    });

    io.on('connection', socket => {
        console.log(`Сокет: ${socket.id} подключился.`)

        socket.emit('current_state', isButtonOn); // сообщаем клиенту при первом коннекте текущее состояние кнопки

        socket.on('change_state', () => {
            isButtonOn = !isButtonOn;
            io.emit('current_state', isButtonOn);
            console.log('Меняем состояние кнопки на сервере на: ', isButtonOn);
        })

        socket.on('disconnect', () => { // при событии отключения от сокета
            console.log(`Сокет: ${socket.id} отключился.`)
        })
    })

}