const first = document.querySelector('#name');
const cluster = require('cluster');
const result = document.querySelector('.result');

if (window.Worker) { // Check if Browser supports the Worker api.
	// Requries script name as input
	const myWorker = new Worker("worker.js");

	first.onchange = function() {
	  myWorker.postMessage([first.value]); // Sending message as an array to the worker
	  console.log('Message posted to worker');
	};

	myWorker.onmessage = function(e) {
		result.textContent = e.data;
		console.log('Message received from worker');
	};
}
