// Seleccionamos el boton por su clase
const boton = document.querySelector('.btn');

//Añadimos un escuchador de eventos para el click del boton
boton.addEventListener('click', (evento) => {evento.preventDefault(); // Evitamos que el enlace se abra de forma predeterminada 
    alert('¡Has hecho clic en el botón interactivo con JavaScript!'); // Mostramos un mensaje de alerta
    });

// Seleccionamos el nuevo botón de tema y el body
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

// Escuchamos el click
themeBtn.addEventListener('click', () => {
    // classList.toggle añade la clase si no está, y la quita si ya está
    body.classList.toggle('dark-mode');
});

