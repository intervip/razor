export function navMenuItemActivated(id) {
	// Deactivate any other currently activated item
	document.querySelectorAll('.active').forEach(element => {
		element.classList.remove('active');
	});

	var item = document.getElementById(id);

	// Close all open item groups when clicking out of it
	document.querySelectorAll('.nav-menu-group-items').forEach(group => {

		// Don't close group if active item belongs to it
		var found = [].slice.call(group.getElementsByClassName('nav-menu-item')).find(item => item.id === id);

		if (!found) {
			group.classList.add('collapsed');
		}
	});

	// Activate clicked item
	item.classList.add('active');
}