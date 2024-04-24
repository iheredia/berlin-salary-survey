"use server";

type NumericKeys<T> = {
  [K in keyof T]: T[K] extends number ? K : never;
}[keyof T];

type BooleanKeys<T> = {
  [K in keyof T]: T[K] extends boolean ? K : never;
}[keyof T];

type StringKeys<T> = {
  [K in keyof T]: T[K] extends String ? K : never;
}[keyof T];

export type DataPoint = {
  grossSalary: number;
  gender: string;
  industry: string;
  role: string;
  position: string;
  positionFamily: string | null;
  satisfaction: number | null;
  experience: string;
};
export type SurveyData = DataPoint[];

export type User = Partial<DataPoint>;

export type Dimension = keyof DataPoint;
export type NumericDimension = NumericKeys<DataPoint>;
export type BooleanDimension = BooleanKeys<DataPoint>;
export type StringDimension = StringKeys<DataPoint>;

export type AvailableYear = 2023 | 2024;

export type Serie = {
  name: string;
  color?: string;
  marker?: {
    radius?: number;
  };
  data: {
    id?: string;
    y: number;
    x?: number;
    color?: string;
  }[];
};

export type Series = Serie[];

export type HistogramCategories = string[];

export type HistogramBuckets = number[];
