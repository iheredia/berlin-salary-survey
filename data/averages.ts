import { Dimension, SurveyData } from "./types";

export function getAverage(yearData: SurveyData, dimension: Dimension, filterValue: string) {
  const filteredData = yearData.filter((row) => row[dimension] === filterValue);
  const average =
    filteredData.reduce((accum, row) => accum + row.grossSalary, 0) / filteredData.length;
  return Math.round(average);
}
