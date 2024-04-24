"use client";
import { useState, ReactNode } from "react";
import { AvailableYear, User } from "@/data/types";
import getData, { UserComparison } from "@/data";
import AppContext from ".";

type AppProps = {
  children: ReactNode;
  year: AvailableYear;
  embed: boolean;
};

const DEBUG = process.env.NODE_ENV === "development";

const logCopy = (obj: Object) => console.log(JSON.parse(JSON.stringify(obj)));

export default function AppContextElement(props: AppProps) {
  const [user, _setUser] = useState<User>({});
  const [data, _setData] = useState<UserComparison>({});
  const [loading, setLoadingData] = useState(false);

  const setData = async (newDataValues: UserComparison) => {
    _setData({ ...data, ...newDataValues });
  };

  const setUser = async (newUserValues: User) => {
    const newUser = { ...user, ...newUserValues };
    _setUser(newUser);
    if (DEBUG) logCopy({ newUser });
    setLoadingData(true);
    const newData = await getData(props.year, newUser);
    if (DEBUG) logCopy({ newData });
    setData(newData);
    setLoadingData(false);
  };

  const value = {
    user,
    setUser,
    data,
    setData,
    loading,
    year: props.year,
    embed: props.embed,
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
}
