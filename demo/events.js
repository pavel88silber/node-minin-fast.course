const EventEmitter = require('events')

/* const emitter = new EventEmitter()

let delay = 1800

// emitter - излучатель
// Прослушивать события с помощью метода .on()
emitter.on('anything', data => {                // .on(event name, emmiter){}
    console.log('ON: anything => ', data);
})

emitter.emit('anything', {a: 1})
emitter.emit('anything', {a: 2})
emitter.emit('anything', {Qdf: 22})
emitter.emit('anything', 'Tom')
emitter.emit('any', {Qdf: 23})   

setTimeout(handler => {
    emitter.emit('anything', ' time setTimeout for ' + delay + ' msec')
}, delay) 

setTimeout(function(){
    console.log('My test for setTimeout for 1500 msec');
},1500) */


 // Наследоваться от класса EventEmitter чтобы писать свой функционал
class Dispatcher extends EventEmitter {
    // method subscribe(будем принимать)
    subscribe(eventName, cb) {
        console.log('[Subscribe...]');
        this.on(eventName, cb)
    }
    // dispatch = отправка
    dispatch(eventName, data) {
        console.log('[Dispatching...]')
        this.emit(eventName, data)
    }
} 

const dis = new Dispatcher()

dis.subscribe('aa', data => {
    console.log('ONL aa', data);
})

dis.dispatch('aa', {aa:22})