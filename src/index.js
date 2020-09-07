const { getNumericDataListFrom } = require("./tableParser");
const { getDOMFrom } = require("./domParser");
const { plotChart } = require("./charting");
const fs = require("fs");
const { noop } = require("lodash");

const getURL = () => {
  // The third element in the argv array is the user given URL
  return process.argv[2];
};

const run = async () => {
  const url = getURL();
  const dom = await getDOMFrom(url);
  const dataList = getNumericDataListFrom(dom);
  const chart = plotChart(dataList);

  fs.writeFile("chart.txt", chart, "utf8", noop);
};

run();
