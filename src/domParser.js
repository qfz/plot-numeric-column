const { JSDOM } = require("jsdom");

const getDOMFrom = async (url) => {
  const dom = await JSDOM.fromURL(url);

  return dom;
};

module.exports = {
  getDOMFrom,
};
