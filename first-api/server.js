const express = require('express')
let app = express()

app.get('/', (request, response) => {
	response.send('Getting first API')
})

app.get('/jp', (req, res)=>{
	res.send({name: "WOFF", system: 'Ps4'})
})

app.listen(3000, () => {
	console.log('first api running on port 3000')
})