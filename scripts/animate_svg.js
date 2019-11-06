console.log("start js logic :)");

let email = document.getElementById("email");

function onEmailFocus() {
    document.getElementById("ani-eye_r").beginElement();
    document.getElementById("ani-eye_l").beginElement();
}

function onEmailBlur() {
    document.getElementById("ani-eye_rb").beginElement();
    document.getElementById("ani-eye_lb").beginElement();
}

email.addEventListener("focus", onEmailFocus, false);
email.addEventListener("blur", onEmailBlur, false);