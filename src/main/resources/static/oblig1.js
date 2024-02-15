function validateForm() {
    let formHasError = false;
    document.getElementById("fNavnVal").innerHTML=" ";
    let forNavn = document.forms["myForm"]["fNavn"].value;
    if (forNavn == "") {
        document.getElementById("fNavnVal").innerHTML = "This Field is required";
        formHasError = true;
    }
       else if (!/^[a-z][a-z\s]*$/.test(forNavn)){
            document.getElementById("fNavnVal").innerHTML="enter only alpahabet";
            formHasError = true;
        }

    document.getElementById("telefonnrVal").innerHTML=" ";
    let telefonnummer = document.forms["myForm"]["telefonnr"].value;
    if (telefonnummer == "") {
        document.getElementById("telefonnrVal").innerHTML="This Field is required";
        formHasError = true;


    }
    else if (isNaN(Number(telefonnummer)) || telefonnummer.length !== 8) {
        document.getElementById("telefonnrVal").innerHTML="enter a valid tel-number";
        formHasError = true;

    }
    return false;

}

