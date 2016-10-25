var events = require('events');

var eventEmitter = new events.EventEmitter();

var listener1 = function listener1 () {
	console.log('Listener1 executed.');
}

var listener2 = function listener2 () {
	console.log('Listener2 executed.');
}

eventEmitter.addListener('connection', listener1);

eventEmitter.on('connection', listener2);

var eventListners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListners + " Listner (s) listening to connection event");

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener1);
console.log('Listener1 will not listen now.');

eventEmitter.emit('connection');

eventListners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListners + " Listener (s) listening to connection event");

console.log('Program ended.');