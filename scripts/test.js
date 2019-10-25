console.log("start js logic :)");

var email = document.getElementById("email");


function onEmailFocus() {
    document.getElementById("ani-eye_r").beginElement();
    document.getElementById("ani-eye_l").beginElement();
    document.getElementById("ani-pupil_r").beginElement();
}

function onEmailBlur() {
    document.getElementById("ani-eye_rb").beginElement();
    document.getElementById("ani-eye_lb").beginElement();
}

email.addEventListener("focus", onEmailFocus, false);
email.addEventListener("blur", onEmailBlur, false);