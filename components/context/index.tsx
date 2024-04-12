"use client";
import { createContext } from "react";
import { AvailableYear, User, UserComparisonData } from "@/data/types";

type AppContextType = {
  year: AvailableYear;
  user: User;
  setUser: CallableFunction;
  data: UserComparisonData;
  loading: boolean;
  embed: boolean;
};

const AppContext = createContext<AppContextType>({
  year: 2023,
  user: {},
  setUser: () => {},
  data: {},
  loading: false,
  embed: false,
});

export default AppContext;
