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

const translations = {
    fr: {
        navHome: "Accueil",
        navAbout: "À propos",
        navSkills: "Compétences",
        navServices: "Services",
        navContact: "Contact",
        homeHello: "Bonjour, je suis",
        homeAnd: "Et je suis",
        homeIntro: "Développeuse fullstack et web designer. Après plusieurs années dans la santé, je me consacre depuis 2023 au développement web, en autoentrepreneur.",
        homeMore: "En savoir plus",
        photoAlt: "Portrait d'Asiata Martine",
        aboutTitle: "À propos de <span>moi</span>",
        aboutRole: "Développeuse fullstack & web designer",
        aboutP1: "J’ai travaillé dans le secteur de la santé depuis 2018. En 2023, je me suis orientée vers le développement web. J’ai participé à la piscine de Zone01 en février et mars 2023, une expérience intensive qui a confirmé mon choix de reconversion.",
        aboutP2: "Aujourd’hui, je suis autoentrepreneur. J’accompagne mes clients sur le front-end, le back-end et le design d’interfaces, avec une approche claire, soignée et centrée sur l’utilisateur.",
        aboutCta: "Me contacter",
        skillsTitle: "Mes <span>compétences</span>",
        servicesTitle: "Mes <span>services</span>",
        svcFullTitle: "Développeuse fullstack",
        svcFullText: "Conception et réalisation d’applications web de bout en bout, de l’interface à la base de données.",
        svcFrontTitle: "Front-end",
        svcFrontText: "Interfaces responsives, accessibles et modernes avec HTML, CSS, JavaScript, Bootstrap et Angular.",
        svcBackTitle: "Back-end",
        svcBackText: "Logique métier, API et bases de données avec PHP/MySQL et Python, pour des sites fiables et maintenables.",
        svcDesignTitle: "Web designer",
        svcDesignText: "Identité visuelle, mise en page et expérience utilisateur pour un site clair, professionnel et mémorable.",
        pathTitle: "Mon <span>parcours</span>",
        path1Title: "Santé",
        path1Text: "Début de mon parcours professionnel dans le secteur de la santé.",
        path2Date: "Février – mars 2023",
        path2Title: "Piscine Zone01",
        path2Text: "Participation à la piscine de Zone01, immersion intensive dans le développement.",
        path3Date: "Depuis 2023",
        path3Title: "Développement web",
        path3Text: "Reconversion vers le développement web, le fullstack et le web design.",
        path4Date: "Aujourd’hui",
        path4Title: "Autoentrepreneur",
        path4Text: "Activité indépendante : sites, applications et accompagnement digital.",
        contactTitle: "Me <span>contacter</span>",
        labelName: "Nom *",
        labelEmail: "Adresse e-mail *",
        labelSubject: "Sujet *",
        labelMessage: "Message *",
        phName: "Votre nom *",
        phEmail: "Votre adresse e-mail *",
        phSubject: "Sujet *",
        phMessage: "Votre message *",
        contactSend: "Envoyer",
        contactRequired: "Tous les champs sont obligatoires : nom, adresse e-mail, sujet et message.",
        contactInvalidEmail: "Veuillez entrer une adresse e-mail valide.",
        contactStatus: "Votre application mail s’ouvre pour envoyer le message à asmartine@yahoo.com.",
        footerRights: "Tous droits réservés.",
        backTop: "Retour en haut",
        pageDesc: "Portfolio d'Asiata Martine, développeuse fullstack, front-end, back-end et web designer.",
        typed: ["Développeuse Fullstack", "Développeuse Front-end", "Développeuse Back-end", "Web Designer"]
    },
    en: {
        navHome: "Home",
        navAbout: "About",
        navSkills: "Skills",
        navServices: "Services",
        navContact: "Contact",
        homeHello: "Hello, I am",
        homeAnd: "And I am a",
        homeIntro: "Full-stack developer and web designer. After several years in healthcare, I have focused on web development since 2023, as a self-employed professional.",
        homeMore: "Learn more",
        photoAlt: "Portrait of Asiata Martine",
        aboutTitle: "About <span>me</span>",
        aboutRole: "Full-stack developer & web designer",
        aboutP1: "I worked in healthcare from 2018. In 2023, I moved into web development. I took part in the Zone01 piscine in February and March 2023, an intensive experience that confirmed my career change.",
        aboutP2: "Today I work as a self-employed professional. I support clients on front-end, back-end and interface design, with a clear, careful and user-centered approach.",
        aboutCta: "Contact me",
        skillsTitle: "My <span>skills</span>",
        servicesTitle: "My <span>services</span>",
        svcFullTitle: "Full-stack developer",
        svcFullText: "Design and delivery of web applications from end to end, from the interface to the database.",
        svcFrontTitle: "Front-end",
        svcFrontText: "Responsive, accessible and modern interfaces with HTML, CSS, JavaScript, Bootstrap and Angular.",
        svcBackTitle: "Back-end",
        svcBackText: "Business logic, APIs and databases with PHP/MySQL and Python, for reliable and maintainable websites.",
        svcDesignTitle: "Web designer",
        svcDesignText: "Visual identity, layout and user experience for a clear, professional and memorable website.",
        pathTitle: "My <span>journey</span>",
        path1Title: "Healthcare",
        path1Text: "Start of my professional path in the healthcare sector.",
        path2Date: "February – March 2023",
        path2Title: "Zone01 piscine",
        path2Text: "Participation in the Zone01 piscine, an intensive immersion in development.",
        path3Date: "Since 2023",
        path3Title: "Web development",
        path3Text: "Career change toward web development, full-stack work and web design.",
        path4Date: "Today",
        path4Title: "Self-employed",
        path4Text: "Independent activity: websites, applications and digital support.",
        contactTitle: "Contact <span>me</span>",
        labelName: "Name *",
        labelEmail: "Email address *",
        labelSubject: "Subject *",
        labelMessage: "Message *",
        phName: "Your name *",
        phEmail: "Your email address *",
        phSubject: "Subject *",
        phMessage: "Your message *",
        contactSend: "Send",
        contactRequired: "All fields are required: name, email address, subject and message.",
        contactInvalidEmail: "Please enter a valid email address.",
        contactStatus: "Your mail app will open to send the message to asmartine@yahoo.com.",
        footerRights: "All rights reserved.",
        backTop: "Back to top",
        pageDesc: "Portfolio of Asiata Martine, full-stack, front-end and back-end developer and web designer.",
        typed: ["Full-stack Developer", "Front-end Developer", "Back-end Developer", "Web Designer"]
    }
};

