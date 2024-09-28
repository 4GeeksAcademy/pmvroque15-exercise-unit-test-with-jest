let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


test("One euro should be 1.07 dollars", () => {
    const { fromEuroToDollar } = require('./app.js');

    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07; 

    expect(fromEuroToDollar(3.5)).toBe(expected); 
})

test("3.50 should be 511.91 yen", () => {
    const { fromDollarToYen } = require('./app.js');

    const yen = fromDollarToYen(3.5);

    const expected = 3.5 / 1.07 * 156.5; 

    expect(fromDollarToYen(3.5)).toBe(expected); 
})

test("3.5 Yen should be 1.07 Pounds", () => {
    const { fromYenToPound } = require('./app.js');

    const pound = fromYenToPound(3.5);

    const expected = 3.5 / 156.5 * 0.87; 

    expect(fromYenToPound(3.5)).toBe(expected); 
})