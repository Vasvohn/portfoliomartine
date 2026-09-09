(function protectSite() {
    const isFormField = (el) => el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA");

    const block = (event) => {
        if (isFormField(event.target)) {
            return;
        }
        event.preventDefault();
    };

    document.addEventListener("contextmenu", block);
    document.addEventListener("copy", block);
    document.addEventListener("cut", block);
    document.addEventListener("paste", block);
    document.addEventListener("dragstart", block);
    document.addEventListener("selectstart", block);

    document.addEventListener("keydown", (event) => {
        const key = event.key.toLowerCase();
        const blockedCombo =
            event.ctrlKey && ["c", "x", "u", "s", "p", "a"].includes(key);
        const blockedInspect =
            event.key === "F12" ||
            (event.ctrlKey && event.shiftKey && ["i", "j", "c"].includes(key));

        if (isFormField(event.target) && key !== "u" && event.key !== "F12" && !(event.ctrlKey && event.shiftKey)) {
            return;
        }

        if (blockedCombo || blockedInspect) {
            event.preventDefault();
        }
    });
})();

var typed = new Typed(".text", {
    strings: [
        "Développeuse Fullstack",
        "Développeuse Front-end",
        "Développeuse Back-end",
        "Web Designer"
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        navLinks.forEach((item) => item.classList.remove("active"));
        link.classList.add("active");
    });
});

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    sections.forEach((section) => {
        const offset = section.offsetTop - 140;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");
        const correspondingLink = document.querySelector(`.navbar a[href="#${id}"]`);

        if (correspondingLink && scrollY >= offset && scrollY < offset + height) {
            navLinks.forEach((link) => link.classList.remove("active"));
            correspondingLink.classList.add("active");
        }
    });
});

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();
    const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.href = `mailto:asmartine@yahoo.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    status.hidden = false;
    status.textContent = "Votre application mail s’ouvre pour envoyer le message à asmartine@yahoo.com.";
    form.reset();
});
