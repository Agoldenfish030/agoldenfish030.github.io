const crypto = require("crypto");

function checkButton(){
    document.getElementById("signIn").addEventListener("click", authorizationStart, false);
}

function authorizationStart(){
    window.location.href("https://auth.atlassian.com/authorize?audience=api.atlassian.com& \
                        client_id=OCRrG6JXdgcJ9hZaFINjXXYcUzm8mqh0& \
                        scope=read%3Aconfluence-space.summary%20 \
                            write%3Aconfluence-space%20 \
                            write%3Aconfluence-file%20 \
                            read%3Aconfluence-props%20 \
                            write%3Aconfluence-props%20 \
                            read%3Aconfluence-content.all%20 \
                            read%3Aconfluence-content.summary& \
                        redirect_uri=https%3A%2F%2Fagoldenfish030.github.io%2FTooMuchStonesToDo%2FIndex.html& \
                        state=${YOUR_USER_BOUND_VALUE}& \
                        response_type=code&prompt=consent");
}

window.addEventListener("load", checkButton, false);