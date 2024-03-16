import { AvailableYear, data2023 } from "@/data";

export function getCredits(year: AvailableYear) {
  // TODO: add 2024
  return {
    text: "Data from Handpicked 2023 Salary Survey",
    href: "https://handpickedberlin.com/report-on-berlin-salary-trends-survey-june-2023/",
  };
}

export function getYearData(year: AvailableYear) {
  return data2023;
}
