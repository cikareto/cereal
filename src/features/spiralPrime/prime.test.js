import { isPrime, getPrime } from "./prime";

describe("spiralPrime/prime", () => {
  describe("isPrime", () => {
    // number: isPrime
    const testCases = {
      1: false,
      2: true,
      3: true,
      4: false,
      5: true,
      47: true,
      51: false,
      347: true,
      2011: true,
      2013: false,
    };

    Object.entries(testCases).map(([num, res]) => {
      test(`${num} should not be ${res}`, () => {
        expect(isPrime(+num)).toBe(res);
      });
    });
  });

  describe("getPrime", () => {
    // size: last number
    const testCases = {
      1: 2,
      2: 3,
      5: 11,
      10: 29,
      25: 97,
      100: 541,
    };

    Object.entries(testCases).map(([size, lastNum]) => {
      test(`prime number at ${size} should be ${lastNum}`, () => {
        const primes = getPrime(+size);
        expect(primes.length).toBe(+size);
        expect(primes[size - 1]).toBe(lastNum);
      });
    });
  });
});
