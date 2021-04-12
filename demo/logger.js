const EventEmitter = require('events')

var url = 'http://mylogger.io/log'

class Logger extends EventEmitter {
    log(message) {
        //Send an HTTP request
    console.log(message)
        //Raise an event
    this.emit('messageLogged', { id: 1, url: url})
    // Этошо не будет потому что мы это не слушаем
    this.emit('messageLogged_2', { id: 2, url: 'url2'})
    }
    
}

module.exports = Logger