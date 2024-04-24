import data2023 from "@/data/2023.json";
import data2024 from "@/data/2024.json";
import { AvailableYear, SurveyData } from "../types";

export function getYearData(year: AvailableYear): SurveyData {
  if (year === 2023) {
    return data2023;
  }
  return data2024;
}
