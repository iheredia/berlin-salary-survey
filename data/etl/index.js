const csv = require("csvtojson");
const path = require("path");
const { parseRow, writeJson, getUniqueValues } = require("./utils");

csv({
  delimiter: ",",
})
  .fromFile(path.join(__dirname, "./2023.csv"))
  .then((rawData) => {
    console.log(`Raw count: ${rawData.length}`);

    const cleanData = rawData
      .map(parseRow)
      .filter((row) => row.inBerlin || row.workingRemotelyForBerlin)
      .filter((row) => !isNaN(row.grossSalary));

    console.log(`Clean count: ${cleanData.length}`);
    writeJson(cleanData, "../2023.json");
    writeJson(getUniqueValues(cleanData), "../2023-values.json");
  });
