// ==============================
// TYPING EFFECT
// ==============================

const typingElement = document.querySelector(".typing");

const professions = [
    "Python Developer",
    "Software Engineer",
    "Machine Learning Enthusiast",
    "Web Developer",
    "CSE'27 Student"
];

let professionIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentText = professions[professionIndex];

    if (!isDeleting) {
        typingElement.textContent =
            currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            professionIndex++;

            if (professionIndex >= professions.length) {
                professionIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();


// ==============================
// MOBILE MENU TOGGLE
// ==============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu after clicking link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ==============================
// BACK TO TOP BUTTON
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==============================
// NAVBAR ACTIVE LINK
// ==============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href").includes(current)
        ) {
            link.classList.add("active-link");
        }

    });

});


// ==============================
// NAVBAR SHADOW ON SCROLL
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.12)";

    } else {

        header.style.boxShadow =
            "none";

    }

});


// ==============================
// SCROLL REVEAL ANIMATION
// ==============================

const revealElements = document.querySelectorAll(
    ".section-title, .project-card, .skill, .timeline-item, .achievement-card, .info-box"
);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });
}

// Initial hidden state

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition =
        "all 0.8s ease";

});

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


// ==============================
// HERO IMAGE FLOAT ANIMATION
// ==============================

const heroImage = document.querySelector(".hero-image img");

if (heroImage) {

    setInterval(() => {

        heroImage.animate(
            [
                { transform: "translateY(0px)" },
                { transform: "translateY(-10px)" },
                { transform: "translateY(0px)" }
            ],
            {
                duration: 3000,
                iterations: 1
            }
        );

    }, 3000);

}


// ==============================
// PROJECT CARD HOVER GLOW
// ==============================

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mousemove", () => {

        card.style.boxShadow =
            "0 15px 35px rgba(37,99,235,0.25)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow =
            "0 8px 25px rgba(0,0,0,0.08)";

    });

});


// ==============================
// CONTACT FORM DEMO MESSAGE
// ==============================

const contactForm =
    document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            alert(
                "Thank you for contacting me! I will get back to you soon."
            );

            contactForm.reset();
        }
    );
}


// ==============================
// PAGE LOADER EFFECT
// ==============================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition =
            "opacity 0.8s ease";

        document.body.style.opacity = "1";

    }, 100);

});


// ==============================
// SKILL BAR ANIMATION
// ==============================

const skillBars =
    document.querySelectorAll(".progress span");

function animateSkills() {

    skillBars.forEach(bar => {

        const finalWidth =
            bar.style.width;

        bar.style.width = "0";

        setTimeout(() => {

            bar.style.width = finalWidth;

        }, 500);

    });

}

window.addEventListener(
    "load",
    animateSkills
);