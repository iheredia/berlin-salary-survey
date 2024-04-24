"use server";
import getValues from "../helpers/static-values";
import { getYearData } from "../helpers/year-data";
import { AvailableYear } from "../types";
import { getAverage } from "../helpers/utils";

export type IndustryComparison = {
  averages: Record<string, number>;
};

export default async function getIndustryComparison(
  year: AvailableYear
): Promise<IndustryComparison> {
  const yearData = getYearData(year);
  const averages: Record<string, number> = {};
  const industries = getValues(year).industry.filter(
    (industry) => industry !== "Prefer not to say"
  );
  industries.forEach((industry) => {
    const industryData = yearData.filter((row) => row.industry === industry);
    averages[industry] = getAverage(industryData);
  });
  return { averages };
}
