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
        navProjects: "Projets",
        navContact: "Contact",
        homeHello: "Bonjour, je suis",
        homeAnd: "Et je suis",
        homeIntro: "J’aide les indépendants et petites entreprises à développer leur activité grâce à des sites internet modernes, rapides et sur-mesure.",
        homeMore: "Discutons de votre projet",
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
        projectsTitle: "Mes <span>projets</span>",
        projectEcoKind: "Application",
        projectEcoNeed: "Application anti-gaspillage : suivre le frigo et les placards, proposer des recettes à partir de ce qui est déjà à la maison, planifier les menus de la semaine et estimer les économies.",
        projectAeroKind: "Comparateur de vols",
        projectAeroNeed: "Recherche d’un trajet, comparaison des tarifs, puis réservation du billet chez le partenaire. Le prix affiché est celui du partenaire, sans frais cachés sur Aeromeld.",
        projectMore: "En savoir plus",
        project1Kind: "Site vitrine",
        project1Title: "Artisan paysagiste",
        project1Need: "Être trouvé localement et montrer ses réalisations pour recevoir des demandes de devis, sans dépendre uniquement du bouche-à-oreille.",
        project1Tech: "HTML · CSS · JavaScript",
        project2Kind: "Réservation",
        project2Title: "Restaurant",
        project2Need: "Présenter la carte et permettre de réserver une table en ligne, sans que chaque demande passe par un appel téléphonique.",
        project2Tech: "HTML · CSS · JavaScript",
        project3Kind: "Landing page",
        project3Title: "Coach",
        project3Need: "Expliquer une offre en une page claire et transformer les visites en demandes de rendez-vous.",
        project3Tech: "HTML · CSS · JavaScript",
        projectView: "Voir le projet",
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
        labelName: "Nom",
        labelEmail: "E-mail",
        labelMessage: "Message",
        phName: "Votre nom",
        phEmail: "Votre e-mail",
        phMessage: "Parlez-moi de votre projet",
        contactSend: "Envoyer mon message",
        contactRequired: "Tous les champs sont obligatoires : nom, e-mail et message.",
        contactInvalidEmail: "Veuillez entrer une adresse e-mail valide.",
        contactStatus: "Merci pour votre message. Je vous répondrai dès que possible.",
        contactSending: "Envoi en cours…",
        contactError: "L’envoi a échoué. Veuillez réessayer.",
        footerRights: "Tous droits réservés.",
        cookieText: "Ce site utilise des cookies. Vous pouvez accepter ou refuser.",
        cookieAccept: "Accepter",
        cookieRefuse: "Refuser",
        cookieAria: "Bandeau cookies",
        backTop: "Retour en haut",
        pageDesc: "Martine conçoit des sites internet modernes, rapides et sur-mesure pour les indépendants et les petites entreprises.",
        typed: ["Développeuse Front-end", "Développeuse Back-end", "Développeuse Fullstack", "Web Designer"]
    },
    en: {
        navHome: "Home",
        navAbout: "About",
        navSkills: "Skills",
        navServices: "Services",
        navProjects: "Projects",
        navContact: "Contact",
        homeHello: "Hello, I am",
        homeAnd: "And I am a",
        homeIntro: "I help freelancers and small businesses grow their activity with modern, fast, custom-made websites.",
        homeMore: "Let's talk about your project",
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
        projectsTitle: "My <span>projects</span>",
        projectEcoKind: "Application",
        projectEcoNeed: "An anti-waste app: track the fridge and cupboards, suggest recipes from what is already at home, plan the week’s menus and estimate the savings.",
        projectAeroKind: "Flight comparison",
        projectAeroNeed: "Search a route, compare fares, then book the ticket with the partner. The price shown is the partner’s price, with no hidden fees on Aeromeld.",
        projectMore: "Learn more",
        project1Kind: "Showcase website",
        project1Title: "Landscape gardener",
        project1Need: "Be found locally and show completed work to receive quote requests, without relying only on word of mouth.",
        project1Tech: "HTML · CSS · JavaScript",
        project2Kind: "Reservation",
        project2Title: "Restaurant",
        project2Need: "Present the menu and allow a table to be booked online, without every request going through a phone call.",
        project2Tech: "HTML · CSS · JavaScript",
        project3Kind: "Landing page",
        project3Title: "Coach",
        project3Need: "Explain an offer on one clear page and turn visits into appointment requests.",
        project3Tech: "HTML · CSS · JavaScript",
        projectView: "View the project",
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
        labelName: "Name",
        labelEmail: "E-mail",
        labelMessage: "Message",
        phName: "Your name",
        phEmail: "Your email",
        phMessage: "Tell me about your project",
        contactSend: "Send my message",
        contactRequired: "All fields are required: name, email and message.",
        contactInvalidEmail: "Please enter a valid email address.",
        contactStatus: "Thank you for your message. I will get back to you as soon as possible.",
        contactSending: "Sending…",
        contactError: "Sending failed. Please try again.",
        footerRights: "All rights reserved.",
        cookieText: "This site uses cookies. You can accept or refuse.",
        cookieAccept: "Accept",
        cookieRefuse: "Refuse",
        cookieAria: "Cookie banner",
        backTop: "Back to top",
        pageDesc: "Martine designs modern, fast, custom-made websites for freelancers and small businesses.",
        typed: ["Front-end Developer", "Back-end Developer", "Full-stack Developer", "Web Designer"]
    }
};

