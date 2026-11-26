
document.addEventListener("DOMContentLoaded", function () {

    // Check GSAP availability
    if (typeof gsap === "undefined") {
        console.error("GSAP is not loaded!");
        return;
    }

    // Register ScrollTrigger
    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    } else {
        console.error("ScrollTrigger is not loaded!");
        return;
    }

    // Prevent initial animation conflicts
    gsap.set([
        ".about-label",
        ".about-title",
        ".about-description",
        ".about-image-main",
        ".about-experience-card",
        ".about-feature",
        ".about-button"
    ], {
        clearProps: "all"
    });


    // ABOUT CONTENT ANIMATION
    const aboutContent = gsap.timeline({
        scrollTrigger: {
            trigger: ".about-content",
            start: "top 80%",
            once: true
        }
    });

    aboutContent
        .from(".about-label", {
            opacity: 0,
            y: 25,
            duration: 0.6,
            ease: "power3.out"
        })

        .from(".about-title", {
            opacity: 0,
            y: 45,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.3")

        .from(".about-description", {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out"
        }, "-=0.4");


    // IMAGE ANIMATION
    gsap.from(".about-image-main", {
        opacity: 0,
        x: -60,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".about-visual",
            start: "top 80%",
            once: true
        }
    });


    // EXPERIENCE CARD ANIMATION
    gsap.from(".about-experience-card", {
        opacity: 0,
        scale: 0.5,
        rotation: -25,
        duration: 0.9,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: ".about-visual",
            start: "top 80%",
            once: true
        }
    });


    // FEATURES ANIMATION
    gsap.from(".about-feature", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".about-features",
            start: "top 85%",
            once: true
        }
    });


    // BUTTON ANIMATION
    gsap.from(".about-button", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".about-button",
            start: "top 90%",
            once: true
        }
    });


    // REFRESH SCROLL POSITIONS
    window.addEventListener("load", function () {
        ScrollTrigger.refresh();
    });

});
