let pontos = 0;

const botao = document.getElementById("botao");
const contador = document.getElementById("contador");

botao.addEventListener("click", function () {
  pontos++;
  contador.textContent = pontos;
});