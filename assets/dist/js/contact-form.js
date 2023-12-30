(() => {
    'use strict'

    const form = document.getElementById('contact_form');

    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
    }, false)
})
()

const scriptURL = 'https://script.google.com/macros/s/AKfycby07cOHcEjxuOSwCvtegs0BvXXxu8XE0Qr3303f2fFACHDa9fpS4tX5SiQz4KQwxUEe/exec'
const form = document.forms['contact_form']
		  
form.addEventListener('submit', e => {
    e.preventDefault()
	fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully." ))
	.then(() => {  window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})			