//Listas enlazadas

function LinkendList () {
    this.head = null;
    this.length = 0;
}

function Node(data) {  ////Juan
    this.value = data;
    this.next = null; //puntero
}



// [HEAD] -> ['Juan] -> ['Nacho] ->     
//                               

LinkendList.prototype.add = function(data) {  //Juan
    let node = new Node(data)
    console.log(node);
    let current = this.head;

    //si la lista esta vacia
    if(current === null) { //!current
        this.head = node;  //new Node(data)
        return node;
    }
    while(current.next) {  //mientras haya current.next
        current = current.next
    }
    current.next = node
}

// let newList = new LinkendList()
// console.log(newList);

// newList.add('Juan')
// // newList.add('Nacho')
// // newList.add('Alan')
// // newList.add('Sebas')
// console.log(newList);

LinkendList.prototype.size = function() {
    let current = this.head;
    if(current  === null) { // [H] -> null
        console.log('La lista esta vacia');
        return ;
    }
    while(current !== null) { //hay nodos
        console.log(current.value);
        this.length++
        current = current.next
    }
    return this.length
}

// let newList = new LinkendList()
// console.log(newList);

// newList.add('gallina1')
// newList.add('gallina2')
// newList.add('Alan')
// newList.add('Sebas')
// console.log(newList);
// console.log(newList.size());


//HASH TABLE

function HashTable() {
    this.array = [];  // [ {key: value} ]     [ {Henry: 523}, {Nacho : 523} ] 
    this.numBucket = 30;
}

HashTable.prototype.hash = function(key) { // 'Henry'  'Nacho'
    let total = 0; // 523
    for (let i = 0; i < key.length; i++) {
        total = total  + key.charCodeAt(i)  
    }
    return total % this.numBucket  // 13
}

HashTable.prototype.set = function(key, value) {
    let index = this.hash(key) // 13
    if(!this.array[index]) { // si no hay nada en esa posicion
        this.array[index] = {} //para controlar colisiones
    }
    //[ {Henry: 523} ]
    this.array[index][key] = value; //[ {Henry: 523, Nacho : 523} ] 
//  this.array[13][nacho] =  523
}


let hasheadora = new HashTable()
hasheadora.hash('Henry');

console.log(hasheadora);
hasheadora.set('Henry', 13)
console.log(hasheadora);

