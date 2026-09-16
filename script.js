/* =========================================
   WEBCRAFT
   COMPLETE STEP 8 + STEP 9 JAVASCRIPT
========================================= */


/* =========================================
   PROMO BAR
========================================= */

const promoClose =
    document.querySelector(".promo-close");

if (promoClose) {

    promoClose.addEventListener("click", () => {

        const promoBar =
            document.querySelector(".promo-bar");

        if (promoBar) {
            promoBar.remove();
        }

    });

}


/* =========================================
   HERO PARALLAX
========================================= */

const hero =
    document.querySelector("#hero");

const figure =
    document.querySelector("#figure");

if (hero && figure) {

    hero.addEventListener("mousemove", (event) => {

        const rect =
            hero.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;


        const moveX =
            (x / rect.width - 0.5) * 20;

        const moveY =
            (y / rect.height - 0.5) * 20;


        figure.style.transform =
            `translate(${moveX}px, ${moveY}px)`;

    });


    hero.addEventListener("mouseleave", () => {

        figure.style.transform =
            "translate(0, 0)";

    });

}


/* =========================================
   SHOWCASE CARD INTERACTION
========================================= */

const showcaseCards =
    document.querySelectorAll(".showcase-card");

showcaseCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;


        const rotateX =
            ((y / rect.height) - 0.5) * -5;

        const rotateY =
            ((x / rect.width) - 0.5) * 5;


        card.style.transform =
            `
            perspective(700px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-4px)
            `;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =========================================
   DOMAIN SEARCH
========================================= */

const domainForm =
    document.querySelector("#domainForm");

if (domainForm) {

    domainForm.addEventListener("submit", (event) => {

        event.preventDefault();


        const input =
            document.querySelector("#domainInput");


        if (!input) {
            return;
        }


        const domain =
            input.value.trim();


        if (domain === "") {

            alert(
                "Please enter a domain name."
            );

            input.focus();

            return;
        }


        alert(
            `Thanks! We will check availability for ${domain}.`
        );

    });

}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".feature-card, .testimonial, .stat"
    );


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    entry.target.classList.add(
                        "visible"
                    );


                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach((element) => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach((element) => {

        element.classList.add("visible");

    });

}


/* =========================================
   NUMBER COUNTERS
========================================= */

const counters =
    document.querySelectorAll(
        "[data-target]"
    );


if ("IntersectionObserver" in window) {

    const counterObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    const counter =
                        entry.target;


                    const target =
                        Number(
                            counter.dataset.target
                        );


                    let current = 0;


                    const increment =
                        Math.max(
                            1,
                            Math.ceil(target / 50)
                        );


                    const updateCounter = () => {

                        current += increment;


                        if (current >= target) {

                            counter.textContent =
                                target;

                            return;

                        }


                        counter.textContent =
                            current;


                        requestAnimationFrame(
                            updateCounter
                        );

                    };


                    updateCounter();


                    observer.unobserve(
                        counter
                    );

                });

            },
            {
                threshold: 0.6
            }
        );


    counters.forEach((counter) => {

        counterObserver.observe(counter);

    });

}


/* =========================================
   AI EXPERIENCE
========================================= */

const aiSteps =
    document.querySelectorAll(".ai-step");

const aiPanels =
    document.querySelectorAll(".ai-panel");


function activateAIStep(stepName) {

    aiSteps.forEach((step) => {

        step.classList.toggle(
            "active",
            step.dataset.step === stepName
        );

    });


    aiPanels.forEach((panel) => {

        panel.classList.toggle(
            "active",
            panel.dataset.panel === stepName
        );

    });

}


aiSteps.forEach((step) => {

    step.addEventListener("click", () => {

        activateAIStep(
            step.dataset.step
        );

        currentAIIndex =
            aiStepNames.indexOf(
                step.dataset.step
            );

    });

});


/* =========================================
   AI AUTO ROTATION
========================================= */

const aiStepNames = [
    "intro",
    "products",
    "appointments"
];


let currentAIIndex = 0;


if (aiSteps.length > 0) {

    setInterval(() => {

        currentAIIndex =
            (currentAIIndex + 1) %
            aiStepNames.length;


        activateAIStep(
            aiStepNames[currentAIIndex]
        );

    }, 5000);

}


/* =========================================
   TESTIMONIAL TILT
========================================= */

const testimonials =
    document.querySelectorAll(
        ".testimonial"
    );


testimonials.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect =
            card.getBoundingClientRect();


        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;


        const rotateX =
            ((y / rect.height) - 0.5) * -3;

        const rotateY =
            ((x / rect.width) - 0.5) * 3;


        card.style.transform =
            `
            perspective(800px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-7px)
            `;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});