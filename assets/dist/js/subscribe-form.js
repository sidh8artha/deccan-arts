(() => {
    'use strict'

    const form = document.getElementById('subscribe_form');

    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
    }, false)
})
()

const scriptURL = 'https://script.google.com/macros/s/AKfycbzpj6GufIsK7RS6e9visvjNq99J8JdZhdRU73TRM8DkQ5T-MDVFZLoHB0SVPMjxdLg/exec'
const form = document.forms['subscribe_form']
		  
form.addEventListener('submit', e => {
    e.preventDefault()
	fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully." ))
	.then(() => {  window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})			