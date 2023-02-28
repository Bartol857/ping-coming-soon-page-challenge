const submitBtn = document.querySelector('.submit-btn');
const input = document.querySelector('.email-input');
const errorMsg = document.querySelector('.error');

function validateEmail() {
	const mailFormat = /^\w+([.-]?=\w+)*@\w+([.-]?=\w+)*(.\w{2,3})+$/;
    
	if (input.value.match(mailFormat)) {
	} else {
		errorMsg.style.display = 'block';
        input.style.borderColor = 'red';
	}
}

submitBtn.addEventListener('click', validateEmail);
