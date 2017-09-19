$().ready(() => {
	// let clicky = document.getElementsByClassName('show')
	let clicky = $('.show')
	clicky[0].addEventListener('click', displayDate)
	setAlarm()
	getSWAPI()
	getSWAPI2()
	// Promise.all([getSWAPI, getSWAPI2])
	// .then(value => value.json())

})

const displayDate = () => {
		// let display = document.getElementById('display')
		let display = $('#display')
		display[0].innerHTML = new Date();
		setInterval( ()=> display.innerHTML = new Date(), 1000)
	}
const setAlarm = () => {
	document.getElementById('alarm-button').addEventListener('submit', (event) => {
		event.preventDefault()
	let alarmValue = $('input[type=time]').val()
	let alarm = new AlarmClock(alarmValue)
	console.log(alarm)
	})
}


const getSWAPI = () => {
	fetch("http://swapi.co/api/planets/1/?format=json")
	.then(res => res.json())
	.then(data => console.log(data))
}

const getSWAPI2 = () => {
	fetch('http://swapi.co/api/planets/2/?format=json')
	// .then(res => console.log(res))
}

