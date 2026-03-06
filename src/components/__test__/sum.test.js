import sum from "../sum";

test("Sum funciton calculates the sum of two numbers", () => {

    const result = sum(1,3);
    
    // Assertion
    expect(result).toBe(4);

});