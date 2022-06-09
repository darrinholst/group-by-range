const groupBy = require("lodash.groupby");
const get = require("lodash.get");

function groupByRange(collection, range, key) {
  return groupBy(collection, (item) =>
    [-Infinity, ...range].reduce((found, min, i, all) => {
      const max = get(all, `[${i + 1}]`, Infinity);
      if (found) return found;
      if (item[key] >= min && item[key] < max) return `${min},${max}`;
    }, null)
  );
}

module.exports = { groupByRange };
