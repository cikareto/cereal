import { isPrime, getPrime } from "./prime";

describe("spiralPrime/prime", () => {
  describe("isPrime", () => {
    const testCases = [
      { number: 1, expected: false },
      { number: 2, expected: true },
      { number: 3, expected: true },
      { number: 4, expected: false },
      { number: 5, expected: true },
      { number: 47, expected: true },
      { number: 51, expected: false },
      { number: 347, expected: true },
      { number: 2011, expected: true },
      { number: 2013, expected: false },
    ];

    testCases.forEach(({ number, expected }) => {
      test(`${number} should ${expected ? "be prime" : "not be prime"}`, () => {
        expect(isPrime(number)).toBe(expected);
      });
    });
  });

  describe("getPrime", () => {
    const testCases = [
      { size: 1, lastNumber: 2 },
      { size: 2, lastNumber: 3 },
      { size: 5, lastNumber: 11 },
      { size: 10, lastNumber: 29 },
      { size: 25, lastNumber: 97 },
      { size: 100, lastNumber: 541 },
    ];

    test.each(testCases)(
      "prime number at $size should be $lastNumber",
      ({ size, lastNumber }) => {
        const primes = getPrime(size);
        expect(primes.length).toBe(size);
        expect(primes[size - 1]).toBe(lastNumber);
      }
    );
  });
});
