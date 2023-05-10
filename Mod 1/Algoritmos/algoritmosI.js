'use strict'
// No cambies los nombres de las funciones.

function factorear(num) { // 10
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let arregloFactores = [1] // [1, 2, 5]
  let divisor = 2  //3  4   5

  while(num > 1 ) { //10 > 1     5 > 1
    if(num % divisor === 0) {
      arregloFactores.push(divisor)
      num = num / divisor
      //10 = 10 / 2 --> 5
    }
    else {
      divisor++
    }
  }
  return arregloFactores;
}

console.log(factorear(10))

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let huboCambio = true;
  while(huboCambio) { //true
    huboCambio = false;
    for (let i = 0; i < array.length; i++) { // 1
      if(array[i] > array[i + 1]) { // 1 > 4
        let aux = array[i] // aux = 5
        array[i] = array[i + 1] //array[i] = 2
        array[i + 1] = aux // 2 = 5
        huboCambio = true
      }
    }
  }
  return array

}

// bubbleSort([5, 1, 4, 2, 3]) 
// console.log(bubbleSort([5, 1, 4, 2, 3]))
// //  [1,  4,  2, 5, 8]
// //   i
// //      i+1





function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  //   [1,  2,  4,  5, 8])
  //            i
  //   j  
  for (let i = 1; i < array.length; i++) {  
    let j = i - 1 // 4
    let aux = array[i] // aux = 2
    while(array[j] > aux) { // 4 > 2
      array[j + 1]  = array[j]
      j--
    }
    array[j + 1] = aux // 5 = 5
    
  }
  return array
}

// insertionSort([1,  4,  2, 5, 8])
// //                 i
// //            j
//console.log(insertionSort([1,  4,  2, 5, 8, 3, 4, 2]));



function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  
  //    [2, 4, 5, 8, 3]
  //               i
  //                 j
  for (let i = 0; i < array.length; i++) {
    let minimo = i // 2
    for (let j = i + 1; j < array.length; j++) {
      if(array[j] < array[minimo]) { // 4 < 2
        minimo = j // minimo = 2
      }
    }
    let aux = array[i] //  4
    array[i] = array[minimo] // 4 = 2
    array[minimo] = aux // 4
  }
  return array;
}

console.log(selectionSort([4, 2, 5, 8, 3]));


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
