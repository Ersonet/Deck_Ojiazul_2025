// script.js

document.addEventListener("DOMContentLoaded", function () {
  const filtro = document.getElementById("filtroTipo");
  const cartas = document.querySelectorAll(".carta");

  filtro.addEventListener("change", function () {
    const tipoSeleccionado = filtro.value;

    cartas.forEach((carta) => {
      const tipoCarta = carta.getAttribute("data-tipo");

      if (tipoSeleccionado === "todos" || tipoCarta === tipoSeleccionado) {
        carta.style.display = "block";
      } else {
        carta.style.display = "none";
      }
    });
  });
});

// filtro para galería de cartas

document.addEventListener("DOMContentLoaded", () => {
  const filtro = document.getElementById("filtroTipo");
  const cartas = document.querySelectorAll(".carta");

  filtro.addEventListener("change", () => {
    const tipo = filtro.value;

    cartas.forEach(carta => {
      if (tipo === "todos" || carta.dataset.tipo === tipo) {
        carta.style.display = "block";
      } else {
        carta.style.display = "none";
      }
    });
  });
});
