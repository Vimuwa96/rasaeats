document.addEventListener("DOMContentLoaded", function () {

const navbar = document.getElementById("mainNavbar");
const menuToggle = document.getElementById("menuToggle");
const navbarContent = document.getElementById("navbarContent");

// Bootstrap Collapse
const bsCollapse = new bootstrap.Collapse(navbarContent, {
toggle: false
});

// Sticky Navbar
function handleNavbarScroll() {

if (window.scrollY > 50) {
navbar.classList.add("scrolled");
} else {
navbar.classList.remove("scrolled");
}

}

window.addEventListener("scroll", handleNavbarScroll, {
passive: true
});

handleNavbarScroll();


// Mobile Menu Toggle
menuToggle.addEventListener("click", function () {

if (navbarContent.classList.contains("show")) {
bsCollapse.hide();
} else {
bsCollapse.show();
}

});

navbarContent.addEventListener("show.bs.collapse", function () {
menuToggle.classList.add("active");
menuToggle.setAttribute("aria-expanded", "true");
});

navbarContent.addEventListener("hide.bs.collapse", function () {
menuToggle.classList.remove("active");
menuToggle.setAttribute("aria-expanded", "false");
});


// Close menu after clicking a navigation link
document.querySelectorAll(".rasa-navbar .nav-link, .nav-booking-btn")
.forEach(function (link) {

link.addEventListener("click", function () {

if (navbarContent.classList.contains("show")) {
bsCollapse.hide();
}

});

});


// GSAP Navbar Entrance
gsap.from(".rasa-brand", {
opacity: 0,
x: -30,
duration: 0.8,
ease: "power3.out"
});

gsap.from(".rasa-navbar .nav-item", {
opacity: 0,
y: -15,
duration: 0.6,
stagger: 0.08,
delay: 0.2,
ease: "power3.out"
});

gsap.from(".navbar-action", {
opacity: 0,
x: 20,
duration: 0.7,
delay: 0.4,
ease: "power3.out"
});

});




document.addEventListener("DOMContentLoaded", function () {

const form = document.getElementById("eventBookingForm");

if (!form) return;

// Replace with your actual WhatsApp number.
const whatsappNumber = "94771234567";

// Prevent bookings for dates in the past.
const dateInput = document.getElementById("eventDate");

if (dateInput) {
const today = new Date();
const localToday = [
today.getFullYear(),
String(today.getMonth() + 1).padStart(2, "0"),
String(today.getDate()).padStart(2, "0")
].join("-");

dateInput.min = localToday;
}

form.addEventListener("submit", function (e) {

e.preventDefault();

if (!form.reportValidity()) return;

const data = new FormData(form);

const message = `
*NEW RASA EATS EVENT ENQUIRY*

*Name:* ${data.get("name")}
*Phone:* ${data.get("phone")}
*Email:* ${data.get("email") || "Not provided"}

*Event Type:* ${data.get("event_type")}
*Event Date:* ${data.get("event_date")}
*Expected Guests:* ${data.get("guests") || "Not specified"}
*Location:* ${data.get("location")}

*Additional Details:*
${data.get("message") || "No additional details"}
`;

const whatsappURL =
"https://wa.me/" + whatsappNumber +
"?text=" + encodeURIComponent(message);

window.open(whatsappURL, "_blank", "noopener,noreferrer");

});

});
