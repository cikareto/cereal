const { getPrime } = require("./prime");
const spiral = require("./spiral");
const { printSpiral } = require("../utils/print");

const RIGHT = "R";
const TOP = "T";
const LEFT = "L";
const DOWN = "D";
const DIRECTIONS = [RIGHT, TOP, LEFT, DOWN];

const makeDirection = () => {
  let turnCounter = 0; // 1 or 2
  let stepCounter = 0;
  let step = 0;
  let directionIndex = -1;

  return {
    get() {
      const isDirectionChanged = step === stepCounter;
      if (isDirectionChanged) {
        if (turnCounter === 2 || stepCounter === 0) {
          turnCounter = 1;
          stepCounter++;
        } else {
          turnCounter++;
        }

        step = 1;
        directionIndex = directionIndex < 3 ? directionIndex + 1 : 0;
      } else {
        step++;
      }

      return DIRECTIONS[directionIndex];
    },
  };
};

const sortSpiralPrime = (primes, size) => {
  const [col, row] = spiral.findDimension(size);

  if (!col) {
    return primes;
  }

  const sorted = Array.from(Array(col), () => new Array(row));
  const direction = makeDirection();

  let [y, x] = spiral.findCentroid(col, row);

  primes.forEach((prime) => {
    sorted[y][x] = prime;

    switch (direction.get()) {
      case RIGHT:
        x += 1;
        break;
      case TOP:
        y -= 1;
        break;
      case LEFT:
        x -= 1;
        break;
      case DOWN:
        y += 1;
        break;
    }
  });

  return sorted;
};

const printSpiralPrime = (size) => {
  const primes = getPrime(size);
  const sortedPrimes = sortSpiralPrime(primes, size);

  return printSpiral(sortedPrimes, primes[size - 1])
};

module.exports = {
  printSpiralPrime,
};
