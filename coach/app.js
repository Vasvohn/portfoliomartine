(function () {
    const form = document.getElementById("coach-form");
    const confirmBlock = document.getElementById("confirm");
    const summary = document.getElementById("confirm-summary");
    const resetButton = document.getElementById("new-request");
    const error = document.getElementById("form-error");

    const goals = [
        "Clarifier mon offre",
        "Fixer mes prix",
        "Trouver mes premiers clients",
        "Organiser mes semaines"
    ];

    function showError(message) {
        error.textContent = message;
        error.hidden = false;
    }

    function isEmail(value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = String(form.elements.name.value || "").trim();
        const email = String(form.elements.email.value || "").trim();
        const goal = String(form.elements.goal.value || "").trim();
        const message = String(form.elements.message.value || "").trim();

        if (!name || !email || !goal || message.length < 10) {
            showError("Indiquez votre nom, votre e-mail, un objectif, et un message d’au moins 10 caractères.");
            return;
        }

        if (!isEmail(email) || goals.indexOf(goal) === -1) {
            showError("Vérifiez l’adresse e-mail et choisissez un objectif dans la liste.");
            return;
        }

        summary.textContent = name + ", objectif « " + goal + " ». Un retour partira à " + email + ".";
        error.hidden = true;
        form.hidden = true;
        confirmBlock.hidden = false;
        confirmBlock.focus();
    });

    resetButton.addEventListener("click", function () {
        form.reset();
        summary.textContent = "";
        error.hidden = true;
        confirmBlock.hidden = true;
        form.hidden = false;
        form.elements.name.focus();
    });
})();
