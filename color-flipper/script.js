const $button = document.querySelector('.click');
const $section = document.querySelector('section');
const $body = document.querySelector('body');
let oldColor = '';

const colours = [
	'plum',
	'blue',
	'MediumPurple',
	'aqua',
	'RebeccaPurple',
	'blueviolet',
	'chocolate',
	'chartreuse',
	'IndianRed',
	'Salmon',
	'Crimson',
	'HotPink',
	'DeepPink',
	'Tomato',
	'gold',
	'khaki',
	'lavender',
	'Indigo',
	'DarkSlateBlue',
	'Lime',
	'Olive',
	'Teal',
	'Navy',
];

const getRandomColour = () => {
	const index = Math.floor(Math.random() * colours.length);
	return colours[index];
};

const flip = () => {
	let color = getRandomColour().toLowerCase();
	while (color === oldColor) {
		console.log('repeated');
		color = getRandomColour().toLowerCase();
	}
	$section.innerHTML = `
        <div class="container">
            <p>
                background-color: <span class="color">${color}</span> 
            </p>
        </div>
        <button class="click">Change the color!</button>
    `;

	$body.style.backgroundColor = color;
	document.querySelector('.color').style.color = color;
	return color;
};

document.addEventListener('click', (e) => {
	if (e.target.matches('.click')) {
		oldColor = flip();
	}
});

document.addEventListener('DOMContentLoaded', () => {
	oldColor = flip();
});
