import cipher from "./cipher.js";

console.log(cipher);

const btnEncode = document.getElementById("btnEncode");
btnEncode.addEventListener("click", btnCifrar);
function btnCifrar() {
  let textEncode = document.getElementById("mensajeIngresado").value;
  let textOffset = document.getElementById("n_offset_d").value;
  let resultado = document.getElementById("resultado");
  resultado.value = cipher.encode(textOffset, textEncode); //mandamos argumentos a la funcion encode
  //agregar un if. para validar que si hay contenido en el input
}

const btnDecode = document.getElementById("btn_noCodificar");
btnDecode.addEventListener("click", btnDecifrar);

function btnDecifrar() {
  let textDecode = document.getElementById("mensajeIngresado").value;
  let textOffset = document.getElementById("n_offset_d").value;
  let resultado = document.getElementById("resultado");
  resultado.value = cipher.decode(textOffset, textDecode);
}
