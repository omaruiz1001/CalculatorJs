function mostrar(valor) {
  document.getElementById("pantalla").value += valor
}

function refresh(){
  document.getElementById("pantalla").value = "";
}

function result() {
  const ValorPantalla = document.getElementById("pantalla").value;
  const resultado = eval(ValorPantalla);
  document.getElementById("pantalla").value = resultado
}