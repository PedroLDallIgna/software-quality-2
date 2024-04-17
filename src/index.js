const { checkOrder } = require("./utils/checkOrder.js");
const { validateValue, validateName } = require("./utils/validate.js");

const pedido = document.querySelector(".pedidos");
const nome = document.querySelector("#name");
const valor = document.querySelector("#value");
const confirm = document.querySelector("#submit");

const check = document.querySelector("#first-buy");

valor.addEventListener('input', (e) => {
  const value = e.target.value
  e.target.value = validateValue(value)
})

nome.addEventListener('input', (e) => {
  const value = e.target.value
  e.target.value = validateName(value)
})

confirm.addEventListener("click", () => {
  if(check.checked) {
    createPedido(nome.value, checkOrder(true, valor.value), true);
  } else {
    createPedido(nome.value, checkOrder(false, valor.value), false);
  }
})

function createPedido(nome, valor, first) {
  if(first) {
    pedido.innerHTML += `<p>${nome}: ${valor} reais (primeira compra)</p>`;
  } else {
    pedido.innerHTML += `<p>${nome}: ${valor} reais</p>`;
  }
  
}