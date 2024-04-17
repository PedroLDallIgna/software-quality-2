const {calcNewValue} = require("../utils/calcNewValue.js");

describe("calcNewValue", () => {
    it("apply discount", () => {
        const newValue = calcNewValue(100, -15);

        expect(newValue).toBe(85);
    })

    it("apply increase", () => {
        const newValue = calcNewValue(100, 20);

        expect(newValue).toBe(120);
    })
})
