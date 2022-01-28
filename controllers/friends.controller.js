//MOCK DATA 
const model = require('../models/friends.model')
// Using the key word function at the top level allows the browser to give more detailed infromation to you
function getFriends(req, res) {
    res.json(model)
}

function postFriend(req, res) {
	if (!req.body.name) {
		return res.status(418).json({
			error: 'no name property on body',
		})
	}
	const newFriend = {
		name: req.body.name,
		id: model.length,
	}
	model.push(newFriend)

	res.json(newFriend)
}



function GetFriendById (req, res) {
	const friendId = Number(req.params.friendId)
	const friend = model[friendId]
	if (friend) {
		res.status(200).json(friend)
	} else {
		res.status(418).json({
			error: `friend doesn't exist`,
		})
	}
}

module.exports = {
	getFriends,
	postFriend,
    GetFriendById
}
