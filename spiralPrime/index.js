const isPrime = (num) => {
  if (num > 2 && num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return num > 1;
};

const getPrime = (size) => {
  if (size === 0) return [];

  let count = 0,
    num = 3;
  const prime = [2];
  while (count < size - 1) {
    if (isPrime(num)) {
      prime.push(num);
      count++;
    }
    num += 2;
  }

  return prime;
};

/**
 * 1 2 4 6 9 12 16 20 25...
 * find maximum multiplies of size
 * */
const findDimension = (size) => {
  if (size <= 2) return [size, null];

  const roundedSqrt = Math.round(Math.sqrt(size));
  return roundedSqrt * roundedSqrt >= size
    ? [roundedSqrt, roundedSqrt]
    : [roundedSqrt + 1, roundedSqrt];
};

const calculateXAxis = (x) => x / 2;

const findSpiralCentroid = (y, x) => {
  if (!x) return [0, null];

  if (x % 2 !== 0) {
    const point = calculateXAxis(x + 1) - 1;
    return [point, point];
  }

  const pointX = calculateXAxis(x);
  return [pointX, y === x ? pointX - 1 : pointX];
};

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
  const [row, col] = findDimension(size);

  if (!col) {
    return primes;
  }

  const sorted = Array.from(Array(col), () => new Array(row));
  const direction = makeDirection();

  let [y, x] = findSpiralCentroid(row, col);

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

const getSpiralPrime = (size) => {
  const primes = getPrime(size);
  return sortSpiralPrime(primes, size);
};

