const { plot } = require("asciichart");

const plotChart = (data) => {
  const config = {
    height: 20,
  };
  return plot(data, config);
};

module.exports = {
  plotChart,
};
