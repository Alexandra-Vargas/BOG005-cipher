const cipher = {
  encode: function (offset, mensajeIngresado) {
    //string
    //recibimos parametros de la funcion
    // console.log(offset, mensajeIngresado)
    let resultado = "";
    //encode: function (offset, mensajeIngresado) {
    offset = parseInt(offset);
    let msnMayus = mensajeIngresado.toUpperCase();

    for (let i = 0; i < msnMayus.length; i++) {
      //inicializador parte de 0 <condicion.largo; inccrementando a la derecha
      let txtAscci = msnMayus.charCodeAt(i);
      let newAscci = ((txtAscci - 65 + offset) % 26) + 65;

      resultado += String.fromCharCode(newAscci); //string: objeto/clase. concatenar y guardar
    }
    return resultado;
  },

  decode: function (offset, mensajeIngresado) {
    //string
    //recibimos parametros de la funcion
    // console.log(offset, mensajeIngresado)
    let resultado = "";
    //encode: function (offset, mensajeIngresado) {
    offset = parseInt(offset);
    let msnMayus = mensajeIngresado.toUpperCase();
    //console.log('tamaño:', msnMayus.length) //lenght: obtiene la cantidad de caracteres

    for (let i = 0; i < msnMayus.length; i++) {
      //inicializador parte de 0 <condicion.largo; inccrementando a la derecha
      //console.log(msnMayus[i]); //obtener el caracter dentro de la posicion de un [array]
      let txtAscci = msnMayus.charCodeAt(i);
      let newAscci = ((txtAscci + 65 - offset) % 26) + 65;
      console.log(txtAscci, newAscci);

      resultado += String.fromCharCode(newAscci); //string: objeto/clase. concatenar y guardar
    }
    return resultado;
  },
};
export default cipher;
