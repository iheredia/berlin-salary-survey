const fs = require("fs");
const path = require("path");
const stringify = require("json-stable-stringify");

function writeJson(dataObj, filePath) {
  const dataObjString = stringify(dataObj, { space: "  " });
  fs.writeFileSync(path.join(__dirname, filePath), dataObjString);
}

function getUniqueValues(data) {
  const ignoreKeys = ["bonus", "equity", "grossSalary", "hoursPerWeek"];

  const uniqueValues = {};
  data.forEach((row) =>
    Object.keys(row).forEach((key) => {
      if (ignoreKeys.includes(key)) return;
      if (!uniqueValues[key]) {
        uniqueValues[key] = new Set();
      }
      uniqueValues[key].add(row[key]);
    })
  );

  // Convert sets into arrays, for future serialization into json
  Object.keys(uniqueValues).forEach((key) => {
    uniqueValues[key] = [...uniqueValues[key]].sort();
  });
  return uniqueValues;
}

module.exports = { writeJson, getUniqueValues };
