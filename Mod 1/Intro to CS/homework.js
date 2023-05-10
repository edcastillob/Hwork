'use strict';

// function BinarioADecimal(num) {
//    console.log(num);
   // var resultado = 0;
   // var exponente = num.length - 1;

   //OPCION 1
//    for (let i = 0; i < num.length; i++) {
//       resultado = resultado + num[i] * 2 ** exponente
//       // 0       =  0     +     1    * 2 **  3
//       // 8
//       // 8       =  8     +     0    * 2 **  2
//       // 8
//       // 8       =  8     +     1    * 2 ** 1 
//       // 10
//       // 10      =  10     +    1    * 2  ** 0
//       // 11
//       exponente = exponente - 1;
//       //exponente --
//    }
//    return resultado;
// }
// console.log(BinarioADecimal('1011')) // 
// //                             1

//OPCION 2
function BinarioADecimal(num) {
   console.log(num);

   var resultado = 0;
   var exponente = num.length - 1;
   console.log(exponente);

   for (let i = 0; i < num.length; i++) {
      resultado = resultado + num[i] * Math.pow(2, exponente);
      exponente--
   }
   return resultado;
}
//console.log(BinarioADecimal('1011')) // 


console.log(BinarioADecimal('1011'));
//                             i  
//                            j


function DecimalABinario(num) {
   
   var resultado = '';
   while(num > 0) {
      resultado = (num % 2) + resultado;
      // ''     =    0      +    0;
      // '0'    =    1      +    '0'
      // '10'   =    1      +     '10'
      //'110'   =    0      +     '110'
      // '0110' =    1      +    '0110'
      // '10110'

      num = Math.floor(num / 2)
      //num = 11
      // num = 5
      // num = 2
      // num = 1
      // num = 0
   }
   return resultado;

}

DecimalABinario(22)







console.log(DecimalABinario(22)) // ''




module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
