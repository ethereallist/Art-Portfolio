// const alerta = addEventListener ("click", listener: (this: Window, ev: MouseEvent) => any )

// const form = document.getElementById('formulario');
// form.addEventListener('submit', function(event) {
//      event.preventDefault();
//      validateForm();
//                  });

// function validateEmail(email) {
//     const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
//     return regex.test(email)
//                   }
// function validateForm() {
//     const emailInput = document.getElementById('email');
//     const email = emailInput.value;
//     if (!validateEmail(email)) {
//         alert('Por favor ingrese un correo electrónico válido.');
//         } else {
//             alert('Correo electrónico enviado correctamente.');
//                 }
//     }

// const mobileview = document.getElementsByClassName('navbar')

// Carrousel

'use strict'

const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')

// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
punto.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click',()=>{

        // Guardar la posición de ese PUNTO
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -50

        // MOVEMOS el grand
        grande.style.transform = `translateX(${ operacion }%)`

        // Recorremos TODOS los punto
        punto.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')

    })
})