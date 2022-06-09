const range = require("lodash.range");
const { groupByRange } = require("..");

describe("group-by-range", () => {
  const key = "rate";
  const buildItem = (value) => ({ [key]: value });

  it("should group by a range", () => {
    const collection = range(20).map(buildItem);
    const rangeToGroupBy = [0, 5, 10, 15, 20];

    expect(groupByRange(collection, rangeToGroupBy, key)).toEqual({
      "0,5": range(0, 5).map(buildItem),
      "5,10": range(5, 10).map(buildItem),
      "10,15": range(10, 15).map(buildItem),
      "15,20": range(15, 20).map(buildItem),
    });
  });

  it("should group by a range range when one falls below the range minimum", () => {
    const collection = range(5).map(buildItem);
    const rangeToGroupBy = [1, 5];

    expect(groupByRange(collection, rangeToGroupBy, key)).toEqual({
      "-Infinity,1": [buildItem(0)],
      "1,5": range(1, 5).map(buildItem),
    });
  });

  it("should group by a range range when one falls above the range maximum", () => {
    const collection = range(6).map(buildItem);
    const rangeToGroupBy = [0, 5];

    expect(groupByRange(collection, rangeToGroupBy, key)).toEqual({
      "0,5": range(0, 5).map(buildItem),
      "5,Infinity": [buildItem(5)],
    });
  });
});
