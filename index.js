class BufferWriter {

    /**
     * @author Icseon
     * @description This is the constructor for the buffer writer class
     * @param bufferSize
     */
    constructor(bufferSize = 0)
    {
        this.size = bufferSize;
        this.buffer = Buffer.alloc(this.size);
        this.offset = 0;
    }

    /**
     * @author Icseon
     * @description This method will increase the buffer's length as needed
     * @param size
     */
    ensure(size)
    {

        /* Calculate the number of bytes we'll need to increase the buffer with */
        const remainingBytes = this.buffer.length - this.offset;

        if (remainingBytes < size)
        {

            /* Cache the old buffer */
            const oldBuffer = this.buffer;

            /* Calculate the new size of the new buffer */
            this.size = oldBuffer.length + size;

            /* Create a new buffer. We'll use the current offset for the size */
            this.buffer = Buffer.alloc(this.size);

            /* Copy the old buffer to the new buffer */
            oldBuffer.copy(this.buffer);

        }
    }

    /**
     * @author Icseon
     * @description This will add an int8 to the buffer
     * @param value
     */
    int8(value)
    {

        /* Make sure our buffer is big enough to store the value */
        this.ensure(1);

        /* Write int8 to our buffer */
        this.buffer.writeUInt8(value, this.offset);

        /* Update the current offset by 1 byte */
        this.offset += 1;
    }

    /**
     * @author Icseon
     * @description This will add an int16 to the buffer with a specific endianness
     * @param value
     * @param endian
     */
    int16(value, endian = 'little')
    {

        /* Make sure our buffer is big enough to store the value */
        this.ensure(2);

        /* Push the integer to the buffer */
        (endian === 'little')
            ? this.buffer.writeUInt16LE(value, this.offset)
            : this.buffer.writeUInt16BE(value, this.offset);

        /* Update the current offset by 2 bytes */
        this.offset += 2;

    }

    /**
     * @author Icseon
     * @description This will add an int32 to the buffer with a specific endianness
     * @param value
     * @param endian
     */
    int32(value, endian = 'little')
    {

        /* Make sure our buffer is big enough to store the value we're about to store */
        this.ensure(4);

        /* Push the integer to the buffer */
        (endian === 'little')
            ? this.buffer.writeUInt32LE(value, this.offset)
            : this.buffer.writeUInt32BE(value, this.offset);

        /* Update the current offset by 2 bytes */
        this.offset += 4;

    }

    /**
     * @author Icseon
     * @description This will add a string to the buffer
     * @param value
     */
    string(value)
    {

        /* Make sure our buffer can store the string */
        this.ensure(value.length);

        /* Add the string to the buffer */
        this.buffer.write(value, this.offset);

        /* Update offset */
        this.offset += value.length;

    }

}

module.exports = BufferWriter;