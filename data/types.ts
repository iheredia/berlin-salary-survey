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

export type HistogramSerie = {
  name: string;
  data: {
    id: string;
    y: number;
  }[];
};

export type HistogramSeries = HistogramSerie[];

export type HistogramCategories = string[];

export type HistogramBuckets = number[];

export type UserComparisonData = Partial<{
  grossSalary: {
    percentile: number;
    histogramBuckets: HistogramBuckets;
    histogramCategories: HistogramCategories;
    histogramSeries: HistogramSeries;
  };
  gender: {
    percentile: number;
    histogramSeries: HistogramSeries;
    averages: {
      male: number;
      female: number;
    };
  };
  industry: {
    averages: Record<string, number>;
  };
}>;
