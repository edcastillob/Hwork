// root = raiz
// < izquierda
// > derecha
// nodos hijos = 2
//divididos x niveles
// recursion
// nodo hijo no apunta a nadie = null

// let objeto = {
//     prop: value
// }
// let nuevoObj = objeto
// console.log(objeto);
// console.log(nuevoObj);

function BinarySearchTree(value) {
    this.root = value // nodo raiz
    this.left = null
    this.right = null
}

// < izquierda
// > derecha
BinarySearchTree.prototype.insert = function(value) { // 12  15
    //si es mayor
    if(value > this.root) { // 15 > 12
        if(this.right === null) { // !this.right
            this.right = new BinarySearchTree(value)
        }
        else {
            this.right.insert(value) //aca entra en juego la recursion
        }
    }
    //si es menor
    else {
        if(!this.left) { //this.left === null
            this.left = new BinarySearchTree(value)
        }
        else { // si hay algo volvemos a preguntar
            this.left.insert(value)
        }
    }
}

let newArbol = new BinarySearchTree(8)
console.log(newArbol);

newArbol.insert(12)
//newArbol.insert(15)
newArbol.insert(3)
console.log(newArbol);
