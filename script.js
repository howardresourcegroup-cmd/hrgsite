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

// Lightweight UX: show a "Sending..." status, but DO NOT prevent submission.
function setSending(formId, statusId) {
  const form = document.getElementById(formId);
  const status = document.getElementById(statusId);
  if (!form || !status) return;

  form.addEventListener("submit", () => {
    status.textContent = "Sending…";
  });
}

setSending("quickForm", "formStatus");
setSending("contactForm", "contactStatus");
