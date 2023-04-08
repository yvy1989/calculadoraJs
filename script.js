function calcularValores() {
  let valor1 = parseFloat(document.getElementById("txtValor1").value);
  let valor2 = parseFloat(document.getElementById("txtValor2").value);

  let resultado;

  const operacao = document.getElementById("cbxOperacao").value;

  switch (operacao) {
    case "+": {
      resultado = parseFloat(valor1 + valor2);
      break;
    }
    case "-": {
      resultado = parseFloat(valor1 - valor2);
      break;
    }
    case "*": {
      resultado = parseFloat(valor1 * valor2);
      break;
    }
    case "/": {
      resultado = parseFloat(valor1 / valor2);
      break;
    }
    default:
      console.log("erro");
  }

  document.getElementById("txtResultado").innerText = resultado;
  //console.log(resultado);
}
