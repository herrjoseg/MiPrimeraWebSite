const ptitleAboutMe = document.getElementById("p-title-about-me")
const pdatosAboutMe = document.getElementById("p-about-me")

let nombre = "Jose G. Herrera";
let ocupacion ="Estudiante de Full Stack en Egg Cooperation";
let correo = "mi_correo@gmail.com";
let telefono = "300-000-0000";
let ubicacion = "Barranquilla - Colombia";

ptitleAboutMe.innerHTML = nombre;
pdatosAboutMe.innerHTML = `
${ocupacion}<br>
${correo}<br>
${telefono}<br>
${ubicacion}
`;

function showAlert() {
    alert('Gracias por suscribirse');
}

document.querySelector("button.button-menu-toggle")
.addEventListener("click", function() {
document.querySelector(".nav-links").
classList.toggle("nav-links-responsive")})