const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo() {
    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML= ulListaAmigos.innerHTML + `<li>${inputAmigo.value}</li>`;
}

function sortearAmigo() {
const random = Math.floor(Math.random() * listaAmigos.length);
const amigoSecreto = listaAmigos[random];
ulResultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSecreto}</li>`;
 // Lanza confetti
    confetti({
        particleCount: 1500,
        spread: 100,
        origin: { y: 0.6 }
    });

}


function reiniciar() {
    listaAmigos.length = 0;
    ulListaAmigos.innerHTML = "";
    ulResultado.innerHTML = "";
    inputAmigo.value = "";
}

function agregarAmigo() {
    // 1. Obtiene el nombre y elimina los espacios en blanco innecesarios.
    const nombre = inputAmigo.value.trim();

    // 2. Verifica que el nombre no esté vacío.
    if (nombre) {
        // 3. Agrega el nombre al arreglo de amigos.
        listaAmigos.push(nombre);
        
        // 4. Agrega el nombre a la lista visible en el HTML, con el botón de eliminar.
        ulListaAmigos.innerHTML = ulListaAmigos.innerHTML + `<li id="${nombre}">${nombre} <button onclick="eliminarAmigo('${nombre}')" class="button-delete">X</button></li>`;

        // 5. Borra automáticamente el contenido del campo de texto. ✅
        inputAmigo.value = "";
    } else {
        // 6. Muestra una alerta si el usuario intenta agregar un nombre vacío.
        alert("Por favor, introduce un nombre válido.");
    }

    
    
}

function eliminarAmigo(nombre) {
    // Elimina el nombre del arreglo
    const index = listaAmigos.indexOf(nombre);
    if (index > -1) {
        listaAmigos.splice(index, 1);
    }
    // Elimina el elemento del DOM
    const li = document.getElementById(nombre);
    if (li) {
        li.remove();
    }
}

inputAmigo.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});
