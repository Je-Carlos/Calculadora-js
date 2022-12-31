(function () {
  "use strict";

  // Atalho para pegar todos os elementos
  var el = function (element) {
    if (element.charAt(0) === "#") {
      return document.querySelector(element);
    }
    return document.querySelectorAll(element);
  };

  //variaveis
  let visor = el("#visor"), //tela que mostra os valores
    igual = el("#igual"), // botao igual
    nums = el(".numero"), // lista de numeros
    calculo = el(".calculo"); //lista de operadores
  (numeroAtual = ""), // numero atual
    (numeroAnterior = ""), // primeiro numero
    resultado, // resultado
    operador;

  let setNumero = function () {
    // Se o numero foi mostrado, reseta o numero
    if (resultado) {
      numeroAtual = this.getAttribute("data-numero");
      resultado = "";
    } else {
      // se não, adicione o digito ao número anterior
      numeroAtual = +this.getAttribute("data-numero");
    }
    viewer.innerHTML = numeroAtual; // mostra o numero atual
  };
  // Quando o operador for clicado, passe o numero para o numero anterior e salve o operador
  let moverNumero = function () {
    numeroAnterior = numeroAtual;
    numeroAtual = "";
    operador = this.getAttribute("data-ops");
    igual.setAttribute("data-resultado", "");
  };
});
