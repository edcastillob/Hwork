var traverseDomAndCollectElements = function(matchFunc, startEl = document.body) {
  var resultSet = [];

  // if (typeof startEl === "undefined") {
  //   startEl = document.body;
  // }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ

  if(matchFunc(startEl)) resultSet.push(startEl)
  for (let i = 0; i < startEl.children.length; i++) {
    let child = startEl.children[i];
    let elementoEncontrado = traverseDomAndCollectElements(matchFunc, child)
    resultSet = [...resultSet, ...elementoEncontrado]
  }
  return resultSet;

};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí


    if(selector[0] === '#') return 'id';
    if(selector[0] === '.') return 'class';
    if(selector.split('.').length > 1) return 'tag.class';
    return 'tag';
  
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.


let matchFunctionMaker = function(selector) {
  let selectorType = selectorTypeMatcher(selector);
  let matchFunction;

  if (selectorType === "id") { 
    matchFunction = (element) => { 
        if ( `#${element.id }`=== selector ) return true;        
        return false;
     }

      
  } else if (selectorType === "class") {

    matchFunction = (element) => { // <h1 className="lead heading lightback"></h1>    selector=".heading"
      let clases = element.className.split(' '); // [lead, heading, lighback]      

      let buscar = ((selector.split('.')).slice(1)).toString();

      for(let i=0; i < clases.length; i++) {        
          if (clases[i] === buscar) return true;      
      }
      return false;
    }


    
  } else if (selectorType === "tag.class") {

    matchFunction = ( element ) => { 

      const [ tag, className ] = selector.split('.');

      return matchFunctionMaker( tag )( element ) && matchFunctionMaker( `.${className}` )( element );

     }

    
  } else if (selectorType === "tag") {  
    matchFunction = (element) => element.tagName === selector.toUpperCase();
  }
  return matchFunction;
};

let $ = function(selector) {
  let elements;
  let selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};


