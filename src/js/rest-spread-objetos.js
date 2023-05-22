/* archivo src /rest-spread-obejtos.js*/

function combinarObjetos(a,b){
  return {...a,...b};
}

let a = { unaLlave: "un valor" }, b = {otraLlave:"otro valor"}, combo = combinarObjetos;
console.log(combo);