import { SurveyData, NumericDimension } from "./types";

export function getScatterSeries(
  yearData: SurveyData,
  dimensionX: NumericDimension,
  dimensionY: NumericDimension
) {
  const data = yearData
    .map((row) => [row[dimensionX], row[dimensionY]])
    .filter((dataPoint) => {
      return typeof dataPoint[0] === "number" && typeof dataPoint[1] === "number";
    });
  return { data };
}
