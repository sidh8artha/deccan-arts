const scriptURL = 'https://script.google.com/macros/s/AKfycbx6YtZTZj93CyeEPQfl4SEjc_BmBNWTQhuNblsdHBoViYqXX495tbAhS8zB1CByv_r2UA/exec'
const form = document.forms['Story-form']
		  
    form.addEventListener('submit', e => {
        e.preventDefault()
		fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		.then(response => alert("Thank you! your form is submitted successfully." ))
		.then(() => {  window.location.reload(); })
		.catch(error => console.error('Error!', error.message))
	})			

     
