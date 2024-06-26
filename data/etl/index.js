const csv = require("csvtojson");
const path = require("path");
const { parseRow, writeJson, getUniqueValues } = require("./utils");

function processYear(year) {
  csv({
    delimiter: ",",
  })
    .fromFile(path.join(__dirname, `./${year}.csv`))
    .then((rawData) => {
      console.log(`Raw count: ${rawData.length}`);

      const cleanData = rawData
        .map((row) => parseRow(row, year))
        .filter((row) => row.inBerlin || row.workingRemotelyForBerlin)
        .filter((row) => !isNaN(row.grossSalary))
        .sort((a, b) => {
          if (a.grossSalary !== b.grossSalary) return a.grossSalary - b.grossSalary;
          return a.position.localeCompare(b.position);
        });

      console.log(`Clean count: ${cleanData.length}`);
      writeJson(cleanData, `../${year}.json`);
      writeJson(getUniqueValues(cleanData), `../${year}-values.json`);
    });
}

processYear(2023);
processYear(2024);
