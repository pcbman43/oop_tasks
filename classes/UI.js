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
		// find input to clear this value
		const input = document.querySelector('#task');
		input.value = "";
		// log to console that task is added to UI
		task.addedToUI();
	}
}