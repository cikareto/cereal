import { findDimension, findCentroid } from "./spiral";

describe("spiralPrime/spiral", () => {
  describe("findDimension", () => {
    // size: [x, y]
    const testCases = [
      { size: 1, dimension: [null, 1] },
      { size: 2, dimension: [null, 2] },
      { size: 3, dimension: [2, 2] },
      { size: 4, dimension: [2, 2] },
      { size: 5, dimension: [2, 3] },
      { size: 6, dimension: [2, 3] },
      { size: 7, dimension: [3, 3] },
      { size: 9, dimension: [3, 3] },
      { size: 10, dimension: [3, 4] },
      { size: 14, dimension: [4, 4] },
      { size: 25, dimension: [5, 5] },
    ];

    test.each(testCases)(
      "spiral size $size should have $dimension dimension",
      ({ size, dimension }) => {
        expect(findDimension(size)).toStrictEqual(dimension);
      }
    );
  });

  describe("findCentroid", () => {
    const testCases = [
      {
        dimension: findDimension(1),
        centroid: [0, null],
      },
      {
        dimension: findDimension(2),
        centroid: [0, null],
      },
      {
        dimension: findDimension(4),
        centroid: [1, 0],
      },
      {
        dimension: findDimension(9),
        centroid: [1, 1],
      },
      {
        dimension: findDimension(36),
        centroid: [3, 2],
      },
      {
        dimension: findDimension(42),
        centroid: [3, 3],
      },
    ];

    test.each(testCases)(
      "centroid of spital $dimension should be $centroid",
      ({ dimension, centroid }) => {
        expect(findCentroid(dimension[0], dimension[1])).toStrictEqual(
          centroid
        );
      }
    );
  });
});
