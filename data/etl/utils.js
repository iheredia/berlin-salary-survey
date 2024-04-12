const fs = require("fs");
const path = require("path");
const stringify = require("json-stable-stringify");

const ignoreKeysForUniqueValues = ["bonus", "equity", "grossSalary", "hoursPerWeek"];

function sanitizeString(val) {
  if (val === "na" || val === "") return "Prefer not to say";
  return val;
}

function sanitizeInt2023(stringVal) {
  return parseInt(stringVal.replace(/\D/g, "")) || 0;
}

function sanitizeInt2024(stringVal) {
  return Math.round(parseFloat(stringVal)) || 0;
}

const inBerlinValues = [
  "Yes, I'm physically working in Berlin.",
  "Berlin: I work in Berlin (hybrid or on-site)",
];
const remoteValues = [
  "Yes, I'm working remotely for a Berlin-based organization.",
  "Berlin: I work remotely for a Berlin-based organization",
];

function parseRow(row, year) {
  const sanitizeInt = year === 2024 ? sanitizeInt2024 : sanitizeInt2023;

  const parsedRow = {
    inBerlin: inBerlinValues.includes(row.inBerlin),
    workingRemotelyForBerlin: remoteValues.includes(row.inBerlin),

    gender: sanitizeString(row.gender),
    age: sanitizeString(row.age),
    education: sanitizeString(row.education),
    experience: sanitizeString(row.experience),
    citizenship: sanitizeString(row.citizenship),
    organizationType: sanitizeString(row.organizationType),
    industry: sanitizeString(row.industry),
    companySize: sanitizeString(row.companySize),
    yearsInCurrentCompany: sanitizeString(row.yearsInCurrentCompany),
    position: sanitizeString(row.position),
    positionFamily: sanitizeString(row.positionFamily) || null,
    role: sanitizeString(row.role),
    yearsInCurrentPosition: sanitizeString(row.yearsInCurrentPosition),

    workingSchedule: sanitizeString(row.workingSchedule),
    isFullTime: row.workingSchedule === "Full-time",
    isPartTime: row.workingSchedule === "Part-time",
    isFreelance: row.workingSchedule === "Contract/Freelance",

    hoursPerWeek: parseFloat(row.hoursPerWeek.replace(",", ".")),
    grossSalary: sanitizeInt(row.grossSalary),
    bonus: sanitizeInt(row.bonus),
    equity: sanitizeInt(row.equity),
    salaryRaise: sanitizeString(row.salaryRaise),
  };

  return parsedRow;
}

function writeJson(dataObj, filePath) {
  const dataObjString = stringify(dataObj, { space: "  " });
  fs.writeFileSync(path.join(__dirname, filePath), dataObjString);
}

function getUniqueValues(data) {
  const uniqueValues = {};
  data.forEach((row) =>
    Object.keys(row).forEach((key) => {
      if (ignoreKeysForUniqueValues.includes(key)) return;
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

module.exports = { parseRow, writeJson, getUniqueValues };
