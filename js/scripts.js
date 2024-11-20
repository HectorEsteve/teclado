// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar todos los botones y el input
    const buttons = document.querySelectorAll(".button-custom");
    const input = document.getElementById("output");

    // Iterar sobre los botones para agregar funcionalidad
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const char = this.textContent.trim(); // Obtiene el texto del botón presionado

            // Acciones según el botón presionado
            if (char === "_") {
                input.value += " "; // Agregar un espacio
            } else if (char === "d") {
                input.value = input.value.slice(0, -1); // Borrar el último carácter
            } else if (char === "x") {
                input.value = ""; // Borrar todo el texto
            } else {
                input.value += char; // Agregar el carácter al final
            }
        });
    });
});