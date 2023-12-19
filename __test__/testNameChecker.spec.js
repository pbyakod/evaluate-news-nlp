// Import the js file to test
import { checkForName } from "../src/client/js/nameChecker"

describe("Testing the input text", () => {
    test.each`
      inputText           | expectedResult
      ${''}               | ${true}
      ${'Hello, world!'}  | ${false}
    `('returns $expectedResult for input: $inputText', ({ inputText, expectedResult }) => {
      const result = checkForName(inputText);
      expect(result).toBe(expectedResult);
    });
});
  