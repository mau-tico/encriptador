let botonDesc = document.querySelector(".btn-desencriptar");

const desencriptar = (event) => {
  event.preventDefault();
  //Array vacio para ir llenando con la desincriptacion
  let newDesc = [];

  //Copia lo que hay en el TextArea
  let textDesc = document.querySelector("#encriptar");
  let descTexto = textDesc.value;

  // Proceso para desencriptar
  for (var j = 0; j < descTexto.length; j++) {
    switch (descTexto[j]) {
      case "e":
        if (descTexto[j + 4] === "r") {
          newDesc += "e";
          j += 4;
        } else {
          return false;
        }
        break;
      case "i":
        if (descTexto[j + 3] === "s") {
          newDesc += "i";
          j += 3;
        } else {
          return false;
        }
        break;
      case "a":
        if (descTexto[j + 1] === "i") {
          newDesc += "a";
          j += 1;
        } else {
          return false;
        }
        break;
      case "o":
        if (descTexto[j + 3] === "r") {
          newDesc += "o";
          j += 3;
        } else {
          return false;
        }
        break;
      case "u":
        if (descTexto[j + 3] === "t") {
          newDesc += "u";
          j += 3;
        } else {
          return false;
        }
        break;
      default:
        newDesc += descTexto[j];
    }
  }

  // Se envia el resultado al DOM
  let txtSalida = document.querySelector("#mensaje");
  let TXTnewTexto = newDesc;
  txtSalida.textContent = TXTnewTexto;
  let borrar2 = document.querySelector(".principal");
  borrar2.reset();
};

botonDesc.addEventListener("click", desencriptar);
