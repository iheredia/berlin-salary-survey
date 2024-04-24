import { calculatePercentile } from "../helpers/utils";
import { histogramCategories, getSeries, histogramBuckets } from "../helpers/histogram";
import { AvailableYear, UserGrossSalaryComparisonData } from "../types";
import { getYearData } from "../helpers/year-data";

export default async function getSalaryComparisonData(
  year: AvailableYear,
  userGrossSalary: number
): Promise<UserGrossSalaryComparisonData> {
  const yearData = getYearData(year);
  return {
    percentile: calculatePercentile(yearData, userGrossSalary),
    histogramCategories,
    histogramBuckets,
    histogramSeries: [getSeries(yearData, "grossSalary")],
  };
}
