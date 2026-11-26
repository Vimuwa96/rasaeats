
document.addEventListener("DOMContentLoaded", function () {

    const filters = document.querySelectorAll(".menu-filter");
    const items = document.querySelectorAll(".menu-item");

    filters.forEach(button => {

        button.addEventListener("click", function () {

            const category = this.dataset.filter;

            // Update active button
            filters.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            // Stop previous animations
            gsap.killTweensOf(items);

            // Find matching items
            const visibleItems = [];

            items.forEach(item => {

                const match =
                    category === "all" ||
                    item.dataset.category === category;

                if (match) {
                    item.style.display = "";
                    visibleItems.push(item);
                } else {
                    item.style.display = "none";
                }

            });

            // Animate visible cards
            gsap.fromTo(
                visibleItems,
                {
                    opacity: 0,
                    y: 20
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.45,
                    stagger: 0.07,
                    ease: "power2.out",
                    clearProps: "transform"
                }
            );

        });

    });

});
