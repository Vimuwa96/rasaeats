
document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") {
        console.error("GSAP is not loaded!");
        return;
    }

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }

    const section = document.querySelector("#gallery");

    if (!section) return;

    const heading = section.querySelector(".gallery-heading");
    const items = section.querySelectorAll(".gallery-item");
    const bottom = section.querySelector(".gallery-bottom");

    const settings = typeof ScrollTrigger !== "undefined"
        ? {
            trigger: section,
            start: "top 80%",
            once: true
        }
        : undefined;

    if (heading) {
        gsap.from(heading, {
            y: 45,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: settings
        });
    }

    if (items.length) {
        gsap.from(items, {
            y: 45,
            opacity: 0,
            scale: 0.96,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: settings
        });
    }

    if (bottom) {
        gsap.from(bottom, {
            y: 25,
            opacity: 0,
            duration: 0.8,
            scrollTrigger: settings
        });
    }

    console.log("Rasa Eats Gallery Initialized!");

});
