import data2023 from "@/data/2023.json";
import { Dimension, units, names } from "@/data/types";

export function getCredits(year: 2023 | 2024) {
  // TODO: add 2024
  return {
    text: "Data from Handpicked 2023 Salary Survey",
    href: "https://handpickedberlin.com/report-on-berlin-salary-trends-survey-june-2023/",
  };
}

export function getSeries(year: 2023 | 2024, dimensionX: Dimension, dimensionY: Dimension) {
  return {
    name: `${year} Salary Survey`,
    data: data2023
      .map((row) => [row[dimensionX], row[dimensionY]])
      .filter((dataPoint) => {
        return (
          typeof dataPoint[0] === "number" &&
          !isNaN(dataPoint[0]) &&
          typeof dataPoint[1] === "number" &&
          !isNaN(dataPoint[1])
        );
      }),
  };
}

export function getTooltipFormat(dimensionX: Dimension, dimensionY: Dimension) {
  const formatX = `<strong>${names[dimensionX]}:</strong> {point.x} ${units[dimensionX]}`;
  const formatY = `<strong>${names[dimensionY]}:</strong> {point.y} ${units[dimensionY]}`;
  return `${formatX} <br /> ${formatY}`;
}
