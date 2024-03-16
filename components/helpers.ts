import { data2023, units, names, NumericDimension } from "@/data";

export function getCredits(year: 2023 | 2024) {
  // TODO: add 2024
  return {
    text: "Data from Handpicked 2023 Salary Survey",
    href: "https://handpickedberlin.com/report-on-berlin-salary-trends-survey-june-2023/",
  };
}

export function getSeries(
  year: 2023 | 2024,
  dimensionX: NumericDimension,
  dimensionY: NumericDimension
) {
  return {
    name: `${year} Salary Survey`,
    data: data2023
      .map((row) => [row[dimensionX], row[dimensionY]])
      .filter((dataPoint) => {
        return typeof dataPoint[0] === "number" && typeof dataPoint[1] === "number";
      }),
  };
}

export function getTooltipFormat(dimensionX: NumericDimension, dimensionY: NumericDimension) {
  const formatX = `<strong>${names[dimensionX]}:</strong> {point.x} ${units[dimensionX]}`;
  const formatY = `<strong>${names[dimensionY]}:</strong> {point.y} ${units[dimensionY]}`;
  return `${formatX} <br /> ${formatY}`;
}
