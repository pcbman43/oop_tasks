class UI {
	addTask(task) {
		// create list item
		const li = document.createElement('li');
		li.className = 'collection-item';
		li.appendChild(document.createTextNode(task.name));
		// create link
		const link = document.createElement('a');
		link.className = 'secondary-content';
		link.appendChild(document.createTextNode('X'));
		link.setAttribute('href', '#');
		// add link to list item
		li.appendChild(link);
		// find list to add created list item
		const list = document.querySelector('ul');
		list.appendChild(li);
		// find input to clear this value
		const input = document.querySelector('#task');
		input.value = "";
		// log to console that task is added to UI
		task.addedToUI();
	}

	deleteTask(task){
		const deleteIcon = task.nextSibling;
		if(deleteIcon.textContent == "X"){
			if(confirm('Do you want to delete this task?')) {
				task.parentElement.remove();
			}
		}
	}

	deleteTasks(tasks){
		while(tasks.firstChild){
			tasks.removeChild(tasks.firstChild);
		}
	}
}