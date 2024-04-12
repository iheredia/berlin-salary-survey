import { AvailableYear } from "./types";
import uniqueValues2023 from "./2023-values.json";
import uniqueValues2024 from "./2024-values.json";

export function getValues(year: AvailableYear) {
  if (year === 2024) return uniqueValues2024;
  return uniqueValues2023;
}
