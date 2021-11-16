// UI and LS objects
ui = new UI();
ls = new LS();

// event elements
// form submit event
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
// taskList X click event
const taskList = document.querySelector('ul');
taskList.addEventListener('click', deleteTask);
// clear button event
const clearBtn = document.querySelector('#clear-tasks');
clearBtn.addEventListener('click', deleteTasks)

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

function deleteTask(e) {
	// get task name
	let task = e.target.parentElement.firstChild;
	// delete task value from visual by UI object
	ui.deleteTask(task);
	// change task element content before deleting from LS
	task = task.textContent;
	// delete task value from LS by LS object
	ls.deleteTask(task);
}

function deleteTasks(e){
	// delete all tasks from UI
	let tasks = document.querySelector('ul');
	ui.deleteTasks(tasks);
	// delete tasks from LS
	ls.deleteTasks();
}