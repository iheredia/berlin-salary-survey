import data2023 from "@/data/2023.json";

export type DataPoint = (typeof data2023)[number];
export type Dimension = keyof DataPoint;
