import { calculatePercentile } from "../helpers/utils";
import { histogramCategories, getSeries, histogramBuckets } from "../helpers/histogram";
import { AvailableYear, HistogramBuckets, HistogramCategories, Series } from "../types";
import { getYearData } from "../helpers/year-data";

export type GrossSalaryComparison = {
  percentile: number;
  histogramBuckets: HistogramBuckets;
  histogramCategories: HistogramCategories;
  histogramSeries: Series;
};

export default async function getSalaryComparison(
  year: AvailableYear,
  userGrossSalary: number
): Promise<GrossSalaryComparison> {
  const yearData = getYearData(year);
  return {
    percentile: calculatePercentile(yearData, userGrossSalary),
    histogramCategories,
    histogramBuckets,
    histogramSeries: [getSeries(yearData, "grossSalary")],
  };
}
