function checkOrder(first, value) {
    let newValue = 0;
    
    if (first) {
        newValue = value * (1 - 0.15);
    } else {
        if (value > 200 && value <= 500) {
            newValue = value * (1 - 0.05);
        } else if (value > 500) {
            newValue = value * (1 - 0.1);
        } else {
            newValue = value;
        }
    }

    return newValue;
}

console.log(checkOrder(false, 100));
