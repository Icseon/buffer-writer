## buffer-writer
Simple buffer writer for javascript Buffers (all unsigned)


## Usage
```js
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

/**
 * BufferWriter {
 * size: 14,
 * buffer: <Buffer 48 65 6c 6c 6f 20 77 6f 72 6c 64 fe ff ff>,
 * offset: 14
 * }
 */

```
