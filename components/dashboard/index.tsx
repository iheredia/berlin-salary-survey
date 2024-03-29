"use client";
import { useState } from "react";
import { AvailableYear, User, UserComparisonData } from "@/data/types";

import SalarySection from "./sections/salary";
import CategorySection from "./sections/category-section";
import getData from "@/data";

const DEBUG = true;

export default function Dashboard(props: { year: AvailableYear }) {
  const [user, _setUser] = useState<User>({});
  const [data, setData] = useState<UserComparisonData>();
  const [loadingData, setLoadingData] = useState(false);

  const setUser = async (newUserValues: User) => {
    const newUser = { ...user, ...newUserValues };
    _setUser(newUser);
    if (DEBUG) console.log(newUser);
    setLoadingData(true);
    const newData = await getData(props.year, newUser);
    setData(newData);
    setLoadingData(false);
  };
  const { year } = props;

  return (
    <>
      <SalarySection
        year={year}
        user={user}
        setUser={setUser}
        loadingData={loadingData}
        data={data}
      />
      {user.grossSalary ? (
        <>
          <CategorySection
            year={year}
            user={user}
            setUser={setUser}
            loadingData={loadingData}
            data={data}
            dimension="age"
          />
          <CategorySection
            year={year}
            user={user}
            setUser={setUser}
            loadingData={loadingData}
            data={data}
            dimension="gender"
          />
          <CategorySection
            year={year}
            user={user}
            setUser={setUser}
            loadingData={loadingData}
            data={data}
            dimension="experience"
          />
          <CategorySection
            year={year}
            user={user}
            setUser={setUser}
            loadingData={loadingData}
            data={data}
            dimension="citizenship"
          />
          <CategorySection
            year={year}
            user={user}
            setUser={setUser}
            loadingData={loadingData}
            data={data}
            dimension="education"
          />
          <CategorySection
            year={year}
            user={user}
            setUser={setUser}
            loadingData={loadingData}
            data={data}
            dimension="organizationType"
          />
          <CategorySection
            year={year}
            user={user}
            setUser={setUser}
            loadingData={loadingData}
            data={data}
            dimension="industry"
          />
          <CategorySection
            year={year}
            user={user}
            setUser={setUser}
            loadingData={loadingData}
            data={data}
            dimension="role"
          />
        </>
      ) : null}

      {/* <HistogramChart year={year} dimension="bonus" /> */}
      {/* <HistogramChart year={year} dimension="equity" /> */}
      {/* <ScatterChart year={year} dimensionX="hoursPerWeek" dimensionY="grossSalary" /> */}
    </>
  );
}
