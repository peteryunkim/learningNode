const express = require('express')
let app = express()

let toDo = [
	{
		id: 1,
		"text": 'cut watermelons'
	},
	{
		id: 2,
		text: 'do dishes'
	},
	{
		id: 3,
		text: 'call Vin'
	}
]

app.get('/tasks', (request, response) => {
	response.send(toDo)
})

app.post('/tasks', (request, response) => {
	let task = request.body
	if (!task){
		response.status(500).send({error:'task does not have text'})
	} else {
		toDo.push(task)
		response.status(200).send(toDo)
	}
})

//Update
app.put('/tasks/:id', (request, response) => {
	let newText = request
	console.log(request)

	if (!newText || newText === ""){
		response.status(500).send({error: 'You must have a text for task'})
	} else {
		let found = false
		for (i=0; i < toDo.length; i++){
			let t = toDo[i]
			if (t.id === request.params.id){
				t.text = newText
				found = true
				break
			}
		}
		if (!found){
			response.status(500).send({error:'Not found'})
		} else {
			response.send(toDo)
		}
	}
})

app.get('/jp', (req, res)=>{
	res.send({name: "WOFF", system: 'Ps4'})
})

app.listen(3000, () => {
	console.log('first api running on port 3000')
})