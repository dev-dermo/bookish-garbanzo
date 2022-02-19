const nameEl = document.querySelector('#name');
const emailEl = document.querySelector('#email');
const phoneEl = document.querySelector('#phone');
const githubEl = document.querySelector('#github');
const pitchEl = document.querySelector('#pitch');

nameEl.setAttribute('required', true);
emailEl.setAttribute('required', true);
phoneEl.setAttribute('required', true);
// githubEl.setAttribute('required', true);
pitchEl.setAttribute('required', true);

document.querySelector('form').addEventListener('submit', event => {
	event.preventDefault();

	const name = nameEl.value.trim();
	const email = emailEl.value.trim();
	const phone = phoneEl.value.trim();
	const github = githubEl.value.trim() || '';
	const pitch = pitchEl.value.trim();

	console.table({ name, email, phone, github, pitch });

	if (name && email && phone && pitch) {
		// fetch()
		console.log('Sending to server...');
	}
});