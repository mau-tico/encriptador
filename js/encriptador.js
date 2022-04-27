let numeros = [0,1,2,3,4,5,6,7,8,9];
let tildes = ["ü","é","á","í","ó","ú","ñ"];
let botonEncriptar = document.querySelector(".btn-encriptar");

const validar = (event) => {
  let validador = true;
  event.preventDefault();

  let newTexto = [];

  let textoEncriptar = document.querySelector("#encriptar");
  let texto = textoEncriptar.value;

  //Validacion de numeros y acentos
  for (var i = 0; i < texto.length; i++) {
    for (var e = 0; e < numeros.length; e++) {
      if ( parseInt(texto[i]) == numeros[e]) {
        alert("Error, digite la frase sin números");
        textoEncriptar.value = "";
        validador = false;
        break;
      } // Fin del IF
    } // Fin segundo For anidado
  } // Fin del Primer FOR

  if (validador) {
    for (var r = 0; r < texto.length; r++) {
      for (var e = 0; e < tildes.length; e++) {
        if (texto[r] == tildes[e]) {
          alert("Error, digite la frase sin acentos");
          textoEncriptar.value = "";
          validador = false;
          break;
          // Fin del IF
        }
      } // Fin segundo For anidado
    } //Fin IF del validador
  } // Fin del Segundo FOR

  //return validador;
  //Fin Validacion numeros y acentos

  //Comienzo de Encriptacion
   if(validador) {
    for(var r = 0; r < texto.length; r++){
      switch(texto[r]){
        case "e": newTexto.push("enter")
        break;
        case "i": newTexto.push("imes")
        break;
        case "a": newTexto.push("ai")
        break;
        case "o": newTexto.push("ober")
        break;
        case "u": newTexto.push("ufat")
        break;
        default: newTexto.push(texto[r]);
      }
      
    }// Fin For

    // Envia al DOM
   let txtSalida = document.querySelector("#mensaje")
   let TXTnewTexto = newTexto.join("");
   txtSalida.textContent = TXTnewTexto;

  } // Fin IF
  //FIN de Encriptacion
  let borrar2 = document.querySelector(".principal");
  borrar2.reset();
};

botonEncriptar.addEventListener("click", validar);