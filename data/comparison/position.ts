"use server";
import { getYearData } from "../helpers/year-data";
import { AvailableYear, Series } from "../types";
import { getAverage } from "../helpers/utils";

export type PositionComparison = {
  scatter: Series;
  average: {
    value: number;
    name: string;
    count: number;
  };
  familyAverage?: {
    value: number;
    name: string;
    count: number;
  };
};

export default async function getPositionComparison(
  year: AvailableYear,
  userPosition: string
): Promise<PositionComparison> {
  const yearData = getYearData(year);
  let average, familyAverage;
  const userFamily = yearData.find(
    (row) => row.position === userPosition && row.positionFamily !== "Other"
  )?.positionFamily;
  let scatterData, positionName;
  const positionData = yearData.filter((row) => row.position === userPosition);
  if (userFamily) {
    const familyData = yearData.filter((row) => row.positionFamily == userFamily);
    scatterData = familyData;
    positionName = userFamily;
    average = {
      value: getAverage(positionData),
      name: userPosition,
      count: positionData.length,
    };
    familyAverage = {
      value: getAverage(familyData),
      name: userFamily,
      count: familyData.length,
    };
  } else {
    scatterData = positionData;
    positionName = userPosition;
    average = {
      value: getAverage(positionData),
      name: positionName,
      count: positionData.length,
    };
  }
  return {
    scatter: [
      {
        name: `Other ${positionName}`,
        data: scatterData.map((row, index) => ({
          id: `${positionName}-${index}`,
          name: row.position,
          y: row.grossSalary,
          x: 0,
        })),
      },
    ],
    average,
    familyAverage,
  };
}
