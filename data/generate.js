const csv = require("csvtojson");
const path = require("path");
const fs = require("fs");
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

csv({
  delimiter: ",",
  noheader: true,
})
  .fromFile(path.join(__dirname, "./2023.csv"))
  .then((rawData) => {
    console.log(`Raw count: ${rawData.length}`);

    const uniqueValues = {
      age: new Set(),
      gender: new Set(),
      education: new Set(),
    };

    const cleanData = rawData
      .map((row) => {
        return {
          inBerlin: row.field2 === "Yes, I'm physically working in Berlin.",
          workingRemotelyForBerlin:
            row.field2 === "Yes, I'm working remotely for a Berlin-based organization.",

          gender: row.field3,
          age: row.field4,
          education: row.field5 === "na" ? "Prefer not to say" : row.field5,
          experience: row.field6 === "na" ? "Prefer not to say" : row.field6,
          citizenship: row.field7 === "na" ? "Prefer not to say" : row.field7,
          organizationType: row.field8,
          industry: row.field9,
          companySize: row.field10 === "" ? "Prefer not to say" : row.field10,
          yearsInCurrentCompany: row.field11 === "na" ? "Prefer not to say" : row.field11,
          position: row.field12,
          role: row.field13 === "na" ? "Prefer not to say" : row.field13,
          yearsInCurrentPosition: row.field14 === "na" ? "Prefer not to say" : row.field14,

          workingSchedule: row.field15 === "na" ? "Prefer not to say" : row.field15,
          isFullTime: row.field15 === "Full-time",
          isPartTime: row.field15 === "Part-time",
          isFreelance: row.field15 === "Contract/Freelance",

          hoursPerWeek: parseFloat(row.field16.replace(",", ".")),
          grossSalary: parseInt(row.field17.replace(/\D/g, "")),
          bonus: parseInt(row.field18.replace(/\D/g, "")) || 0,
          equity: parseInt(row.field19.replace(/\D/g, "")) || 0,
          salaryRaise: row.field20 === "na" ? "Prefer not to say" : row.field20,
        };
      })
      .filter((row) => row.inBerlin || row.workingRemotelyForBerlin)
      .filter((row) => !isNaN(row.grossSalary));

    console.log(`Clean count: ${cleanData.length}`);
    writeJson(cleanData, "./2023.json");
    writeJson(getUniqueValues(cleanData), "./2023-values.json");
  });
