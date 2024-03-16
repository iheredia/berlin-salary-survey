const csv = require("csvtojson");
const path = require("path");
const fs = require("fs");
const stringify = require("json-stable-stringify");

csv({
  delimiter: ",",
  noheader: true,
})
  .fromFile(path.join(__dirname, "./2023.csv"))
  .then((rawData) => {
    console.log(`Raw count: ${rawData.length}`);

    const cleanData = rawData
      .map((row) => {
        return {
          inBerlin: row.field2 === "Yes, I'm physically working in Berlin.",
          workingRemotelyForBerlin:
            row.field2 === "Yes, I'm working remotely for a Berlin-based organization.",

          gender: row.field3,
          age: row.field4,
          education: row.field5,
          experience: row.field6,
          citizenship: row.field7,
          organizationType: row.field8,
          industry: row.field9,
          companySize: row.field10,
          yearsInCurrentCompany: row.field11,
          position: row.field12,
          role: row.field13,
          yearsInCurrentPosition: row.field14,

          isFullTime: row.field15 === "Full-time",
          isPartTime: row.field15 === "Part-time",
          isFreelance: row.field15 === "Contract/Freelance",

          hoursPerWeek: row.field16,
          grossSalary: row.field17,
          bonus: row.field18,
          equity: row.field19,
          salaryRaise: row.field20,
        };
      })
      .filter((row) => row.inBerlin || row.workingRemotelyForBerlin);

    console.log(`Clean count: ${cleanData.length}`);
    const cleanDataString = stringify(cleanData, { space: "  " });
    fs.writeFileSync(path.join(__dirname, "./2023.json"), cleanDataString);
  });
