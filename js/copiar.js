let botonCopiar = document.querySelector(".btn-copiar");

const copiar = (event) => {
        //Detengo la ejecucion con el event
        event.preventDefault();

    //Copia lo que hay en el TextArea
    let textoCopiar = document.querySelector("#mensaje");
    let cpTexto = textoCopiar.value;

    //Declara donde lo va a poner
    let campoCopiar = document.querySelector("#encriptar")
    let txtCopy = cpTexto;
    campoCopiar.textContent = cpTexto;
    let borrar = document.querySelector(".secundario");
    borrar.reset();

}

botonCopiar.addEventListener("click", copiar);