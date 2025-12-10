function checkButton(){
    document.getElementById("signIn").addEventListener("click", authorizationStart, false);
}

function authorizationStart(){
    /*
    https://auth.atlassian.com/authorize?
    audience=api.atlassian.com&
    client_id=OCRrG6JXdgcJ9hZaFINjXXYcUzm8mqh0&
    scope=read:confluence-space.summary%20
        write:confluence-space%20
        write:confluence-file%20
        read:confluence-props%20
        write:confluence-props%20
        read:confluence-content.all%20
        read:confluence-content.summary&
    redirect_uri=https://YOUR_APP_CALLBACK_URL&
    state=YOUR_USER_BOUND_VALUE&
    response_type=code&
    prompt=consent
    */
}

window.addEventListener("load", checkButton, false);