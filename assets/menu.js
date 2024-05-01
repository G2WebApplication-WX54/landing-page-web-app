function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav() {
    document.getElementById("mobile-menu").style.width = "0%";
}

const about = document.querySelector("#about");
const app = document.querySelector("#app");
const services = document.querySelector("#services");
const planes = document.querySelector("#plans");
const contact = document.querySelector("#contact");

about.addEventListener("click", (n) => {
    n.preventDefault();
    const selectionN = document.querySelector("#about-section");
    selectionN.scrollIntoView({ behavior: "smooth" });
});
app.addEventListener("click", (cr) => {
    cr.preventDefault();
    const selectionCr = document.querySelector("#app-section");
    selectionCr.scrollIntoView({ behavior: "smooth" });
});
services.addEventListener("click", (s) => {
    s.preventDefault();
    const selectionS = document.querySelector("#services-section");
    selectionS.scrollIntoView({ behavior: "smooth" });
});
plans.addEventListener("click", (p) => {
    p.preventDefault();
    const selectionP = document.querySelector("#plans-section");
    selectionP.scrollIntoView({ behavior: "smooth" });
});

contact.addEventListener("click", (c) => {
    c.preventDefault();
    const selectionC = document.querySelector("#contact-section");
    selectionC.scrollIntoView({ behavior: "smooth" });
});

const about2 = document.querySelector("#about2");
const services2 = document.querySelector("#services2");
const plans2 = document.querySelector("#plans2");
const app2 = document.querySelector("#app2");
const contact2 = document.querySelector("#contact2");

about2.addEventListener("click", (n) => {
    n.preventDefault();
    const selectionN = document.querySelector("#about-section");
    selectionN.scrollIntoView({ behavior: "smooth" });
    closeNav();
});
app2.addEventListener("click", (cr) => {
    cr.preventDefault();
    const selectionCr = document.querySelector("#app-section");
    selectionCr.scrollIntoView({ behavior: "smooth" });
    closeNav();
});
services2.addEventListener("click", (s) => {
    s.preventDefault();
    const selectionS = document.querySelector("#services-section");
    selectionS.scrollIntoView({ behavior: "smooth" });
    closeNav();
});
plans2.addEventListener("click", (p) => {
    p.preventDefault();
    const selectionP = document.querySelector("#plans-section");
    selectionP.scrollIntoView({ behavior: "smooth" });
    closeNav();
});
contact2.addEventListener("click", (c) => {
    c.preventDefault();
    const selectionC = document.querySelector("#contact-section");
    selectionC.scrollIntoView({ behavior: "smooth" });
    closeNav();
});