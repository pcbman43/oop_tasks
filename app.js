// UI and LS objects
ui = new UI();
ls = new LS();

// event elements
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');

// events
// form submit event
form.addEventListener('submit', addTask);

function addTask(e) {
	// create a new object Task with input value
	const task = new Task(taskInput.value);
	// add task value to the visual by UI object
	ui.addTask(task);
	// add task value to the LS by LS object
	ls.addTask(task);
	e.preventDefault();
}