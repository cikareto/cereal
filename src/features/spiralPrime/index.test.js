const { printSpiralPrime } = require("./index");

describe("spiralPrime/index", () => {
  const testCases = [
    {
      size: 1,
    },
    {
      size: 2,
    },
    {
      size: 3,
    },
    {
      size: 25,
    },
    {
      size: 27,
    },
    {
      size: 200,
    }
  ];

  testCases.map(({ size }) => {
    test(`${size} primes`, () => {
      const primes = printSpiralPrime(+size);
      console.log(primes);
    });
  });
});
