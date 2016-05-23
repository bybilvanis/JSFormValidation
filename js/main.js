function validateForm(formId) {
  	var inputs, index;
	var form=document.getElementById(formId);
	inputs = form.getElementsByTagName('input');
	for (index = 0; index < inputs.length; ++index) {
	    // deal with inputs[index] element.
	    if (inputs[index].value==null || inputs[index].value==""){
	        document.getElementById("foutVoornaam").innerHTML = "Voornaam mag niet leeg zijn.";
	        return false;
	    } 
	}
	for (index = 0; index < inputs.length; ++index) {
	    // deal with inputs[index] element.
	    if (inputs[index].value==null || inputs[index].value==""){
	        document.getElementById("foutAchternaam").innerHTML = "Achternaam mag niet leeg zijn.";
	        return false;
	    } 
	}
}


