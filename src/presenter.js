import { 
  saludador, 
  saludadorConNombre, 
  saludadorConHora, 
  saludadorSegunElGenero, 
  saludadorSegunEdadYGenero 
} from "./saludador";

const nombreInput = document.querySelector("#nombre");
const idiomaSelect = document.querySelector("#idioma");
const horaInput = document.querySelector("#hora");
const generoSelect = document.querySelector("#genero");
const edadInput = document.querySelector("#edad");
const form = document.querySelector("#saludar-form");
const divSaludo = document.querySelector("#saludo");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreInput.value;
  const idioma = idiomaSelect.value;
  const hora = horaInput.value ? Number(horaInput.value) : new Date().getHours();
  const genero = generoSelect.value;
  const edad = Number(edadInput.value);

  let saludo = "";

  // Combinando las funciones según los campos llenados
  if (nombre) {
    saludo = saludadorConNombre(nombre, idioma);
  }

  if (hora !== undefined) {
    saludo = saludadorConHora(hora, idioma);
  }

  if (genero) {
    saludo = saludadorSegunElGenero(nombre, genero, idioma);
  }

  if (edad) {
    saludo = saludadorSegunEdadYGenero(nombre, edad, genero, idioma);
  }

  divSaludo.innerHTML = `<p>${saludo}</p>`;
});
