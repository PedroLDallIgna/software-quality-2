const { checkOrder } = require("./utils/checkOrder.js");

console.log('Running');
console.log(checkOrder(false, 100));
console.log(checkOrder(true, 100));

const pedido = document.querySelector(".pedidos");
const nome = document.querySelector("#name");
const valor = document.querySelector("#value");
const confirm = document.querySelector("#submit");

const check = document.querySelector("#first-buy");

confirm.addEventListener("click", () => {
  if(check.checked) {
    createPedido(nome.value, checkOrder(true, valor.value));
  } else {
    createPedido(nome.value, checkOrder(false, valor.value));
  }
})

function createPedido(nome, valor) {
  pedido.innerHTML += `<p>${nome}: ${valor}</p>`;
}