$allPanels = document.querySelectorAll('.panel');

function handleClick(panel) {
	panel.classList.add('active');
	panel.children[0].classList.add('visible');
}

document.addEventListener('click', (e) => {
	if (e.target.matches('.panel')) {
		for ($panel of $allPanels) {
			if ($panel.classList.contains('active')) {
				$panel.classList.remove('active');
				$panel.children[0].classList.remove('visible');
			}
		}
		handleClick(e.target);
	}
});

document.addEventListener('DOMContentLoaded', () => {
	handleClick($allPanels[0]);
});
