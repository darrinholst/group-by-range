# group-by-range

## Usage

``` javascript
const { groupByRange } = require("group-by-range");

const collection = [
  {widgets: 1},
  {widgets: 3},
  {widgets: 7},
  {widgets: 2},
  {widgets: 8},
  {widgets: 2},
]

const grouped = groupByRange(collection, [0, 5, 10], 'widgets');

/*
{
  '0,5': [ { widgets: 1 }, { widgets: 3 }, { widgets: 2 }, { widgets: 2 } ],
  '5,10': [ { widgets: 7 }, { widgets: 8 } ]
}
*/

```