// This is a class
const EventEmitter = require("events");

const myEmitter = new EventEmitter();

/**
 * Custom events can be added using event emitter
 * Here we are subscribing to listen the "logger" event
 * Whereever we emit a logger event the callback will be triggered
 *
 * Read - https://nodejs.dev/en/api/v19/events/
 */
myEmitter.on("logger", (data) => {
	console.log(`Here is the data: ${data}`);
});

myEmitter.emit("logger", "Hello World");
