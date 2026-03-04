// Set current year in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile menu toggle
const burger = document.getElementById("burger");
const nav = document.querySelector(".nav");

if (burger && nav) {
  burger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("nav--open");
    burger.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when a link is clicked
  const navLinks = nav.querySelectorAll("a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav--open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

// Form handling with better UX feedback
function setupFormFeedback(formId, statusId) {
  const form = document.getElementById(formId);
  const status = document.getElementById(statusId);
  if (!form || !status) return;

  form.addEventListener("submit", (e) => {
    status.textContent = "Sending…";
    status.style.color = "var(--muted)";
  });
}

setupFormFeedback("quickForm", "formStatus");
setupFormFeedback("contactForm", "contactStatus");
setupFormFeedback("surveyForm", "surveyStatus");

// Highlight active page in navigation
(function(){
  const links = document.querySelectorAll('.nav a');
  const path = window.location.pathname.split('/').pop();
  links.forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (href === 'index.html' && path === '')) {
      a.classList.add('active');
    }
  });
})();

// Smooth scroll for anchor links (progressive enhancement)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && href !== "#top") {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
});

// Tabs logic for products section
const tabButtons = document.querySelectorAll('.tab-btn');
if (tabButtons.length) {
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const active = document.querySelector('.tab-btn.active');
      if (active) active.classList.remove('active');
      btn.classList.add('active');

      const current = document.querySelector('.tab-content:not(.hidden)');
      if (current) current.classList.add('hidden');

      const targetId = btn.dataset.target;
      const panel = document.getElementById(targetId);
      if (panel) panel.classList.remove('hidden');
    });
  });
}

// survey workflow
(function(){
  const start = document.getElementById('startSurvey');
  const container = document.getElementById('surveyContainer');
  if(!start || !container) return;

  const steps = Array.from(container.querySelectorAll('.survey-step'));
  const totalSteps = steps.length;
  let index = 0;

  const updateProgress = i => {
    const percent = ((i + 1) / totalSteps) * 100;
    document.getElementById('progressFill').style.width = percent + '%';
    document.getElementById('progressText').textContent = `Step ${i + 1} of ${totalSteps}`;
  };

  const showStep = i => {
    steps.forEach((s, idx) => s.classList.toggle('hidden', idx !== i));
    document.getElementById('surveyBack').style.display = i > 0 ? 'inline-flex' : 'none';
    document.getElementById('surveyNext').style.display = i < steps.length - 1 ? 'inline-flex' : 'none';
    updateProgress(i);
  };

  start.addEventListener('click', () => {
    container.classList.remove('hidden');
    container.scrollIntoView({behavior:'smooth', block:'start'});
    showStep(0);
  });

  document.getElementById('surveyNext').addEventListener('click', () => {
    if(index < steps.length - 1){ index++; showStep(index); }
  });
  
  document.getElementById('surveyBack').addEventListener('click', () => {
    if(index > 0){ index--; showStep(index); }
  });
})();

