import CodersArray from "./CodersArray";

describe("Given a class CodersArray that simulates six array methods and properties", () => {
  describe("When it recive 5, 8", () => {
    test("Then it should return 2", () => {
      const firstValue = 5;
      const secondValue = 8;
      const expectedResult = 2;

      const valuesLength = new CodersArray(firstValue, secondValue).length;

      expect(expectedResult).toBe(valuesLength);
    });
  });
});
