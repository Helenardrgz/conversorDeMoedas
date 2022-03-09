function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5.09;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O valor de Dólar para Real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;

  ///////
}

function Converter2() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal2 = valorEmDolarNumerico * 5.52;
  console.log(valorEmReal2);

  var elementoValorConvertido2 = document.getElementById("valorConvertido2");
  var valorConvertido2 = "O valor de Euro para Real é R$ " + valorEmReal2;
  elementoValorConvertido2.innerHTML = valorConvertido2;
}

function Converter3() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal3 = valorEmDolarNumerico * 6.65;
  console.log(valorEmReal3);

  var elementoValorConvertido3 = document.getElementById("valorConvertido3");
  var valorConvertido3 = "O valor de Libras para Real é R$ " + valorEmReal3;
  elementoValorConvertido3.innerHTML = valorConvertido3;
}