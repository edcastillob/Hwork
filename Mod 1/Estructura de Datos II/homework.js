'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head = null
}

function Node(value) {
  this.value = value
  this.next = null
}

LinkedList.prototype.add = function(value){ // [Head] -> [5] ->   [6]
  //                                              c                c.next
  console.log(value);
  let nodo = new Node(value);
  console.log(nodo);
  let current = this.head;
  if(!current) {  // this.head === null
    this.head = nodo;
    return nodo;
  }
  while(current.next) {
    current = current.next
  }
  current.next = nodo;
  return nodo;
}

// let newList = new LinkedList()
// console.log(newList);
// newList.add(5)
// newList.add(6)
// console.log(newList);



LinkedList.prototype.remove = function() {
  if(!this.head) return null;

  if(this.head.next === null) {
    // [H] -> [5] -> null 
    let aux = this.head // 5
    this.head = null // [H]  -> null 
    return aux.value // 5
  }
  else { // [H] -> [5] -> [6] --> null
    //       c             c.next
    let current = this.head // 5
    while(current.next.next) { //mientras haya nodos
      current = current.next
    }
    let aux = current.next.value // 6
    current.next = null //[5] /--> null
    return aux
  }
}

// let newList = new LinkedList()
// console.log(newList);
// newList.add(5)
// newList.add(6)
// console.log(newList);
// newList.remove()
// console.log(newList);


//linkedList.search(function(nodeValue) {  [5]
  //return nodeValue === 'five';
  // }                                              H
LinkedList.prototype.search = function(value) {  //[5]-> [6] -> [7]
  let current = this.head;
  while(current) { //true
    if(typeof value !== 'function') {
      if(value === current.value) {
        return current.value
      }
    }
    else { // si es una funcion
      if(value(current.value)) return current.value; // return nodeValue === 'five';
    }
    current = current.next
  }
  return null;
}

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.buckets = []
  this.numBuckets = 35
}

HashTable.prototype.hash = function(key) { //henry
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    total = total + key.charCodeAt(i) // 500
  }
  return total % this.numBuckets
}

HashTable.prototype.set = function(key, value) { //henry  nacho  500
  let index = this.hash(key) // el indice de la posicion del array
  if(typeof key !== 'string') throw new TypeError('Keys must be strings')

  if(!this.buckets[index]) {
    this.buckets[index] = {}  //{henry : 500}
  }
  this.buckets[index][key] = value  // {henry : 500, nacho : 500}
}


HashTable.prototype.get = function(key) {
  let index = this.hash(key)
  return this.buckets[index][key] // [henry: 500]
}

HashTable.prototype.hasKey = function(key) {
  let index = this.hash(key)
  return this.buckets[index].hasOwnProperty(key)
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
