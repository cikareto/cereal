import { printSpiralPrime } from "./index";

describe("spiralPrime/index", () => {
  const sizes = [1, 2, 3, 25, 27, 200];

  test.each(sizes)("$1 primes", (size) => {
    const primes = printSpiralPrime(size);
    console.log(primes);
  });
});
