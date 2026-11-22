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
        photoAlt: "Portrait de Martine .A",
        aboutTitle: "À propos de <span>moi</span>",
        aboutRole: "Martine .A · développeuse web junior",
        aboutP1: "J’ai travaillé dans le secteur de la santé depuis 2018. En 2023, je me suis orientée vers le développement web. J’ai participé à la piscine de Zone01 en février et mars 2023, une expérience intensive qui a confirmé mon choix de reconversion.",
        aboutP2: "Aujourd’hui, je suis autoentrepreneur. Je réalise des sites vitrines, des landing pages et l’intégration front-end d’applications web, avec une approche claire et soignée.",
        aboutCta: "Me contacter",
        skillsTitle: "Mes <span>compétences</span>",
        servicesTitle: "Mes <span>services</span>",
        svcFullTitle: "Sites vitrines",
        svcFullText: "Un site clair pour présenter une activité, montrer des réalisations et recevoir des demandes de devis.",
        svcFrontTitle: "Landing pages",
        svcFrontText: "Une page qui explique une offre et transforme les visites en demandes de contact ou de rendez-vous.",
        svcBackTitle: "Intégration front-end",
        svcBackText: "Mise en page soignée et responsive, en HTML, CSS et JavaScript, à partir d’une maquette ou d’un contenu existant.",
        svcDesignTitle: "Applications web",
        svcDesignText: "Interfaces d’applications, avec React, Next.js ou Tailwind CSS lorsque le projet le demande.",
        projectsTitle: "Mes <span>projets</span>",
        projectEcoKind: "Application",
        projectEcoNeed: "Application anti-gaspillage : suivre le frigo et les placards, proposer des recettes à partir de ce qui est déjà à la maison, planifier les menus de la semaine et estimer les économies.",
        projectEcoRole: "Intégration de l’application · HTML, CSS, JavaScript, Tailwind CSS",
        projectAeroKind: "Comparateur de vols",
        projectAeroNeed: "Recherche d’un trajet, comparaison des tarifs, puis réservation du billet chez le partenaire. Le prix affiché est celui du partenaire, sans frais cachés sur Aeromeld.",
        projectAeroRole: "Interface de comparaison · Next.js, React",
        projectMore: "Voir le projet",
        project1Kind: "Site vitrine",
        project1Title: "Artisan paysagiste",
        project1Need: "Être trouvé localement et montrer ses réalisations pour recevoir des demandes de devis, sans dépendre uniquement du bouche-à-oreille.",
        project1Role: "Conception et intégration du site · HTML, CSS, JavaScript",
        project1Tech: "HTML · CSS · JavaScript",
        project2Kind: "Réservation",
        project2Title: "Restaurant",
        project2Need: "Présenter la carte et permettre de réserver une table en ligne, sans que chaque demande passe par un appel téléphonique.",
        project2Role: "Page de réservation livrée · HTML, CSS, JavaScript",
        project2Tech: "HTML · CSS · JavaScript",
        project3Kind: "Landing page",
        project3Title: "Coach",
        project3Need: "Expliquer une offre en une page claire et transformer les visites en demandes de rendez-vous.",
        project3Role: "Landing page livrée · HTML, CSS, JavaScript",
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
        footerRights: "Licence : tous droits réservés.",
        cookieText: "Ce site utilise des cookies. Vous pouvez accepter ou refuser.",
        cookieAccept: "Accepter",
        cookieRefuse: "Refuser",
        cookieAria: "Bandeau cookies",
        backTop: "Retour en haut",
        pageDesc: "Martine .A, développeuse web junior, conçoit des sites vitrines, des landing pages et des applications web pour les indépendants et les petites entreprises.",
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
        photoAlt: "Portrait of Martine .A",
        aboutTitle: "About <span>me</span>",
        aboutRole: "Martine .A · junior web developer",
        aboutP1: "I worked in healthcare from 2018. In 2023, I moved into web development. I took part in the Zone01 piscine in February and March 2023, an intensive experience that confirmed my career change.",
        aboutP2: "Today I am self-employed. I build brochure sites, landing pages and the front-end of web applications, with a clear and careful approach.",
        aboutCta: "Contact me",
        skillsTitle: "My <span>skills</span>",
        servicesTitle: "My <span>services</span>",
        svcFullTitle: "Brochure sites",
        svcFullText: "A clear site to present a business, show the work and receive quote requests.",
        svcFrontTitle: "Landing pages",
        svcFrontText: "One page that explains an offer and turns visits into contact or appointment requests.",
        svcBackTitle: "Front-end integration",
        svcBackText: "Careful, responsive layout in HTML, CSS and JavaScript, from a design or existing content.",
        svcDesignTitle: "Web applications",
        svcDesignText: "Application interfaces, with React, Next.js or Tailwind CSS when the project needs them.",
        projectsTitle: "My <span>projects</span>",
        projectEcoKind: "Application",
        projectEcoNeed: "An anti-waste app: track the fridge and cupboards, suggest recipes from what is already at home, plan the week’s menus and estimate the savings.",
        projectEcoRole: "Front-end build of the app · HTML, CSS, JavaScript, Tailwind CSS",
        projectAeroKind: "Flight comparison",
        projectAeroNeed: "Search a route, compare fares, then book the ticket with the partner. The price shown is the partner’s price, with no hidden fees on Aeromeld.",
        projectAeroRole: "Comparison interface · Next.js, React",
        projectMore: "View the project",
        project1Kind: "Showcase website",
        project1Title: "Landscape gardener",
        project1Need: "Be found locally and show completed work to receive quote requests, without relying only on word of mouth.",
        project1Role: "Site design and front-end build · HTML, CSS, JavaScript",
        project1Tech: "HTML · CSS · JavaScript",
        project2Kind: "Reservation",
        project2Title: "Restaurant",
        project2Need: "Present the menu and allow a table to be booked online, without every request going through a phone call.",
        project2Role: "Booking page delivered · HTML, CSS, JavaScript",
        project2Tech: "HTML · CSS · JavaScript",
        project3Kind: "Landing page",
        project3Title: "Coach",
        project3Need: "Explain an offer on one clear page and turn visits into appointment requests.",
        project3Role: "Landing page delivered · HTML, CSS, JavaScript",
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
        footerRights: "License: all rights reserved.",
        cookieText: "This site uses cookies. You can accept or refuse.",
        cookieAccept: "Accept",
        cookieRefuse: "Refuse",
        cookieAria: "Cookie banner",
        backTop: "Back to top",
        pageDesc: "Martine .A, a junior web developer, builds brochure sites, landing pages and web applications for freelancers and small businesses.",
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
        typed = null;
    }
    if (typeof Typed !== "function") {
        return;
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
    status.hidden = false;
    status.removeAttribute("hidden");
    status.classList.remove("is-error");
    status.classList.add("is-thanks");
    status.textContent = translations[currentLang].contactStatus;
    form.reset();
    const subject = document.getElementById("mail-subject");
    if (subject) {
        subject.value = "Message depuis le portfolio";
    }
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

    form.submit();
    showThanks();
});

if (new URLSearchParams(window.location.search).get("sent") === "1") {
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

