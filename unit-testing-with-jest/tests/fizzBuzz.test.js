const fizzBuzz = require('../fizzBuzz').fizzBuzz;

//Testing FizzBuzz
describe("FizzBuzz - ", () => {
    it("should throw exception", () => {
        const args=['s',null,true,false,undefined,{id:1},NaN,5.5];
        args.forEach((element)=>{expect(() => fizzBuzz(element)).toThrow();})
    });

    it("should return Fizz", () => {
        const args=[3,9,18,27,-3];
        args.forEach((element)=>{expect(fizzBuzz(element)).toBe('Fizz');})
    });

    it("should return Buzz", () => {
        const args=[5,10,20,25,-5];
        args.forEach((element)=>{expect(fizzBuzz(element)).toBe('Buzz');})
    });

    it("should return FizzBuzz", () => {
        const args=[15,30,45,60,0];
        args.forEach((element)=>{expect(fizzBuzz(element)).toBe('FizzBuzz');})
    });
  });