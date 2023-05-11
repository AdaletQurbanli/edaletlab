
function alertVal(){
    firstNameVal = document.getElementById("inp-first-name").value;
    lastNameVal = document.getElementById("inp-last-name").value;
    emailVal  = document.getElementById("inp-email").value;
    passwordVal = document.getElementById("inp-password").value;
    password2Val = document.getElementById("inp-password-2").value;

    alert(firstNameVal+"-"+lastNameVal+"-"+emailVal+"-"+passwordVal+"-"+password2Val);
}
