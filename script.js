
/* ==========================================
   NEXORA AI — INTERACTIVE WEBSITE
========================================== */

// CONTACT FORM
// Allow the browser to submit the form to FormSubmit.
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function () {
        const submitButton = contactForm.querySelector(
            'button[type="submit"]'
        );

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "Sending...";
        }
    });
}


// MOBILE MENU
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
    menuButton.setAttribute("aria-expanded", "false");

    menuButton.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("active");

        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation menu");
        });
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            navLinks.classList.remove("active");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation menu");
        }
    });
}


// NAVBAR SCROLL EFFECT
const navbar = document.querySelector(".navbar");

function updateNavbar() {
    if (!navbar) return;

    navbar.classList.toggle("scrolled", window.scrollY > 50);
}

window.addEventListener("scroll", updateNavbar, { passive: true });
updateNavbar();


// SCROLL REVEAL ANIMATION
const sections = document.querySelectorAll("section");

if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    sections.forEach(function (section) {
        section.classList.add("hidden");
        sectionObserver.observe(section);
    });
} else {
    sections.forEach(function (section) {
        section.classList.add("show");
    });
}


// CLOSE MENU WHEN SWITCHING TO DESKTOP WIDTH
window.addEventListener("resize", function () {
    if (window.innerWidth > 900 && navLinks && menuButton) {
        navLinks.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
    }
});