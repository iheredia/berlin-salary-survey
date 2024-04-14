"use server";
import data2023 from "@/data/2023.json";
import data2024 from "@/data/2024.json";
import { calculatePercentile, getAverage, isIndividualContributor, isPeopleManager } from "./utils";
import { histogramCategories, getSeries, histogramBuckets } from "./histogram";
import { AvailableYear, SurveyData, User, UserComparisonData } from "./types";
import { getValues } from "./static-values";

function getYearData(year: AvailableYear): SurveyData {
  if (year === 2023) {
    return data2023;
  }
  return data2024;
}

export default async function getData(
  year: AvailableYear,
  user: User
): Promise<UserComparisonData> {
  const yearData = getYearData(year);
  const data: UserComparisonData = {};

  if (!user.grossSalary) return {};

  data.grossSalary = {
    percentile: calculatePercentile(yearData, user.grossSalary),
    histogramCategories,
    histogramBuckets,
    histogramSeries: [getSeries(yearData, "grossSalary")],
  };

  if (user.gender) {
    const userGenderSalaries = yearData.filter((row) => row.gender === user.gender);
    const maleSalaries = yearData.filter((row) => row.gender === "Male");
    const femaleSalaries = yearData.filter((row) => row.gender === "Female");
    data.gender = {
      percentile: calculatePercentile(userGenderSalaries, user.grossSalary),
      histogramSeries: [getSeries(femaleSalaries, "Female"), getSeries(maleSalaries, "Male")],
      averages: {
        male: getAverage(maleSalaries),
        female: getAverage(femaleSalaries),
      },
    };
  }

  if (user.industry) {
    const averages: Record<string, number> = {};
    const industries = getValues(year).industry.filter(
      (industry) => industry !== "Prefer not to say"
    );
    industries.forEach((industry) => {
      const industryData = yearData.filter((row) => row.industry === industry);
      averages[industry] = getAverage(industryData);
    });
    data.industry = { averages };
  }

  if (user.role) {
    const allRolesData = yearData.filter((row) => row.role !== "Prefer not to say");
    const individualContributorData = allRolesData.filter(isIndividualContributor);
    const peopleManagerData = allRolesData.filter(isPeopleManager);
    const userRoleData = isIndividualContributor(user)
      ? individualContributorData
      : peopleManagerData;
    data.role = {
      percentile: calculatePercentile(userRoleData, user.grossSalary),
      histogramSeries: [
        getSeries(individualContributorData, "Individual contributor"),
        getSeries(peopleManagerData, "Team Manager / Lead"),
      ],
      averages: {
        peopleManager: getAverage(peopleManagerData),
        individualContributor: getAverage(individualContributorData),
      },
    };
  }

  if (user.position) {
    let average, familyAverage;
    const userFamily = yearData.find(
      (row) => row.position === user.position && row.positionFamily !== "Other"
    )?.positionFamily;
    let scatterData, positionName;
    const positionData = yearData.filter((row) => row.position === user.position);
    if (userFamily) {
      const familyData = yearData.filter((row) => row.positionFamily == userFamily);
      scatterData = familyData;
      positionName = userFamily;
      average = {
        value: getAverage(positionData),
        name: user.position,
        count: positionData.length,
      };
      familyAverage = {
        value: getAverage(familyData),
        name: userFamily,
        count: familyData.length,
      };
    } else {
      scatterData = positionData;
      positionName = user.position;
      average = {
        value: getAverage(positionData),
        name: positionName,
        count: positionData.length,
      };
    }
    data.position = {
      scatter: [
        {
          name: `Other ${positionName}`,
          data: scatterData.map((row, index) => ({
            id: `${positionName}-${index}`,
            name: row.position,
            y: row.grossSalary,
            x: 0,
          })),
        },
      ],
      average,
      familyAverage,
    };
  }

  return data;
}
