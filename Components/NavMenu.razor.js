export function navMenuChangeState() {
	// Change menu panel status
	var navMenu = document.getElementsByClassName('nav-menu-items')[0];
	navMenu.classList.toggle('closed');

	// Activate item group if child was active when open and closes all groups
	document.querySelectorAll('.nav-menu-group-items').forEach(group => {
		var found = [].slice.call(group.getElementsByClassName('nav-menu-item')).find(item => item.id === document.querySelector('.nav-menu-item.active').id);

		if (found) {
			group.parentElement.parentElement.getElementsByClassName('nav-menu-group-header')[0].classList.toggle('active');
			group.classList.toggle('collapsed');
		} else {
			group.classList.add('collapsed');
		}
	});
}