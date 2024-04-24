"use client";
import { createContext } from "react";
import { AvailableYear, User } from "@/data/types";
import { UserComparison } from "@/data";

type AppContextType = {
  year: AvailableYear;
  user: User;
  setUser: CallableFunction;
  data: UserComparison;
  setData: CallableFunction;
  loading: boolean;
  embed: boolean;
};

const AppContext = createContext<AppContextType>({
  year: 2023,
  user: {},
  setUser: () => {},
  data: {},
  setData: () => {},
  loading: false,
  embed: false,
});

export default AppContext;
