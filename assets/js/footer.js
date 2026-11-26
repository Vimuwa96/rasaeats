
document.addEventListener("DOMContentLoaded", function () {

    // Automatically update copyright year
    const yearElement = document.getElementById("footerYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});
