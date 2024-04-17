const { checkOrder } = require("./utils/checkOrder.js");

console.log(checkOrder(false, 100));
console.log(checkOrder(true, 100));

document.addEventListener('DOMContentLoaded', () => {
    console.log('Running');
})
