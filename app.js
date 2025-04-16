// Variables globales
let preguntaActual = 0;
let puntaje = 0;
let respuestasUsuario = Array(preguntas.length).fill(null);
let tiempoRestante = 1800; // 30 minutos
let cronometroActivo = true;
let timer;

// Elementos del DOM
const elementos = {
    contador: document.getElementById('contador'),
    pregunta: document.getElementById('pregunta'),
    opciones: document.getElementById('opciones'),
    resultado: document.getElementById('resultado'),
    btnAnterior: document.getElementById('anterior'),
    btnSiguiente: document.getElementById('siguiente'),
    btnFinalizar: document.getElementById('finalizar')
};

// Función para iniciar el examen
function iniciarExamen() {
    mostrarPregunta();
    if (cronometroActivo) iniciarCronometro();
}

// Mostrar pregunta actual
function mostrarPregunta() {
    const pregunta = preguntas[preguntaActual];
    elementos.pregunta.innerHTML = `<strong>Pregunta ${preguntaActual + 1}/${preguntas.length}:</strong> ${pregunta.pregunta}`;
    
    elementos.opciones.innerHTML = '';
    pregunta.opciones.forEach((opcion, index) => {
        const boton = document.createElement('button');
        boton.textContent = opcion;
        boton.className = 'opcion-btn';
        if (respuestasUsuario[preguntaActual] === index) {
            boton.style.backgroundColor = '#2196F3';
        }
        boton.onclick = () => seleccionarRespuesta(index);
        elementos.opciones.appendChild(boton);
    });

    elementos.btnAnterior.style.display = preguntaActual === 0 ? 'none' : 'block';
    elementos.btnSiguiente.style.display = preguntaActual < preguntas.length - 1 ? 'block' : 'none';
    elementos.btnFinalizar.style.display = preguntaActual === preguntas.length - 1 ? 'block' : 'none';
}

// Seleccionar respuesta
function seleccionarRespuesta(index) {
    respuestasUsuario[preguntaActual] = index;
    mostrarPregunta(); // Actualizar para mostrar selección
}

// Navegación
elementos.btnAnterior.addEventListener('click', () => {
    if (preguntaActual > 0) {
        preguntaActual--;
        mostrarPregunta();
    }
});

elementos.btnSiguiente.addEventListener('click', () => {
    if (preguntaActual < preguntas.length - 1) {
        preguntaActual++;
        mostrarPregunta();
    }
});

elementos.btnFinalizar.addEventListener('click', finalizarExamen);

// Cronómetro
function iniciarCronometro() {
    actualizarCronometro();
    timer = setInterval(() => {
        tiempoRestante--;
        actualizarCronometro();
        if (tiempoRestante <= 0) {
            clearInterval(timer);
            finalizarExamen();
        }
    }, 1000);
}

function actualizarCronometro() {
    const minutos = Math.floor(tiempoRestante / 60);
    const segundos = tiempoRestante % 60;
    elementos.contador.textContent = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
}

// Finalizar examen
function finalizarExamen() {
    clearInterval(timer);
    
    // Calcular puntaje
    puntaje = preguntas.reduce((total, pregunta, index) => {
        return total + (respuestasUsuario[index] === pregunta.respuesta ? 1 : 0);
    }, 0);

    // Mostrar resultados
    elementos.pregunta.innerHTML = `<h2>Examen Finalizado</h2>`;
    elementos.opciones.innerHTML = `
        <p><strong>Puntaje:</strong> ${puntaje}/${preguntas.length}</p>
        <p><strong>Porcentaje:</strong> ${Math.round((puntaje / preguntas.length) * 100)}%</p>
        <button onclick="reiniciarExamen()" style="margin-top: 20px;">Reiniciar Examen</button>
    `;
}

function reiniciarExamen() {
    preguntaActual = 0;
    puntaje = 0;
    respuestasUsuario = Array(preguntas.length).fill(null);
    tiempoRestante = 1800;
    elementos.resultado.innerHTML = '';
    iniciarExamen();
}

// Iniciar al cargar
window.onload = iniciarExamen;
window.reiniciarExamen = reiniciarExamen; // Hacer accesible globalmente