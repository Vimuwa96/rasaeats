
document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") {
        console.error("GSAP is not loaded!");
        return;
    }

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }

    const section = document.querySelector("#events");

    if (!section) return;

    const heading = section.querySelector(".events-heading");
    const cards = section.querySelectorAll(".event-card");
    const bottom = section.querySelector(".events-bottom");

    const scrollTriggerSettings =
        typeof ScrollTrigger !== "undefined"
            ? {
                trigger: section,
                start: "top 80%",
                once: true
            }
            : undefined;

    if (heading) {
        gsap.from(heading, {
            opacity: 0,
            y: 40,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: scrollTriggerSettings
        });
    }

    if (cards.length) {
        gsap.from(cards, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: scrollTriggerSettings
        });
    }

    if (bottom) {
        gsap.from(bottom, {
            opacity: 0,
            y: 35,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: scrollTriggerSettings
        });
    }

});
