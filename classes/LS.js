class LS {
	// help functions to get and set data at LS
	getData(name) {
		let data;
		if(localStorage.getItem(name) === null) {
			data = [];
		} else {
			data = JSON.parse(localStorage.getItem(name));
		}
		return data;
	}

	setData(name, data) {
		localStorage.setItem(name, JSON.stringify(data));
	}

	// add task to LS
	addTask(task) {
		// set data to the LS
		let tasks = this.getData('tasks');
		tasks.push(task);
		this.setData('tasks', tasks);
		// log to console that task is added to LS
		task.addedToLS();
	}

	// delete task from LS
	deleteTask(task){
		let tasks = this.getData('tasks');
		tasks.forEach(function(tasksElement, tasksIndex){
			if(tasksElement.name === task){
				tasks.splice(tasksIndex, 1);
			}
		});
		this.setData('tasks', tasks);
	}
}