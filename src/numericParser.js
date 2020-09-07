const { maxBy, size } = require("lodash");

/** This regular express matches any number, with or without commas or fullstops. */
const isNumberRegex = /[\d\.\,]+/gi;

/** This function gets the longest number (in terms of character length) out of a string. */
const getLongestNumber = (str) => {
  const matches = str.match(isNumberRegex);

  return maxBy(matches, size);
};

module.exports = {
  getLongestNumber,
};
