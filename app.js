//Hacer en html css y js un pequeño programa el donde tenga un boton por cada uno de los repasos pero le tiene que pasar los parametros
// por medio de un input, al precionar el boton debe colocar el valor abajo y pintarlo de azul

//Repasos
/*
1. Factorial
2. Numero Mayor
3. Ordenar Array
4. Filtrar
5. Sumar todos los numeros
*/


//Repaso #1 Factorial
//   function factorial(n) {
//     let result = n; 
//     for(let i= n - 1; i > 0; i--) {
//         result *= 1; 
//     }
//     return result; 
//   }

//Repaso #2 Numero Mayor
// function encontrarMayor(arr) { 
//     let mayor = arr[0];
//     for(let numero of arr ) {
//         if(numero > mayor) {
//             mayor = numero;
//         }
//     }
//     return mayor;
// }

//REPASO #3 Ordenar un array
// function ordenararray(arr){
//     return arr.sort(function(a,b){
//         return a-b;
//     })
// }

//REPASO #4 Filtrar
// function filtrarnum(arr, val) {
//     let numfil = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > val) {
//             numfil.push(arr[i]);
//         } 
//     }
//     return numfil;
// }

//REPASO #5 Sumar todos los numeros
// function sumararry(arr) {
//     return arr.reduce((sum, valo ) => sum + valo, 0);
// }

// let num = [1,2,3,-40,99];
// let res = sumararry(num);
// console.log(res);

// Intento fallido
function calcularFactorial() {
    const input = document.getElementById('factorialInput');
    const resultado = document.getElementById('resultadoContainer1');
    if (!isNaN(input.value) && input.value !== "" && input.value >= 0) {
        const n = parseInt(input.value);
        let result = 1;
        for (let i = n; i > 1; i--) {
            result *= i;
        }
        input.value = ''
        modall(`El factorial de ${n} es ${result}.`)
    } else {
        modall('Por favor, ingresa un número válido y positivo.')
    }
}

function encontrarMayor() {
    const input = document.getElementById('numeroMayorInput');
    const resultado = document.getElementById('resultadoContainer2');
    const arr = input.value.split(',').map(Number);
    if (arr.length > 0 && arr.every(val => !isNaN(val))) {
        let mayor = arr[0];
        for (let numero of arr) {
            if (numero > mayor) {
                mayor = numero;
            }
        }
        modall(`El número mayor es ${mayor}.`)
        input.value = ''
    } else {
        modall('Por favor, ingresa números válidos separados por comas.')
    }
}

function ordenarArray() {
    const input = document.getElementById('ordenarArrayInput');
    const resultado = document.getElementById('resultadoContainer3');
    const arr = input.value.split(',').map(Number);
    if (arr.length > 0 && arr.every(val => !isNaN(val))) {
        arr.sort((a, b) => a - b);
        modall(`El arreglo ordenado es: ${arr.join(', ')}.`)
        input.value = ''
    } else {
        resultado.textContent = 'Por favor, ingresa números válidos separados por comas.';
    }
}

function filtrarNumeros() {
    const inputValores = document.getElementById('filtrarNumerosValor');
    const inputArreglo = document.getElementById('filtrarNumerosArreglo');
    const resultado = document.getElementById('resultadoContainer4');
    const val = Number(inputValores.value);
    const arr = inputArreglo.value.split(',').map(Number);
    if (!isNaN(val) && arr.length > 0 && arr.every(num => !isNaN(num))) {
        const numFil = arr.filter(numero => numero > val);
        modall(`Números mayores que ${val}: ${numFil.join(', ')}.`);
        inputValores.value = ''
        inputArreglo.value = ''
    } else {
        modall('Por favor, ingresa un valor y números válidos separados por comas.');
    }
}

function sumarTodosLosNumeros() {
    const input = document.getElementById('sumarNumerosInput');
    const resultado = document.getElementById('resultadoContainer5');
    const arr = input.value.split(',').map(Number);
    if (arr.length > 0 && arr.every(val => !isNaN(val))) {
        const sum = arr.reduce((acc, val) => acc + val, 0);
        modall(`La suma de los números es ${sum}.`);
        input.value = ''
    } else {
        modall('Por favor, ingresa números válidos separados por comas.');
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const navButtons = document.querySelectorAll('.nav-btn')
    const container = document.querySelectorAll('.container')
    const titulos = document.querySelectorAll('.titulo')

    const selectNav = document.getElementById('selectNav')

    function showContainer(filterValue) {
        container.forEach(div => {
            if (div.classList.contains(filterValue)) {
                div.style.display = 'flex'
            } else if (filterValue === 'all' || filterValue === "") {
                location.reload()
            } else {
                div.style.display = 'none'
            }
            titulos.forEach(ttl => {
                if (ttl.classList.contains(filterValue)) {
                    ttl.style.display = 'block'
                } else {
                    ttl.style.display = 'none'
                }
            })
        })
    }

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navButtons.forEach(btn => btn.classList.remove('active'))
            button.classList.add('active')

            const filterValue = button.getAttribute('data-filter')
            showContainer(filterValue)
        })
    })

    selectNav.addEventListener('change', () => {
        showContainer(selectNav.value)
    })
})

// Get the modal
var modal = document.getElementById("myModal");

var modalContent = document.getElementById("modal-content")

// Get the button that opens the modal
var btn = document.getElementsByClassName("boton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function modall(a) {
    modal.style.display = "block";
    document.getElementById('textModal').innerHTML = a
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const btnOscuro = document.getElementById('modo-oscuro')

