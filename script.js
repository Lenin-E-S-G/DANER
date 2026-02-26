// MENU RESPONSIVE
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// CARRUSEL HERO AUTOMÁTICO
const images = document.querySelectorAll(".hero-carousel img");
let index = 0;

setInterval(() => {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
}, 3000);

// CARGAR SERVICIOS DESDE JSON
fetch("data.json")
.then(response => response.json())
.then(data => {
    const container = document.getElementById("services-container");

    data.servicios.forEach((servicio, i) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${servicio.titulo}</h3>
            <p>${servicio.descripcion}</p>
        `;

        container.appendChild(card);

        setTimeout(() => {
            card.classList.add("show");
        }, i * 300);
    });
})
.catch(error => console.error("Error:", error));

const publicaciones = [
    "Recuerda revisar tus facturas electrónicas antes del cierre de mes.",
    "La ética contable es la base de la confianza en tu empresa. ¡Mantén tus libros al día!",
    "¿Sabías que una correcta deducción de gastos puede ahorrarte hasta un 15% en impuestos?",
    "Mantener orden en tus anexos transaccionales evita multas innecesarias del SRI.",
    "El flujo de caja es el corazón de tu negocio. No olvides monitorearlo semanalmente.",
    "La digitalización contable no es el futuro, es el presente. ¡Úsala a tu favor!",
    "Planificar tus impuestos a tiempo es la mejor inversión para tu tranquilidad financiera."
];

function mostrarPublicacionDelDia() {
    const fecha = new Date();
    // Esta fórmula elige un índice basado en el día del mes
    const indice = fecha.getDate() % publicaciones.length;
    document.getElementById("texto-publicacion").innerText = publicaciones[indice];
}

// Ejecutar al cargar la página
window.onload = mostrarPublicacionDelDia;