'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) { // left =[2, 1]   right = [6, 4, 5]   left= [4, 5]
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //[3, 6, 2, 1, 4, 5]
  // p
  //                i

  //caso base:
  if(array.length <= 1) return array;
//seleccionar pivot
  let pivot = array[0] // 3   2    6    4
  //< left
  let left = [] // [2, 1]    [1]    []
  // > rigth
  let right = [] // [6, 4, 5]     [5]

  for (let i = 1; i < array.length; i++) {
    if(array[i] < pivot) {  //5 < 4
      left.push(array[i])
    }
    else {
      right.push(array[i])
    }
  }
  //console.log(quickSort(left));
  return quickSort(left).concat(pivot).concat(quickSort(right))
  //return quickSort([2, 1]).concat(3).concat(quickSort([6, 4, 5]))
  //        
  //pivot= 2
  //let left =  [1]
  //let right = [] 
  //return quickSort([1]).concat(2).concat([]))concat(3).[4, 5][6][]
  //(quickSort([6, 4, 5])) <-- right
  // pivot = 6
  // left= [4, 5]
  //right = []

  //quickSort=([4, 5]) -> se resuleve 
  //pivot = 4
  //left = []
  //right= [5]
  //return quickSort([]).concat([4]).concat(quickSort(5))
}

quickSort([3, 6, 2, 1, 4, 5])
console.log(quickSort([3, 6, 2, 1, 4, 5]))




function mergeSort(array) {  // [4, 2, 3, 1, 5]   left= [4, 2]   right = [3, 1, 5]

  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if(array.length < 2) return array;
  
  let mitad = Math.floor(array.length/ 2) // 2
  let left = array.slice(0, mitad) // [4, 2]     [4]    
  //console.log(left);
  let right = array.slice(mitad) // [3, 1, 5]    [2]     [ 5]
  //console.log(right);


  array = [] //[2, 1, 3]

  left = mergeSort(left) // [4, 2]
  right = mergeSort(right)

  while(left.length && right.length) {
    if(left[0] <  right[0]) {
      array.push(left.shift())
    }
    else {
      array.push(right.shift())
    }
  }
  array = array.concat(left, right)
  return array;
}

mergeSort([4,2,3,1, 5])
console.log(mergeSort([4, 2, 3, 1, 5]))
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
