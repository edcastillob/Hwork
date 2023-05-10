// function crearSaludo(saludo) {
//     //var saludo ='Hola'
//     return function persona(nombre) {
//         //console.log(nombre);
//         console.log(saludo, nombre);
//     }
// }

// //var saludarHola =  crearSaludo('Hola')()
// var saludarHola = crearSaludo('Hola')
// saludarHola('Juan')



// function crearContador() {
//     var counter = 0;
//     return function() {
//         counter++
//         return counter
//     }
// }

// var contador = crearContador()
// //console.log(crearContador()());
// console.log(contador());
// console.log(contador());
// console.log(contador());
// console.log(contador());
// console.log(contador());
// console.log(contador());

// var contador1 = crearContador()
// console.log(contador1());
// console.log(contador1());

// function mascota(tipo){
//     //var tipoDeMascota = 'perro'
//     return function(nombre) {
//         //var nombreMascota = 'Napoleon';
//         console.log('Yo tengo un ', tipo , 'que se llama ' , nombre);
//     }
// }

// var miMascota = mascota('perro');
// miMascota('Napoleon')


// var crearFunction = function() {
//     var arreglo =[]

//     for (let i = 0; i < 3; i++) {
//         arreglo.push(function() {
//             console.log(i);
//         })
//     }
//     return arreglo
// }

// var arr = crearFunction()
// arr[0]()
// arr[1]()
// arr[2]()


// var persona = {
//     nombre: 'Juan',
//     apellido: 'Pablo'
// }

// var mascota = {
//     nombre: 'Napoleon',
//     edad: 8
// }

// var logNombre = function() {
//     console.log(this.nombre);
// }

// var logNombrePersona = logNombre.bind(persona)
// var logNombreMascota = logNombre.bind(mascota)

// logNombrePersona()
// logNombreMascota()

// const auto = {
//     marca: 'Toyota',
//     descripcion: function() {
//         return this.marca
//     }
// }

// // const nuevaDescripcion = auto.descripcion
// // console.log(nuevaDescripcion());

// const descripcionBindeada = auto.descripcion.bind(auto)
// console.log(descripcionBindeada());


// function multiplica(a, b, c) {
//     return a * b + c
// }

// var multiplicaPorDos = multiplica.bind(this, 2, 3)
// console.log(multiplicaPorDos(5))
// console.log(multiplicaPorDos(6))
// console.log(multiplicaPorDos(7))
// // console.log(multiplica(2,3))
// // console.log(multiplica(2,4))
// // console.log(multiplica(2,5))
// // console.log(multiplica(2,6))

var persona = {
    nombre: 'Nacho',
    apellido: 'Romero',
    nombreCompleto: function() {
        return this.nombre + ' ' +  this.apellido
    }
}


var saludo = function(saludo1, saludo2) {
    console.log(saludo1 + this.nombreCompleto() + saludo2);
}

saludo.apply(persona, ['Hola, ' , ' Chau'])
saludo.call(persona, ' hola ', ' chau ')

//Para el uso de BIND la funcion saludo no debe recibir parametros, y se debe acceder a this.nombre + this.apellido
var saludar = persona.bind(persona)
saludar()

// var mascota = {
//     nombre: 'Indio',
//     edad: 12
// }
// var logNombre = function() {
//     console.log(this.nombre , 'tengo ' ,  this.edad);
// }

// logNombre.call(persona)
// logNombre.call(mascota)