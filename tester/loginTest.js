function checkButton(){
    document.getElementById("signIn").addEventListener("click", authorizationStart, false);
}

function authorizationStart(){}

window.addEventListener("load", checkButton, false);