// GRAB ALL ELEMENTS TO BE USED
const bodyEl = document.querySelector('body');
const nameEl = document.querySelector('#name');
const emailEl = document.querySelector('#email');
const phoneEl = document.querySelector('#phone');
const githubEl = document.querySelector('#github');
const learningEl = document.querySelector('#learning');
const pitchEl = document.querySelector('#pitch');
const formEl = document.querySelector('form');
const submitEl = document.querySelector('button');

// MAKE CERTAIN FIELDS REQUIRED
nameEl.setAttribute('required', true);
emailEl.setAttribute('required', true);
phoneEl.setAttribute('required', true);
// githubEl.setAttribute('required', true);
learningEl.setAttribute('required', true);
pitchEl.setAttribute('required', true);

// DISABLE SUBMIT BUTTON UNTIL ALL FIELDS ARE FILLED
submitEl.setAttribute('disabled', true);
bodyEl.addEventListener('keyup', event => {
	const name = nameEl.value.trim();
	const email = emailEl.value.trim();
	const phone = phoneEl.value.trim();
	const github = githubEl.value.trim() || '';
	const learning = learningEl.value.trim();
	const pitch = pitchEl.value.trim();

	if (name && email && phone && learning && pitch) {
		submitEl.removeAttribute('disabled');
	} else {
		submitEl.setAttribute('disabled', true);
	}
});

// AUTO GENERATE H1
nameEl.addEventListener('input', event => {
	const name = nameEl.value.trim();
	const nameContainer = document.querySelector('h1');

	if (!name) {
		nameContainer.textContent = 'Application';
	} else {
		nameContainer.textContent = 'Application for ' + name;
	}
});

// SUBMIT FORM
formEl.addEventListener('submit', event => {
	event.preventDefault();

	const name = nameEl.value.trim();
	const email = emailEl.value.trim();
	const phone = phoneEl.value.trim();
	const github = githubEl.value.trim() || '';
	const learning = learningEl.value.trim();
	const pitch = pitchEl.value.trim();

	console.table({ name, email, phone, github, learning, pitch });

	if (name && email && phone && github && pitch) {
		// fetch()
		console.log('Sending to server...');
	}
});
