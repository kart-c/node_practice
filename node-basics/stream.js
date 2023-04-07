/**
 * Stream is used for streaming data in nodejs
 * Streams can be readable, writable, or both.
 *
 * Four types of streams in Node
 * - Writeable - streams to which data can be written
 * - Readable - streams from which data can be read
 * - Duplex - streams that are both Readable and Writable
 * - Transform - Duplex streams that can modify or transform the data as it is written and read
 */
const { createReadStream, readFile } = require("fs");
const http = require("http");

const bigFilePath = "./node-basics/content/big.txt";

const readStream = createReadStream(bigFilePath);

readStream.on("data", (data) => {
	/**
	 * Why "data"? Allowed events - https://nodejs.org/dist/latest-v18.x/docs/api/stream.html#:~:text=one%20API%20style-,Class%3A%20stream.Readable,-Event%3A%20%27close
	 * Data is being read in chunks of 64 kb
	 * To see and modify defaults - https://nodejs.dev/en/api/v19/fs/#fscreatereadstreampath-options
	 */
	console.log(data);
});

// IMP: more on stream - https://github.com/samerbuna/efficient-node/blob/main/400-node-streams.adoc
