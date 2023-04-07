// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// //           0
// let otroArray = ['a', 'b', 'c', 'd']
// //                      j 

// for (let i = 0; i < array.length; i++) { // N pasos
//     console.log(array[i]);
//     for (let j = 0; j < otroArray.length; j++) { // M pasos
//         console.log(otroArray[j]);
        
//     }
// }
// O(N)  1 ciclo for
//big O

// for anidados
// O(n * m) complejidad cuadratica


// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// //           i
// //              j


// for (let i = 0; i < array.length; i++) { // N pasos
//     console.log(array[i]);
//     for (let j = 0; j < array.length; j++) { // N pasos
//         console.log(array[j]);
        
//     }
// }

// O(N ** 2)


// function maximoNumero(array) {
//     let maximo = array[0]  // O(1)
//     for (let i = 1; i < array.length; i++) { // O(N) // N pasos
//         if(array[i] > maximo) { // O(1) 
//             maximo = array[i] // O(1)
//         }
//     }
//     return maximo // O(1) 
// }

// maximoNumero([1, 2, 3, 4,]) 
//            m
//               i

//complejidad O(N)


function maximoNumero(array1, array2) { // [1, 2, 3], [4, 5, 6]
    //                                      i
    //                                                 j
    let maximo = array1[0] // O(1)
    for (let i = 0; i < array1.length; i++) { //O(N)
        for (let j = 0; j < array2.length; j++) { // O(M)
        if(array1[i] > maximo) {
            maximo = array1[i]
        }
        if(array2[j] > maximo) {
            maximo = array2[j]
        } 
        }
        
    }
    return maximo
}
console.log(maximoNumero([1, 2, 3], [4, 5, 6]));

// Complejidad O(n*m) cuadratica


//Merge Sort
function mergeSort(array) { //[9, 7, 3, 2, 6]
    //caso base
    if(array.length < 2) return array;

    let mitad = Math.floor(array.length/ 2) // 2
    let left = array.slice(0, mitad) //[9, 7]    
    let right = array.slice(mitad) // [3, 2, 6]

    array = []

    //Antes de comparar necesitamos aplicar recursion
    left = mergeSort(left) // []
    right = mergeSort(right) // []

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

console.log(mergeSort([9, 7, 3, 2, 6]));
