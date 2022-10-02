import { findDimension, findCentroid }  from "./spiral";

describe("spiralPrime/spiral", () => {
  describe("findDimension", () => {
    // size: [x, y]
    const testCases = {
      1: [null, 1],
      2: [null, 2],
      3: [2, 2],
      4: [2, 2],
      5: [2, 3],
      6: [2, 3],
      7: [3, 3],
      9: [3, 3],
      10: [3, 4],
      14: [4, 4],
      25: [5, 5],
    };

    Object.entries(testCases).map(([size, dimension]) => {
      test(`spiral size ${size} should have [${dimension[0]}, ${dimension[1]}] dimension`, () => {
        expect(findDimension(+size)).toStrictEqual(dimension);
      });
    });
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

    testCases.map(({dimension, centroid}) => {
      test(`centroid of spiral [${dimension}] should be [${centroid}]`, () => {
        expect(findCentroid(dimension[0], dimension[1])).toStrictEqual(centroid)
      })
    })
  });
});
