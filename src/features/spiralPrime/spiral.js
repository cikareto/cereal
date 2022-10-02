/**
 * 1 2 4 6 9 12 16 20 25...
 * find maximum multiplies of size
 * */
export const findDimension = (size) => {
  if (size <= 2) return [null, size];

  const roundedSqrt = Math.round(Math.sqrt(size));
  return roundedSqrt * roundedSqrt >= size
    ? [roundedSqrt, roundedSqrt]
    : [roundedSqrt, roundedSqrt + 1];
};

export const findCentroid = (x, y) => {
  if (!x) return [0, null];

  if (x % 2 !== 0) {
    const point = calculateXAxis(x + 1) - 1;
    return [point, point];
  }

  const pointX = calculateXAxis(x);
  return [pointX, y === x ? pointX - 1 : pointX];
};

const calculateXAxis = (x) => x / 2;
