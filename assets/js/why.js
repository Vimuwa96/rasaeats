
document.addEventListener("DOMContentLoaded", () => {

    // Check GSAP availability
    if (typeof gsap === "undefined") {
        console.error("GSAP library is missing!");
        return;
    }

    // Register ScrollTrigger if available
    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }

    const section = document.querySelector("#why-us");

    if (!section) return;

    const image = section.querySelector(".why-main-image");
    const badge = section.querySelector(".why-image-badge");
    const caption = section.querySelector(".why-image-caption");
    const content = section.querySelector(".why-content");
    const label = section.querySelector(".why-label");
    const title = section.querySelector(".why-title");
    const description = section.querySelector(".why-description");
    const features = section.querySelectorAll(".why-feature");
    const button = section.querySelector(".why-button");

    // Use ScrollTrigger when available, otherwise animate immediately
    const scrollSettings = typeof ScrollTrigger !== "undefined"
        ? {
            trigger: section,
            start: "top 80%",
            once: true
        }
        : undefined;

    // IMAGE ANIMATION
    if (image) {
        gsap.from(image, {
            x: -70,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: scrollSettings
        });
    }

    // IMAGE BADGE
    if (badge) {
        gsap.from(badge, {
            scale: 0,
            rotation: -25,
            opacity: 0,
            duration: 0.8,
            delay: 0.3,
            ease: "back.out(1.7)",
            scrollTrigger: scrollSettings
        });
    }

    // IMAGE CAPTION
    if (caption) {
        gsap.from(caption, {
            y: 25,
            opacity: 0,
            duration: 0.8,
            delay: 0.5,
            ease: "power2.out",
            scrollTrigger: scrollSettings
        });
    }

    // CONTENT ANIMATION
    const contentElements = [
        label,
        title,
        description
    ].filter(Boolean);

    if (contentElements.length) {
        gsap.from(contentElements, {
            y: 35,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: scrollSettings
        });
    }

    // FEATURES ANIMATION
    if (features.length) {
        gsap.from(features, {
            x: 40,
            opacity: 0,
            duration: 0.7,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: scrollSettings
        });
    }

    // BUTTON ANIMATION
    if (button) {
        gsap.from(button, {
            y: 20,
            opacity: 0,
            duration: 0.7,
            delay: 0.4,
            ease: "power2.out",
            scrollTrigger: scrollSettings
        });
    }

    // FEATURE HOVER EFFECT
    features.forEach(feature => {

        const icon = feature.querySelector(".why-icon");

        if (!icon) return;

        feature.addEventListener("mouseenter", () => {
            gsap.to(icon, {
                rotation: -8,
                scale: 1.08,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        feature.addEventListener("mouseleave", () => {
            gsap.to(icon, {
                rotation: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });

    });

    console.log("Rasa Eats Why Section Initialized!");

});