let typed;
let currentLang = localStorage.getItem("portfolio-lang") === "en" ? "en" : "fr";

function startTyped(lang) {
    if (!document.querySelector(".text")) {
        return;
    }
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

    const thanks = document.getElementById("form-status");
    if (thanks && thanks.classList.contains("is-thanks")) {
        thanks.textContent = t.contactStatus;
    }
}

document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

setLanguage(currentLang);

const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");

const header = document.querySelector(".header");

function closeMenu() {
    navbar.classList.remove("active");
    header.classList.remove("menu-open");
    menuIcon.classList.remove("bx-x");
    menuIcon.classList.add("bx-menu");
}

menuIcon.addEventListener("click", (event) => {
    event.stopPropagation();
    navbar.classList.toggle("active");
    header.classList.toggle("menu-open", navbar.classList.contains("active"));
    menuIcon.classList.toggle("bx-x", navbar.classList.contains("active"));
    menuIcon.classList.toggle("bx-menu", !navbar.classList.contains("active"));
});

navbar.addEventListener("click", (event) => {
    event.stopPropagation();
});

document.addEventListener("click", () => {
    closeMenu();
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        closeMenu();
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

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

function showThanks() {
    form.hidden = true;
    form.setAttribute("aria-hidden", "true");
    status.hidden = false;
    status.removeAttribute("hidden");
    status.classList.remove("is-error");
    status.classList.add("is-thanks");
    status.textContent = translations[currentLang].contactStatus;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    [form.name, form.email, form.message].forEach((field) => {
        field.classList.remove("is-invalid");
    });

    if (!name || !email || !message) {
        if (!name) form.name.classList.add("is-invalid");
        if (!email) form.email.classList.add("is-invalid");
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

    sessionStorage.setItem("contact-sent", "1");
    form.submit();
    showThanks();
});

if (sessionStorage.getItem("contact-sent") === "1" || new URLSearchParams(window.location.search).get("sent") === "1") {
    showThanks();
}

document.querySelectorAll(".home-img img, .about-img img").forEach((photo) => {
    photo.addEventListener("click", () => {
        photo.classList.toggle("is-shadowed");
    });
});

const revealBlocks = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                }
            });
        },
        { threshold: 0.18, rootMargin: "0px 0px -40px 0px" }
    );
    revealBlocks.forEach((block) => revealObserver.observe(block));
} else {
    revealBlocks.forEach((block) => block.classList.add("in-view"));
}

const cookieBanner = document.getElementById("cookie-banner");
const COOKIE_KEY = "cookie-consent";

function getConsent() {
    const match = document.cookie.split("; ").find((row) => row.startsWith(`${COOKIE_KEY}=`));
    return match ? match.split("=")[1] : localStorage.getItem(COOKIE_KEY);
}

function saveConsent(value) {
    localStorage.setItem(COOKIE_KEY, value);
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    document.cookie = `${COOKIE_KEY}=${value}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
    cookieBanner.hidden = true;
}

if (!getConsent()) {
    cookieBanner.hidden = false;
}

document.getElementById("cookie-accept").addEventListener("click", () => saveConsent("accepted"));
document.getElementById("cookie-refuse").addEventListener("click", () => saveConsent("refused"));

