const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");

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

/**
 * An example of how syncronous code can block the main thread and stop execution of code,
 * See the time taken to write to the bigFile.txt
 */
/***************************** Example start *****************************/
// const bigData = () => {
// 	let str = "";
// 	for (let i = 0; i < 1000000; i++) {
// 		str += `Large file: Line number ${i}\n`;
// 	}
// 	return str;
// };

// console.log("I run before writing to bigFile");
// console.time("Write bigFile");
// writeFileSync("./node-basics/content/bigFile.txt", bigData());
// console.timeEnd("Write bigFile");
// console.log("I run after writing to bigFile");

/***************************** Example end *****************************/

/**
 * Async example
 * See the time taken to write to the bigFile.txt
 */

readFile("./node-basics/content/readFile-one.txt", "utf8", (error, data) => {
	if (error) {
		console.log(error);
		return;
	}
	const readFileOne = data;

	readFile("./node-basics/content/readFile-two.txt", "utf8", (error, data) => {
		if (error) {
			console.log(error);
			return;
		}
		const readFileTwo = data;

		writeFile("node-basics/content/writeFile.txt", `${readFileOne} \n ${readFileTwo}`, (error) => {
			if (error) {
				console.log(error);
				return;
			}
		});
	});
});
