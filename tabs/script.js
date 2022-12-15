$tabs = document.querySelectorAll('.tab');
$content = document.querySelectorAll('.content');

function removeClass() {
	for ($tab of $tabs) {
		if ($tab.classList.contains('active')) {
			$tab.classList.remove('active');
		}
	}

	for ($item of $content) {
		if ($item.classList.contains('visible')) {
			$item.classList.remove('visible');
		}
	}
}

document.addEventListener('click', (e) => {
	if (e.target.matches('.tab')) {
		removeClass();
		const content = document.querySelector(
			`#${e.target.getAttribute('id')}-content`
		);
		e.target.classList.add('active');
		console.log(content);
		content.classList.add('visible');
	}
});
