const path = require('path')

// Using the key word function at the top level allows the browser to give more detailed infromation to you
function getMessages(req, res) {
	res.render('messages', {
		title: 'Messages to my friends', 
		friend: 'Elon Musk'
	})
	// res.sendFile(path.join(__dirname, '..', 'Public', 'images', 'skimountain.jpg'))
}

function postMessage(req, res) {
	console.log(`Updating messages. . . `)
}

module.exports = {
	getMessages,
	postMessage,
}
