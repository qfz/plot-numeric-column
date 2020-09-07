const { getLongestNumber } = require("./numericParser");
const { compact } = require("lodash");

const getNumericDataListFrom = (dom) => {
  const tableNode = getFirstTableInDOM(dom);
  const dataRows = getAllDataRows(tableNode);
  const numericDataList = getNumericDataList(dataRows);

  return numericDataList;
};

const getFirstTableInDOM = (dom) => {
  return dom.window.document.querySelector("table");
};

const getAllDataRows = (tableNode) => {
  const nodeList = tableNode.querySelector("tbody").querySelectorAll("tr");

  return nodeList;
};

const getNumericDataList = (rows) => {
  const rowArray = Array.from(rows);
  const lastRow = rowArray[rows.length - 1];
  const index = getNumericColumnIndex(lastRow);

  const numericDataList = rowArray.map((row) => {
    const dataCells = Array.from(row.querySelectorAll("td"));
    if (dataCells.length === 0) {
      return "";
    }
    const cellData = dataCells[index];

    return getLongestNumber(cellData.innerHTML);
  });

  const numericDataListWithoutFalseyValues = compact(
    numericDataList.map((n) => Number(n))
  );

  return numericDataListWithoutFalseyValues;
};

const getNumericColumnIndex = (row) => {
  if (!row) {
    return 0;
  }

  return Array.from(row.querySelectorAll("td")).findIndex((node) => {
    const longestNumeric = getLongestNumber(node.innerHTML);

    return longestNumeric !== undefined;
  });
};

module.exports = {
  getNumericDataListFrom,
};