let typed;
let currentLang = localStorage.getItem("portfolio-lang") === "en" ? "en" : "fr";

function startTyped(lang) {
    if (typed) {
        typed.destroy();
    }
    typed = new Typed(".text", {
        strings: translations[lang].typed,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("portfolio-lang", lang);
    document.documentElement.lang = lang;
    const t = translations[lang];

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        el.textContent = t[el.dataset.i18n];
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
        el.innerHTML = t[el.dataset.i18nHtml];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        el.placeholder = t[el.dataset.i18nPlaceholder];
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
        el.alt = t[el.dataset.i18nAlt];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
        el.setAttribute("aria-label", t[el.dataset.i18nAria]);
    });

    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
        desc.setAttribute("content", t.pageDesc);
    }

    document.querySelectorAll(".lang-switch button").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    startTyped(lang);
}

document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

setLanguage(currentLang);

const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");

menuIcon.addEventListener("click", (event) => {
    event.stopPropagation();
    navbar.classList.toggle("active");
});

navbar.addEventListener("click", (event) => {
    event.stopPropagation();
});

document.addEventListener("click", () => {
    navbar.classList.remove("active");
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
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    [form.name, form.email, form.subject, form.message].forEach((field) => {
        field.classList.remove("is-invalid");
    });

    if (!name || !email || !subject || !message) {
        if (!name) form.name.classList.add("is-invalid");
        if (!email) form.email.classList.add("is-invalid");
        if (!subject) form.subject.classList.add("is-invalid");
        if (!message) form.message.classList.add("is-invalid");
        status.hidden = false;
        status.classList.add("is-error");
        status.textContent = translations[currentLang].contactRequired;
        return;
    }

    if (!emailPattern.test(email)) {
        form.email.classList.add("is-invalid");
        status.hidden = false;
        status.classList.add("is-error");
        status.textContent = translations[currentLang].contactInvalidEmail;
        return;
    }

    const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:asmartine@yahoo.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    status.classList.remove("is-error");
    status.hidden = false;
    status.textContent = translations[currentLang].contactStatus;
    form.reset();
});
