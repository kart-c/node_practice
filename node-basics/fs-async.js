/************************* An alternative to callback hell in fs.js *************************/
const { readFile } = require("fs");
/**
 * Alternatively one can directly use the promise version of readFile provided by node
 */
const { readFile: readFilePromise } = require("fs").promises;

const getFile = (path, options) => {
	return new Promise((resolve, reject) => {
		readFile(path, options, (error, data) => {
			if (error) {
				reject(error);
			}
			resolve(data);
		});
	});
};

getFile("./node-basics/content/readFile-one.txt", { encoding: "utf8" })
	.then((result) => console.log({ fileOne: result }))
	.catch((err) => console.log({ err }));

const getData = async () => {
	try {
		const fileOneAsnyc = await getFile("./node-basics/content/readFile-one.txt", {
			encoding: "utf8",
		});
		console.log({ fileOneAsnyc });
	} catch (errorAsync) {
		console.log({ errorAsync });
	}
};

getData();

const getDataNodePromiseVersion = async () => {
	try {
		const fileOneNodePromise = await readFilePromise("./node-basics/content/readFile-one.txt", {
			encoding: "utf8",
		});
		console.log({ fileOneNodePromise });
	} catch (error) {
		console.log({ error });
	}
};

getDataNodePromiseVersion();

/**
 * Prior to require('fs').promises an alternative was
 *
 *
 * const { promisify } = require("util")
 * const fs = require("fs");
 * const readFilePromisify = promisify(fs.readFile)
 */
