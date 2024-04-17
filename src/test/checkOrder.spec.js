const {checkOrder} = require('../index.mjs')

describe('checkOrder', () => {

    describe('first buy', () => {
        it('apply 15% of discount', () => {
            const newValue = checkOrder(true, 100)
    
            expect(newValue).toBe(85)
        })
    
        it('apply 15% of discount greater than 200', () => {
            const newValue = checkOrder(true, 250)
    
            expect(newValue).toBe(212.5)
        })
    
        it('apply 15% of discount buy greater than 500', () => {
            const newValue = checkOrder(true, 1000)
    
            expect(newValue).toBe(850)
        })
    })

    describe('not first buy', () => {
        it('apply none discount', () => {
            const newValue = checkOrder(false, 100)
    
            expect(newValue).toBe(100)
        })
    
        it('apply 5% of discount greater than 200', () => {
            const newValue = checkOrder(false, 250)
    
            expect(newValue).toBe(237.5)
        })
    
        it('apply 10% of discount buy greater than 500', () => {
            const newValue = checkOrder(false, 1000)
    
            expect(newValue).toBe(900)
        })
    })
})
