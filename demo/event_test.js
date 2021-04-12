/* const EventEmitter = require('events');
//const EventEmmiter = require('events');

// creating instance (object) of class (EventEmitter)
// class => human | object => john
const emitter = new EventEmitter();


// Register a listener
//emitter.addListener <- is same as .on
emitter.on('messageLogged', function() {
    console.log('Listener called')
})

// Raise an event
//emitter.emit('name of event')
emitter.emit('messageLogged')
// emit = Making a noise , produce something
// in this case we make a noise in our app
// signaling that event happend */


//const EventEmitter = require('events');

const Logger = require('./logger')
const logger = new Logger()

// Register Listener
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
})

logger.log('message')



