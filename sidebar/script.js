const $toggleButton = document.querySelector('.toggle-button');
const $sidebar = document.querySelector('.sidebar');

const changeStateSidebar = () => {
	if ($sidebar.classList.contains('active')) {
		$sidebar.classList.remove('active');
	} else {
		$sidebar.classList.add('active');
	}
};

document.addEventListener('click', (e) => {
	if (
		e.target.matches('.toggle-button') ||
		e.target.matches('.toggle-button span')
	) {
		changeStateSidebar();
	}
});
