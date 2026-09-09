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
    status.hidden = false;
    status.textContent = "Merci pour votre message. Je vous répondrai dès que possible.";
    form.reset();
});
