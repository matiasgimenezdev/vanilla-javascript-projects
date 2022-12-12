const $button = document.querySelector('.click');
const $section = document.querySelector('section');
const $body = document.querySelector('body');

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
	const colour = getRandomColour().toLowerCase();
	$section.innerHTML = `
        <div class="container">
            <p>
                background-color: <span class="colour">${colour}</span> 
            </p>
        </div>
        <button class="click">Click me!</button>
    `;

	$body.style.backgroundColor = colour;
	document.querySelector('.colour').style.color = colour;
};

document.addEventListener('click', (e) => {
	if (e.target.matches('.click')) {
		flip();
	}
});

document.addEventListener('DOMContentLoaded', () => {
	flip();
});
