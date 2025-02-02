// Declaramos el array que almacenará los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // 1. Obtener el valor del campo de texto
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // 2. Validar que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return; // Salir de la función si el campo está vacío
    }

    // 3. Agregar el nombre al array
    amigos.push(nombre);

    // 4. Limpiar el campo de texto
    input.value = '';

    // 5. Actualizar la lista visual en la página
    actualizarListaAmigos();
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    // 1. Obtener el elemento de la lista
    const listaAmigos = document.getElementById('listaAmigos');

    // 2. Limpiar la lista existente
    listaAmigos.innerHTML = "";

    // 3. Iterar sobre el arreglo amigos
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento <li>
        const li = document.createElement('li');
        // Asignar el nombre del amigo como contenido del <li>
        li.textContent = amigos[i];
        // 4. Agregar el elemento <li> a la lista
        listaAmigos.appendChild(li);
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // 1. Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return; // Salir de la función si no hay amigos
    }

    // 2. Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3. Obtener el nombre sorteado
    const amigoSecreto = amigos[indiceAleatorio];

    // 4. Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}