// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
const amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; 
    }
    amigos.push(nombre);

    inputAmigo.value = "";
}

