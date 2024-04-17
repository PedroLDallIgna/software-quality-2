function calcNewValue(value, percent) {
    const percent_value = percent / 100;

    return value * (1 + percent_value);
}

module.exports = { calcNewValue };
