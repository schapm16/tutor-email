require('dotenv').config();

const gmailClient = require('./gmailClient');
const getData = require('./getData');
const buildEmail = require('./buildEmail');



Promise.all([getData, gmailClient]).then( ready => {

	let [data, gmail] = ready;

	data.forEach( eachDataObject => {

		let builtEmail = buildEmail(eachDataObject);

		gmail.users.drafts.create({
			'userId': 'me',
			'resource': {
				'message': {
				'raw': builtEmail
				}
			}
		}, 
			(err) => {
				if (err) throw new Error(`Error creating email for ${eachDataObject.name} \n${err}`);
				console.log(
					`Email created for ${eachDataObject.name} on ${eachDataObject.sessionDateTime.date}`
				)
			}
		);
	});

}).catch( err => console.log(err));