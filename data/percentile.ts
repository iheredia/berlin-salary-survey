"use server";

import { SurveyData, User, Dimension } from "./types";

export function calculatePercentile(yearData: SurveyData, user: User, dimension: Dimension) {
  let count = 0;
  const filteredData = yearData.filter((row) => {
    if (dimension && dimension !== "grossSalary") {
      return row[dimension] === user[dimension];
    }
    return true;
  });
  filteredData.forEach((row) => {
    if (user.grossSalary) {
      if (row.grossSalary < user.grossSalary) {
        count++;
      } else if (row.grossSalary == user.grossSalary) {
        count += 0.5;
      }
    }
  });

  return Math.round((100 * count) / filteredData.length);
}
