(function () {
    const form = document.getElementById("reserve-form");
    const confirmBlock = document.getElementById("confirm");
    const summary = document.getElementById("confirm-summary");
    const resetButton = document.getElementById("new-reservation");
    const error = document.getElementById("form-error");
    const closedMessage = "Le restaurant est fermé le lundi. Choisissez un autre jour.";

    const dateInput = form.elements.date;
    if (dateInput) {
        const today = new Date();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        dateInput.min = today.getFullYear() + "-" + month + "-" + day;
    }

    function showError(message) {
        error.textContent = message;
        error.hidden = false;
    }

    function parseDate(value) {
        const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
        if (!match) {
            return null;
        }
        const year = Number(match[1]);
        const month = Number(match[2]);
        const day = Number(match[3]);
        const date = new Date(year, month - 1, day);
        if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
            return null;
        }
        date.setHours(0, 0, 0, 0);
        return date;
    }

    function isServiceTime(value) {
        const match = /^(\d{1,2}):(\d{2})$/.exec(value);
        if (!match) {
            return false;
        }
        const hour = Number(match[1]);
        const minute = Number(match[2]);
        if (minute > 59) {
            return false;
        }
        const total = hour * 60 + minute;
        const lunch = total >= 12 * 60 && total <= 14 * 60;
        const dinner = total >= 19 * 60 && total <= 22 * 60;
        return lunch || dinner;
    }

    function formatFrenchDate(date) {
        return new Intl.DateTimeFormat("fr-FR", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        }).format(date);
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = String(form.elements.name.value || "").trim();
        const email = String(form.elements.email.value || "").trim();
        const phone = String(form.elements.phone.value || "").trim();
        const dateValue = String(form.elements.date.value || "").trim();
        const time = String(form.elements.time.value || "").trim();
        const guests = String(form.elements.guests.value || "").trim();

        if (!name || !email || !phone || !dateValue || !time || !guests) {
            showError("Indiquez votre nom, votre e-mail, votre téléphone, la date, l’heure et le nombre de couverts.");
            return;
        }

        const guestCount = Number(guests);
        if (!Number.isInteger(guestCount) || guestCount < 1 || guestCount > 8) {
            showError("Le nombre de couverts doit être compris entre 1 et 8.");
            return;
        }

        const date = parseDate(dateValue);
        if (!date) {
            showError("Choisissez une date valide.");
            return;
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (date < today || date.getDay() === 1) {
            showError(closedMessage);
            return;
        }

        if (!isServiceTime(time)) {
            showError("Les réservations sont prises au déjeuner de 12 h à 14 h et au dîner de 19 h à 22 h.");
            return;
        }

        const covers = guestCount === 1 ? "1 couvert" : guestCount + " couverts";
        summary.textContent = name + ", " + covers + ", " + formatFrenchDate(date) + " à " + time + ".";
        error.hidden = true;
        form.hidden = true;
        confirmBlock.hidden = false;
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
