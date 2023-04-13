import CodersArray from "./CodersArray";

describe("Given a class CodersArray that simulates six array methods and properties", () => {
  describe("When it recive 5, 8,", () => {
    test("Then it should return 4", () => {
      const values = ("hello", true, 5, "bye");
      const expectedResult = 4;

      const valuesLength = new ValueLength(values);

      expect(expectedResult).toBe(valuesLength);
    });
  });
});
