const BufferWriter = require('./index.js');

/* Create a new buffer */
const Buffer = new BufferWriter();

/* Add "Hello world" to our buffer */
Buffer.string('Hello world');

/* Add the number 255 (0xfe) */
Buffer.int8(254);

/* Add the number 65535 (0xffff) */
Buffer.int16(65535);

/* Show the result */
console.log(Buffer);