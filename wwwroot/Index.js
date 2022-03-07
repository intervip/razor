export function updateElementStyle(id, property, value) {
	document.getElementById(id).style[property] = value;
}

export function addClass(id, className) {
	document.getElementById(id).classList.add(className);
}

export function removeClass(id, className) {
	document.getElementById(id).classList.remove(className);
}