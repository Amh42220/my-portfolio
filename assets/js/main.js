console.log("main is load");
document.getElementById("themeToggle").addEventListener("click", () => {
  console.log("clicked");
});

const githubIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 2.5-.35c.85 0 1.71.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.56 1.41.21 2.46.1 2.72.65.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z"/></svg>`;
const demoIcon = `<svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const projects = [
  {
    name: "Queuely",
    color: "6e6bf4",
    tags: ["Go", "MIT"],
    desc: "A lightweight, Kafka-compatible message broker for teams who need pub/sub without running a full Kafka cluster.",
    demoUrl: "https://queuely.example.com",
    githubUrl: "https://github.com/alexrivera/queuely",
  },
  {
    name: "Shipwright",
    color: "9a7bf0",
    tags: ["Rust", "Apache-2.0"],
    desc: "A deploy-pipeline CLI that turns a YAML file into zero-downtime rolling deploys on Kubernetes, with automatic rollback.",
    demoUrl: "https://shipwright.example.com",
    githubUrl: "https://github.com/alexrivera/shipwright",
  },
  {
    name: "Ledgerline",
    color: "5fb8a8",
    tags: ["TypeScript", "Private"],
    desc: "An event-sourced ledger service for financial transactions with strict consistency guarantees, running in production at two fintech startups.",
    demoUrl: null,
    githubUrl: null,
  },
  {
    name: "Tracewell",
    color: "6e6bf4",
    tags: ["Rust", "MIT"],
    desc: "A minimal distributed tracing library focused on tiny binary overhead, built for edge deployments.",
    demoUrl: "https://tracewell.example.com",
    githubUrl: "https://github.com/alexrivera/tracewell",
  },
];

const projectGrid = document.getElementById("projectGrid");
projects.forEach((p) => {
  const col = document.createElement("div");
  col.className = "col-12 col-md-6 col-xl-4 reveal";
  col.innerHTML = `
          <div class="project-card">
            <div class="project-thumb">
              <img src="https://placehold.co/640x360/151822/${p.color}?text=${p.name}&font=inter" alt="Screenshot of ${p.name} project dashboard" />
            </div>
            <div class="p-4 d-flex flex-column h-100">
              <div class="d-flex align-items-center justify-content-between gap-2 mb-2">
                <span class="project-name">${p.name}</span>
                <div class="d-flex gap-1 flex-wrap">
                  ${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
                </div>
              </div>
              <div class="project-desc mb-2">${p.desc}</div>
              
              <div class="d-flex gap-2">
                <a
                  class="proj-btn proj-btn-demo flex-fill ${p.demoUrl ? "" : "disabled"}"
                  href="${p.demoUrl || "#"}"
                  target="_blank"
                  rel="noopener noreferrer"
                  ${p.demoUrl ? "" : 'tabindex="-1" aria-disabled="true"'}
                  style="${p.demoUrl ? "" : "pointer-events:none; opacity:0.5;"}"
                >
                  ${demoIcon} Live demo
                </a>

                <a
                  class="proj-btn proj-btn-github flex-fill ${p.githubUrl ? "" : "disabled"}"
                  href="${p.githubUrl || "#"}"
                  target="_blank"
                  rel="noopener noreferrer"
                  ${p.githubUrl ? "" : 'tabindex="-1" aria-disabled="true"'}
                  style="${p.githubUrl ? "" : "pointer-events:none; opacity:0.5;"}"
                >
                  ${githubIcon} View GitHub
                </a>
              </div>
            </div>
          </div>`;
  projectGrid.appendChild(col);
});

const skills = [
  // Programming Languages

  { cat: "Language", name: "Python", percent: 80 },
  { cat: "Language", name: "JavaScript", percent: 85 },
  { cat: "Language", name: "PHP", percent: 70 },

  // Frontend
  { cat: "Frontend", name: "HTML/CSS", percent: 85 },
  { cat: "Frontend", name: "Vue.js", percent: 85 },
  { cat: "Frontend", name: "Bootstrap", percent: 85 },

  // Backend
  { cat: "Backend", name: "Node.js/Express", percent: 85 },

  // Database
  { cat: "Database", name: "MySQL", percent: 85 },

  { cat: "Infra", name: "Vercel", percent: 85 },
  { cat: "Infra", name: "Netlify", percent: 85 },

  // Tools / Workflow
  { cat: "Tools", name: "Figma", percent: 80 },
  { cat: "Tools", name: "Trello", percent: 85 },
  { cat: "Tools", name: "Git/GitHub", percent: 80 },

  { cat: "OS", name: "Linux", percent: 70 },

  // { cat: "Tools", name: "CI/CD", percent: 90 },

  // Engineering Practice
  // { cat: "Practice", name: "System Design", percent: 85 },
  // { cat: "Practice", name: "Observability", percent: 80 },
];
const skillGrid = document.getElementById("skillGrid");

skills.forEach((s) => {
  const col = document.createElement("div");
  col.className = "col-6 col-md-4 col-lg-3 reveal";

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (s.percent / 100) * circumference;

  col.innerHTML = `
          <div class="skill-card circle">

            <div class="skill-circle" role="img" aria-label="Skill progress ${s.name} ${s.percent}%">
              <svg aria-label="Skill progress ${s.name}">
                <circle class="circle-bg" cx="45" cy="45" r="${radius}" />
                <circle class="circle-progress" cx="45" cy="45" r="${radius}" />
              </svg>

              <div class="skill-percent">${s.percent}%</div>
            </div>

            <div class="skill-name">${s.name}</div>
            <div class="skill-cat">${s.cat}</div>
          </div>
        `;

  skillGrid.appendChild(col);
  // animate ring
  const circle = col.querySelector(".circle-progress");
  circle.style.strokeDasharray = `${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;

  requestAnimationFrame(() => {
    setTimeout(() => {
      circle.style.strokeDashoffset = offset;
    }, 100);
  });
});

// Theme toggle: respects saved preference, falls back to system setting
(function () {
  const root = document.documentElement;
  const stored = localStorage.getItem("theme");
  const prefersLight = window.matchMedia(
    "(prefers-color-scheme: light)",
  ).matches;
  if (stored) {
    root.setAttribute("data-theme", stored);
  } else if (prefersLight) {
    root.setAttribute("data-theme", "light");
  }
  document.getElementById("themeToggle").addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "dark";
    const next = current === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const btn = this.querySelector(".form-submit");
  const original = btn.textContent;
  btn.textContent = "Message sent ✓";
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = original;
    btn.disabled = false;
    this.reset();
  }, 2400);
});

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

//ainmate counter
function animateCounter(el, target, duration = 1200) {
  let start = 0;
  const increment = target / (duration / 16);

  function update() {
    start += increment;

    if (start >= target) {
      el.textContent = target + "+";
      return;
    }

    el.textContent = Math.floor(start);
    requestAnimationFrame(update);
  }

  update();
}

const stats = document.querySelectorAll(".stat-num");

const statsObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-count"));

        animateCounter(el, target);
        observer.unobserve(el);
      }
    });
  },
  { threshold: 0.6 },
);

stats.forEach((el) => statsObserver.observe(el));
