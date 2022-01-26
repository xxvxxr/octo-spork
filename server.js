const express = require('express')


const colors = require('colors')
const messageRouter = require('./routes/messages.router')
const friendsRouter = require('./routes/friends.router')

const app = express()

const PORT = 3000

app.use((req, res, next) => {
	const startTime = Date.now()
	next()
	const delta = Date.now() - startTime
	console.log(`${req.method} and "${req.baseUrl}" ${req.url} @ ${delta}ms`)
})

app.use(express.json())

app.use('/friends', friendsRouter)
app.use('/messages', messageRouter)


app.listen(PORT, () =>
	console.log(
		` SUCCESS!! Listenting on port ${PORT}....`.brightRed.bgBrightGreen.bold
	)
)
