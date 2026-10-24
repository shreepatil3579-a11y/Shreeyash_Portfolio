
/* =========================================================
   MOBILE NAVIGATION MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


// Open / Close mobile menu

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});



/* =========================================================
   CLOSE MOBILE MENU AFTER CLICKING A LINK
========================================================= */

const navigationItems =
    document.querySelectorAll(".nav-links a");


navigationItems.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});



/* =========================================================
   ACTIVE NAVIGATION LINK
========================================================= */

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

    const scrollPosition =
        window.scrollY + 150;


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        const sectionId =
            section.getAttribute("id");


        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navigationItems.forEach((link) => {

                link.classList.remove("active");

            });


            const activeLink =
                document.querySelector(
                    `.nav-links a[href="#${sectionId}"]`
                );


            if (activeLink) {

                activeLink.classList.add("active");

            }

        }

    });

});



/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".section-heading, .about-text, .stat-card, .skill-card, .project-card, .timeline-item, .education-card, .certificate-card, .contact-info, .contact-form"
    );


revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform = "translateY(25px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

});



const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});



/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    // Basic validation

    if (!name || !email || !message) {

        alert("Please fill in all fields.");

        return;

    }


    // Email validation

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return;

    }


    /*
       This portfolio currently uses a frontend-only
       contact form.

       No backend/email service is connected yet.
    */

    alert(
        `Thank you, ${name}! Your message has been received.`
    );


    contactForm.reset();

});



/* =========================================================
   CURRENT YEAR
========================================================= */

const footerText =
    document.querySelector(".footer p");


if (footerText) {

    const currentYear =
        new Date().getFullYear();


    footerText.innerHTML =
        `© ${currentYear} Shreeyash S. Patil. All Rights Reserved.`;

}



/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop =
    document.querySelector('.footer a[href="#home"]');


if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}



/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "Portfolio loaded successfully — Shreeyash S. Patil"
);
