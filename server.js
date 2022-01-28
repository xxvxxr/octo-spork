const express = require('express')
const path = require('path')


const colors = require('colors')
const messageRouter = require('./routes/messages.router')
const friendsRouter = require('./routes/friends.router')

const app = express()


app.set('view engine', 'hbs')
app.set('views',path.join(__dirname, 'views') )
const PORT = 3000

app.use((req, res, next) => {
	const startTime = Date.now()
	next()
	const delta = Date.now() - startTime
	console.log(`${req.method} and "${req.baseUrl}" ${req.url} @ ${delta}ms`)
})
app.use('/site', express.static(path.join(__dirname,'Public')))
app.use(express.json())


app.get('./', (req, res) => {
	res.render('index', {
		title: 'My friends are clever', 
		caption: `Let's go Skiiing`
	})
})
app.use('/friends', friendsRouter)
app.use('/messages', messageRouter)


app.listen(PORT, () =>
	console.log(
		` SUCCESS!! Listenting on port ${PORT}....`.brightRed.bgBrightGreen.bold
	)
)
