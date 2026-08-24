document.addEventListener("DOMContentLoaded", function() {
    const user = "billy.halle";
    const domain = "stringempty.dev";
    const maVraieAdresse = user + "@" + domain;

    const emailLink = document.querySelector('a.email');

    if (emailLink) {
        emailLink.textContent = maVraieAdresse;
        emailLink.setAttribute('href', 'mailto:' + maVraieAdresse);
    }

    function lightSwitch(e) {
        var darkClass = "dark";
        if (e.target.checked) {
            document.body.classList.add(darkClass);
        } else {
            document.body.classList.remove(darkClass);
        }
    }

    let lightSwitchElem = document.getElementById('darkmode');
    if (lightSwitchElem) {
        lightSwitchElem.addEventListener('click', lightSwitch);
        lightSwitch({ target: lightSwitchElem });
    }
});
