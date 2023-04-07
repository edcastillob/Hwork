//EVENT LOOP
//Es una estructura que permite que las operaciones asincronicas se ejecuten de manera eficiente sin bloquear el hilo principal de ejecucion

//Ejemplo:
function saludarMasTarde(){
	var saludo = 'Hola';

	setTimeout( function(){
		console.log(saludo);
	},3000)
};

saludarMasTarde();

//SYNTAX PARSER = Sintaxis correcta
//LEXICAL ENVIRONMENT = Lista de variables (declaradas con var) y funciones


console.log(userName);  

var userName = 'Gabriel'; // variable global


function greet(name) {
    console.log(name); //Accede a la variable global
    // var name = 
    
    console.log('Hola ' + name);
}

greet(userName); // Se genera contexto de funcion - crea su propio lexical environmet


// //Lexical environmet
// //userName
// //age
// //fn greet()

let greeting = 'Hello word';

function greet() {
    let userName = 'Xavier';
    //console.log(userName);
}

console.log(userName) // let tiene alcance de bloque, vive y muere dentro de {}
console.log(greeting);

//No se puede acceder a una variable definida dentro de la funcion desde afuera de la funcion
function exampleFunction() {
    var x = 'declarada dentro de la funcion'
    console.log(x);
}

console.log(x);  // x is not defined

//Precedencia
//let resultado = 5 + 10 * 2
//Primero calcula 10 * 2
//Luego 5 + 20

//console.log(resultado) 25

//let resultado = (5 + 10) * 2
//Primero suma 5 + 10
//Luego se multiplica * 2

//let resultado = 10 / 2 * 4
//izquierda a derecha debido a que los operadores "*" y "/" tienen la misma precedencia y asociatividad de izquierda a derecha. 
//Primero se realiza la división de 16 / 2 = 8
//luego se multiplica ese resultado por 4




//THIS

console.log(this);

function exampleFunction() {
    function otherFunction() {
        return this
    }

    return otherFunction()
}

console.log(exampleFunction());

let objecto = {
    propiedad: 37,
    metodo: function() {
        return this.propiedad
    }
}

console.log(objecto.metodo());

function Persona(nombre){
    this.nombre = nombre;
    this.amigos = ['Andres', 'Juan', 'Juli']
}

Persona.prototype.getAmigos = function() {
    let that = this  // creamos una referencia del this
    //let referencia = this
    this.amigos.forEach(function(amigo){
        console.log(amigo, ' es amigo de ' + referencia.nombre);
    })
}

let newPersona = new Persona('Gaby')
newPersona.getAmigos()


//JS ES TIPADO DINAMICO
//Nos permite reasigna el valor a cualquier tipo de dato
let nombre = 'Meli'

nombre = 31
console.log(nombre);


//COERCION DE DATOS
console.log(3 + 5);
console.log('hola' + 32);
console.log('hola' - 32);
console.log( 32 + 'hola');
console.log(typeof true);
console.log(typeof 'hola');
console.log(Number('23'));
console.log(Number(false));
console.log(Number(true));
console.log(Number(null));


//Si declaramos una funcion dentro de una variable, recordemos que el proceso de Hoisting subiria la declaracion de la variable y no su valor! 
// var estaEsUnaFuncion = funcion() {

// }

//EXPRESIONES
//Evalua un valor: operaciones matematicas, llamadas a funciones, asignacion de valores y referencia a variables.
//Ejemplo: 

2 + 3; // Esto es una expresión que evalúa a 5
var x = 5; // Esto es una expresión que asigna el valor 5 a la variable x
"Hello" + " " + "World";// Esto es una expresión que evalúa a "Hello World"

//STATEMENT
//Realizan una accion
// if
// for
// while
// switch

if (x > 0) { 
    console.log("x es mayor que 0");
}
    
for (var i = 0; i < 10; i++) { 
    console.log(i);
}


//VALOR Y REFERENCIA

//La variable contiene una copia del valor real. Por lo tanto, cuando se pasa o se asigna una variable primitiva, se pasa o se asigna su valor por VALOR. 
var x = 5
var y = x //copia el valor de x a y
console.log(y);

y = 10 //cambia el valor de y pero no afecta a x

console.log(x);
console.log(y)


//Cuando se pasa o se asigna una variable de objeto, se pasa o se asigna su referencia por REFERENCIA.

let objeto ={
    prop: 'value',
    otraProp: 'otroValor'
}

let otroObjeto = objecto //asigna la referencia de objeto a otroObjeto, no lo copia!!
console.log(otroObjeto);

otroObjeto.prop = 'nuevo valor' //cambia la propiedad del objeto referenciado por otroObjeto

console.log(otroObjeto);

console.log(objecto);

//Pasar un objeto por REFERENCIA a una función:
function cambiarPropiedad(obj) {
    console.log(obj);
    obj.propiedad = 'nuevo valor'
}

let object = {
    propiedad : 'valor real'
}
cambiarPropiedad(object)

console.log(object.propiedad);

//Pasar un tipo primitivo por VALOR a una función:
function duplicar() {
    valor = valor * 2
    return valor;
}

var miNumero = 5
var nuevoNumero = duplicar(miNumero)
console.log(miNumero);
console.log(nuevoNumero);