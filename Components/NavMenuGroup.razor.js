export function navMenuGroupChangeState(id) {
	var group = document.getElementById(id);

	// Open navigation menu when expanding a group
	if (group.classList.contains('collapsed')) {
		var navMenu = document.getElementsByClassName('nav-menu-items')[0];
		if (navMenu.classList.contains('closed')) {
			navMenu.classList.remove('closed');
		}
		group.classList.remove('collapsed');
	} else {
		group.classList.add('collapsed');
	}
}