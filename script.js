function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* PER-PROJECT IMAGE SLIDERS */
document.querySelectorAll("[data-slider]").forEach((slider) => {
  const slides = slider.querySelectorAll(".slide");
  const prev = slider.querySelector(".prev");
  const next = slider.querySelector(".next");
  let index = 0;

  function show(i) {
    slides.forEach((s, idx) => s.classList.toggle("active", idx === i));
  }

  prev.onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    show(index);
  };

  next.onclick = () => {
    index = (index + 1) % slides.length;
    show(index);
  };
});

/* PROJECT SECTION SLIDER (2 PROJECTS PER SLIDE) */
const projectSlides = document.querySelectorAll(".projects-slide");
const prevBtn = document.getElementById("projectsPrev");
const nextBtn = document.getElementById("projectsNext");
let projIndex = 0;

function showProjects(i) {
  projectSlides.forEach((s, idx) => s.classList.toggle("active", idx === i));
}

prevBtn.onclick = () => {
  projIndex = (projIndex - 1 + projectSlides.length) % projectSlides.length;
  showProjects(projIndex);
};

nextBtn.onclick = () => {
  projIndex = (projIndex + 1) % projectSlides.length;
  showProjects(projIndex);
};
