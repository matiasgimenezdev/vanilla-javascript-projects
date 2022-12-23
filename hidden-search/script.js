const $button = document.querySelector('.search-button ');
const $input = document.querySelector('.search-input');

document.addEventListener('click', (e) => {
	if (
		e.target.matches('.search-button *') ||
		e.target.matches('.search-button')
	) {
		if ($input.classList.contains('active')) {
			$input.classList.remove('active');
		} else {
			$input.classList.add('active');
		}
	}
});
