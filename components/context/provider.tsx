"use client";
import { useState, ReactNode } from "react";
import { AvailableYear, User, UserComparisonData } from "@/data/types";
import AppContext from ".";
import getData from "@/data";

type AppProps = {
  children: ReactNode;
  year: AvailableYear;
};

const DEBUG = true;

export default function AppContextElement(props: AppProps) {
  const [user, _setUser] = useState<User>({});
  const [data, setData] = useState<UserComparisonData>({});
  const [loading, setLoadingData] = useState(false);

  const setUser = async (newUserValues: User) => {
    const newUser = { ...user, ...newUserValues };
    _setUser(newUser);
    if (DEBUG) console.log(newUser);
    setLoadingData(true);
    const newData = await getData(props.year, newUser);
    setData(newData);
    setLoadingData(false);
  };

  const value = {
    user,
    setUser,
    data,
    loading,
    year: props.year,
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
}
