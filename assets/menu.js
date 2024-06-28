function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav() {
    document.getElementById("mobile-menu").style.width = "0%";
}

const aboutUs = document.querySelector("#about-us");
const app = document.querySelector("#app");
const services = document.querySelector("#services");
const plans = document.querySelector("#plans");
const aboutProduct = document.querySelector("#about-product");
const aboutTeam = document.querySelector("#about-team");
const contact = document.querySelector("#contact");

aboutUs.addEventListener("click", (e) => {
    e.preventDefault();
    const aboutSection = document.querySelector("#about-us-section");
    aboutSection.scrollIntoView({ behavior: "smooth" });
});
app.addEventListener("click", (e) => {
    e.preventDefault();
    const appSection = document.querySelector("#app-section");
    appSection.scrollIntoView({ behavior: "smooth" });
});
services.addEventListener("click", (e) => {
    e.preventDefault();
    const servicesSection = document.querySelector("#services-section");
    servicesSection.scrollIntoView({ behavior: "smooth" });
});
plans.addEventListener("click", (e) => {
    e.preventDefault();
    const plansSection = document.querySelector("#plans-section");
    plansSection.scrollIntoView({ behavior: "smooth" });
});
aboutProduct.addEventListener("click", (e) => {
    e.preventDefault();
    const aboutProductSection = document.querySelector("#about-product-section");
    aboutProductSection.scrollIntoView({ behavior: "smooth" });
});
aboutTeam.addEventListener("click", (e) => {
    e.preventDefault();
    const aboutTeamSection = document.querySelector("#about-team-section");
    aboutTeamSection.scrollIntoView({ behavior: "smooth" });
});
contact.addEventListener("click", (e) => {
    e.preventDefault();
    const contactSection = document.querySelector("#contact-section");
    contactSection.scrollIntoView({ behavior: "smooth" });
});

const aboutUs2 = document.querySelector("#about-us2");
const services2 = document.querySelector("#services2");
const plans2 = document.querySelector("#plans2");
const aboutProduct2 = document.querySelector("#about-product2");
const aboutTeam2 = document.querySelector("#about-team2");
const contact2 = document.querySelector("#contact2");

aboutUs2.addEventListener("click", (e) => {
    e.preventDefault();
    const aboutSection = document.querySelector("#about-us-section");
    aboutSection.scrollIntoView({ behavior: "smooth" });
    closeNav();
});
services2.addEventListener("click", (e) => {
    e.preventDefault();
    const servicesSection = document.querySelector("#services-section");
    servicesSection.scrollIntoView({ behavior: "smooth" });
    closeNav();
});
plans2.addEventListener("click", (e) => {
    e.preventDefault();
    const plansSection = document.querySelector("#plans-section");
    plansSection.scrollIntoView({ behavior: "smooth" });
    closeNav();
});
aboutProduct2.addEventListener("click", (e) => {
    e.preventDefault();
    const aboutProductSection = document.querySelector("#about-product-section");
    aboutProductSection.scrollIntoView({ behavior: "smooth" });
    closeNav();
});
aboutTeam2.addEventListener("click", (e) => {
    e.preventDefault();
    const aboutTeamSection = document.querySelector("#about-team-section");
    aboutTeamSection.scrollIntoView({ behavior: "smooth" });
    closeNav();
});
contact2.addEventListener("click", (e) => {
    e.preventDefault();
    const contactSection = document.querySelector("#contact-section");
    contactSection.scrollIntoView({ behavior: "smooth" });
    closeNav();
});