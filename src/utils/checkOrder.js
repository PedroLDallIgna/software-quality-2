const { calcNewValue } = require("./calcNewValue.js");

function checkOrder(first, value) {
    
    if (first) {
        return calcNewValue(value, -15)
    } else {
        if (value > 200 && value <= 500) {
            return calcNewValue(value, -5)
        } else if (value > 500) {
            return calcNewValue(value, -10)
        }
    }

    return value;
}

module.exports = {checkOrder}
