class LS {
	addTask(task){
		// set data to the LS
		let tasks;
		if(localStorage.getItem('tasks') === null) {
			tasks = [];
		} else {
			tasks = JSON.parse(localStorage.getItem('tasks'));
		}
		tasks.push(task);
		localStorage.setItem('tasks', JSON.stringify(tasks));
		// log to console that task is added to LS
		task.addedToLS();
	}
}