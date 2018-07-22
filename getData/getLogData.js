const xlsxPopulate = require('xlsx-populate');

module.exports = function() {

	function readLog() {
		return xlsxPopulate.fromFileAsync(process.env.FILEPATH).then(workbook => {
			let allSessions =  workbook.sheet('Log').usedRange().value().slice(1);
			return allSessions;
		});
	}

	function filterByConfirmNotSent(logData) {
		return logData.filter(session => !session[7])
	}


	function parseRelevantFields(logData) {

		return logData.map(session => {
			return {
				name: session[2], 
				email: session[3], 
				sessionDate: session[5],
				timeDiff: session[6], 
				confirm: !!session[7]
			}
		})
	}

	function formatFieldsForUse(logData) {
		return logData.map(session => {
			
			if (session.name.includes(',')) {
				session.name = session.name.split(', ')[1];
			} else {
				session.name = session.name.split(' ')[0];
			}
			
			let sessionDateTime ={};
			let sessionDateTimeISO = xlsxPopulate.numberToDate(session.sessionDate);
			sessionDateTimeISO.setHours(sessionDateTimeISO.getHours() + session.timeDiff);
			
			let localeStringOptions = {
				year: '2-digit',
				month: '2-digit',
				day: '2-digit',
				hour: '2-digit',
				minute: '2-digit',
			};

			[sessionDateTime.date, sessionDateTime.time] = sessionDateTimeISO.toLocaleString('en-us', localeStringOptions).split(', ');
			
			let timezones = ['EST', 'CST', 'MST', 'PST'];
			sessionDateTime.timezone = timezones[Math.abs(session.timeDiff)];

			return {
				name: session.name,
				email: session.email,
				sessionDateTime,
				confirm: session.confirm

			}
		})
	}

	return readLog()
		.then(logData => filterByConfirmNotSent(logData))
		.then(logData => parseRelevantFields(logData))
		.then(logData => formatFieldsForUse(logData))

}
