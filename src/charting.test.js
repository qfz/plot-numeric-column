const { plotChart } = require("./charting");
const { isString } = require("lodash");

describe(`Function: ${plotChart.name}`, () => {
  it("creates ascii chart", () => {
    const mockedData = [1, 2, 3];

    const result = plotChart(mockedData);

    expect(isString(result)).toBe(true);
  });
});
