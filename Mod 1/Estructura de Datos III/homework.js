'use strict';

/*
Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
   - size: retorna la cantidad total de nodos del árbol
   - insert: agrega un nodo en el lugar correspondiente
   - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
   - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
   - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value // root
   this.left = null // <
   this.right = null // >
}

BinarySearchTree.prototype.size = function() {
   //OPCION 1
   if(this.right === null && this.left === null) return 1; //nodo raiz

   if(this.left !== null && this.right === null) return 1 + this.left.size()

   if(this.left === null && this.right !== null) return 1 + this.right.size()

   if(this.left !== null && this.right !== null) return 1 + this.left.size() + this.right.size()
   

   //OPCION 2
   // let counter = 1 // nodo raiz
   // if(this.left) counter += this.left.size()
   // if(this.right) counter += this.right.size()

   // return counter;
}


BinarySearchTree.prototype.insert = function(value) { // 12
   if(value > this.value) { // 23 > 20
      if(!this.right) { //this.right === null
         this.right = new BinarySearchTree(value) // 22
      }
      else { // si hay nodo a la derecha, hacemos recursion
         this.right.insert(value)
      }
   }
   //valores menores
   else {
      if(!this.left) { // this.left === null
         this.left = new BinarySearchTree(value)
      }
      else {
         this.left.insert(value)
      }
   }

}


BinarySearchTree.prototype.contains = function(value) { //20   25
   if(value === this.value) return true; // 1
   if(value > this.value) {
      if(!this.right) return false
      else {
         return this.right.contains(value)
      }
   }
   if(value < this.value) {
      if(!this.left) return false
      else {
         return this.left.contains(value)
      }
   }
}

//  function(val){ 
//    testArr.push(val);  [20, 12, 25]
// }
BinarySearchTree.prototype.depthFirstForEach = function(cb, order) {
   //in-order = left - root - right
   if(!order || order === 'in-order') {
      if(this.left) this.left.depthFirstForEach(cb, order) //recorre sub arbol izquierda
      cb(this.value) //[] recorre la raiz
      if(this.right) this.right.depthFirstForEach(cb, order) //recorre sub arbol derecho
   }
   //post-order:  left - right - root
   else if(order === 'post-order') {
      if(this.left) this.left.depthFirstForEach(cb, order) //recorre sub arbol izquierda
      if(this.right) this.right.depthFirstForEach(cb, order) //recorre sub arbol derecho
      cb(this.value) //[] recorre la raiz
   }

   //pre-order: root - left - right
   else {
      cb(this.value) //[] recorre la raiz
      if(this.left) this.left.depthFirstForEach(cb, order) //recorre sub arbol izquierda
      if(this.right) this.right.depthFirstForEach(cb, order) //recorre sub arbol derecho
   }
}

// function(val){ 
//    depth.push(val); 
// }
                                                          //depth = []
BinarySearchTree.prototype.breadthFirstForEach = function(cb, depth) { // 20, 12, 22
   if(!depth) {
      var depth = [] // vamos a ir pusheando a medida que recorremos el arbol
   }
   //[20, 12, 22]
   cb(this.value) // recorremos el root
   
   if( this.left) {
      depth.push(this.left) 
   }

   //this.left && depth.push(this.left) // hay elementos a la izq &&
   this.right && depth.push(this.right)

   if(depth.length > 0) { //[ 12, 25 ]
      depth.shift().breadthFirstForEach(cb, depth)
   }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
