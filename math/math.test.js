const {add, subtract, divide, multiply, sqrt, max} = require("./math")



describe("testing math module", () =>{
    test("Should show addition", () =>{
        const result = add(10,12);
        expect(result)
    });
    test("Should show subtraction", () =>{
        const result = subtract(10,12);
        expect(result)
    });
    test("Should show division", () =>{
        const result = divide(10,12);
        expect(result)
    });
    test("Should show multiplication", () =>{
        const result = multiply(10,12);
        expect(result)
    });
    test("Should Show the square root", ()=>{
        const result = sqrt(9)
        expect(result)
    });
    test("Should Show the Biggest Number", ()=>{
        const result = max(9, 10, 11, 4)
        expect(result)
    });
});

