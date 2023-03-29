function validateForm() {
		let x = document.forms["myForm"]["fname"].value;
		if (x == "") {
			alert("Name must be filled out");
			return false;
		}
		let y = document.forms["myForm"]["Email"].value;
		if (y == "") {
			alert("Email must be filled out");
			return false;
		}
		let z = document.forms["myForm"]["Comments"].value;
		if (z == "") {
			alert("Comments must be filled out");
			return false;
		}
	}