//Use RegEx to validate form

function validateInput(firstname, lastname, phone, email) {
	var phoneReg = /^[0-9]+$/;
	var emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	console.log(firstname + lastname + phone + email);
	if (firstname && lastname && phoneReg.test(phone) && emailReg.test(email))
	{
		console.log("Yeah");
	}

}
