// function cuentaRegresiva(num) { //10
//     console.log(num);
//     if(num === 0) return 
//     else {
//         cuentaRegresiva(num -1)
//         //cuentaRegresiva(9)
//     }
// }

// cuentaRegresiva(12)

//Numero factorial
//5! = 5 * 4 * 3 * 2 * 1          5! = 5 * 4!
//4! = 4 * 3 * 2 * 1              4! = 4 * 3!
//3! = 3 * 2 * 1                  3! = 3 * 2!
//2! = 2 * 1                      2! = 2 * 1!
//1! = 1                          1! = 1 * 0!
//                                0! = 1

// function factorial(num) { // 5
//     if(num === 0) return 1

//     return num * factorial(num - 1)
//     //     5 

// }


// factorial(5)

// function sumaArray(array) { //[1, 2, 3, 4]    [2, 3, 4]   [3, 4]   [4]
//     if(array.length === 0) {
//         return 0;
//     }
//     else {
//         let primerNumero =  array[0] //1  2     3    4
//         let restoDelArray = array.slice(1) // [2, 3, 4]      [3, 4]     [4]    []
//         return primerNumero + sumaArray(restoDelArray)
//         //          10


//     }
// }

//sumaArray([4])
//sumaArray([3, 4])
//sumaArray([2, 3, 4])
//console.log(sumaArray([1, 2, 3, 4]))

// let persona = {
//     nombre: 'Edwar',
//     apellido: 'Jimenez'
// }

// console.log(persona);

// let otraPersona = persona

// console.log(otraPersona);

// otraPersona.apellido = 'Villarreal'
// console.log(otraPersona);

// console.log(persona)

// let array = [1, 2, 3, true, 'Roque' ]
// let otroArray = array

// console.log(otroArray);

// otroArray.push(4)
// console.log(array);

// var repetidos = [1, 2, 3, 4, 5, 4, 3, 4, 'hola', 'hola']

// var noRepetidos = new Set(repetidos)
// console.log(noRepetidos);

// noRepetidos.add(8)
// noRepetidos.add(9)
// let nuevoElementos = [10, 11, 12]

// for(let ele of nuevoElementos) {
//     noRepetidos.add(ele)
// }

// noRepetidos.delete(12)
// noRepetidos.size()
// console.log(noRepetidos);

// var stack = []

// stack.push('Jhorman')
// stack.push('Nico')
// stack.push('Juli')

// console.log(stack);

// stack.pop()
// console.log(stack);

// class Stack {
//     constructor() {
//         this.stack = []
//     }

//     agregarAlaPila(value){
//         return this.stack.push(value)
//     }

//     quitarDeLaPila() {
//         return this.stack.pop()
//     }
// }

// let newStack = new Stack()
// newStack.agregarAlaPila(1)
// newStack.agregarAlaPila(2)
// newStack.agregarAlaPila(3)

// console.log(newStack);

function Stack() {
    this.stack = []
}

Stack.prototype.agregar = function(value) {
    return this.stack.push(value)
}

Stack.prototype.pop = function() {
    this.stack.pop()
}

let newStack = new Stack()
newStack.agregar(1)
newStack.agregar(2)
newStack.agregar(3)
console.log(newStack);

let queue = []
queue.push(1)
queue.push(2)
queue.push(3)

console.log(queue);

queue.shift()

console.log(queue);