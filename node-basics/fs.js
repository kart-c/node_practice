const { readFileSync, writeFileSync } = require("fs");

/**
 * Syncronously reads a file and returns the content
 * Without second argument will return in Buffer format - https://nodejs.dev/en/api/v19/buffer/#buffer
 * Optional second argument - encoding
 */
const readFileOne = readFileSync("./node-basics/content/readFile-one.txt", "utf8");

const readFileTwo = readFileSync("./node-basics/content/readFile-two.txt", "utf8");

/**
 * Syncronously writes to a file and returns undefined
 * Third optional object / string can be provided where we can specify encoding, mode and flag
 * Read about optional arguments - https://nodejs.dev/en/api/v19/fs/#fswritefilesyncfile-data-options
 * If file does not exist at specified path, then a file will be created and then written into. Not
 * all modes support this.
 * To read which modes support this - https://nodejs.dev/en/api/v19/fs/#file-system-flags
 */
writeFileSync("./node-basics/content/writeFile.txt", `${readFileOne} \n ${readFileTwo}`);
