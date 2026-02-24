const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const burger = document.getElementById("burger");
const nav = document.querySelector(".nav");

if (burger && nav) {
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("nav--open");
    burger.setAttribute("aria-expanded", String(open));
  });
}

// Demo form handling (no backend). Replace with Formspree / your endpoint.
function wireForm(formId, statusId){
  const form = document.getElementById(formId);
  const status = document.getElementById(statusId);
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (status) status.textContent = "Sent! (Demo mode) — connect Formspree or your backend to receive messages.";
    form.reset();
  });
}

wireForm("quickForm", "formStatus");
wireForm("contactForm", "contactStatus");
