// Seleccionamos el boton por su clase
const boton = document.querySelector('.btn');

//Añadimos un escuchador de eventos para el click del boton
boton.addEventListener('click', (evento) => {evento.preventDefault(); // Evitamos que el enlace se abra de forma predeterminada 
    alert('¡Has hecho clic en el botón interactivo con JavaScript!'); // Mostramos un mensaje de alerta
    });
    