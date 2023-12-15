


function verifyPassword() {
    let password1 = document.getElementById("pass1").value;
    let password2 = document.getElementById("pass2").value;

    let passwordInput = document.getElementById("pass1");
    let confirmPassword = document.getElementById("pass2");

    if(password1 != password2){
        document.getElementById("message").innerHTML= "* Passwords do not match";
        document.getElementById("message").style.color = "red";

        passwordInput.style.border = "1px solid red";
        confirmPassword.style.border = "1px solid red";
    }
    else {
        document.getElementById("message").innerHTML= "";

        passwordInput.style.border = "1px solid black";
        confirmPassword.style.border = "1px solid black";
    }
}

