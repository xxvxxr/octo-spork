const express = require('express')
const colors = require('colors')

const app = express()

const PORT = 3000

const friends = new Array(
	{ id: 0, name: 'Sir Issac Newton' },
	{ id: 1, name: 'King Kong' }
)

app.use((req, res, next) => {
	const startTime = Date.now()
	console.log(`${req.method} and ${req.url} @ ${startTime}`)
	next()
    const delta = Date.now() - startTime
    console.log(delta)
})

app.get('/friends', (req, res) => {
	res.json(friends)
})

app.get('/friends/:friendId', (req, res) => {
	const friendId = Number(req.params.friendId)
	const friend = friends[friendId]
	if (friend) {
		res.json(friend)
	} else {
		res.status(404).json({
			error: `friend doesn't exsit`,
		})
	}
})

app.listen(PORT, () =>
	console.log(
		` SUCCESS!! Listenting on port ${PORT}....`.brightRed.bgBrightGreen.bold
	)
)
