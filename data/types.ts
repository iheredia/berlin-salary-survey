"use server";

import data2023 from "@/data/2023.json";

type NumericKeys<T> = {
  [K in keyof T]: T[K] extends number ? K : never;
}[keyof T];

type BooleanKeys<T> = {
  [K in keyof T]: T[K] extends boolean ? K : never;
}[keyof T];

type StringKeys<T> = {
  [K in keyof T]: T[K] extends String ? K : never;
}[keyof T];

export type SurveyData = typeof data2023;
export type DataPoint = SurveyData[number];
export type User = Partial<DataPoint>;

export type Dimension = keyof DataPoint;
export type NumericDimension = NumericKeys<DataPoint>;
export type BooleanDimension = BooleanKeys<DataPoint>;
export type StringDimension = StringKeys<DataPoint>;

export type AvailableYear = 2023 | 2024;

export type HistogramSeries = {
  data: {
    id: string;
    y: number;
  }[];
};

export type HistogramCategories = string[];

export type HistogramBuckets = number[];

export type UserComparisonData = Partial<
  Record<
    Dimension,
    {
      percentile: number;
      histogramSeries: HistogramSeries;
      histogramCategories: HistogramCategories;
      histogramBuckets: HistogramBuckets;
    }
  >
>;
