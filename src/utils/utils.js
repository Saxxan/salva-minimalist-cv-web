const body = document.body;
const switchTheme = document.getElementById("switch-theme");

/**
 * Función para cambiar el tema de la web
 */
export function setTheme() {
  if (!body.classList.contains("dark")) {
    switchTheme.checked = true;
    body.classList.add("dark");
  } else {
    switchTheme.checked = false;
    body.classList.remove("dark");
  }
}
