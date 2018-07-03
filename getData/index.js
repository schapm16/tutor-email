let getDataFunction;

if (!process.argv[2] || process.argv[2] === 'reminder') {
	getDataFunction = require('./getLogData');
}





module.exports = getDataFunction();