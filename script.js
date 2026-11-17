// 1. Filtro de proyectos por categoría
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Quitar la clase active de todos los botones y ponérsela al clickeado
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    cards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category");

      if (filterValue === "all" || filterValue === cardCategory) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// 2. Botón de Modo Oscuro / Modo Claro
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }
});
