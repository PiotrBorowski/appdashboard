import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useQuery } from "react-query";
import { fetchAllApps } from "../../services/apps";
import { AppInfo } from "../../types/apps";

type AppsContextValue = {
  apps: AppInfo[];
  selectedAppsIds: string[];
  isLoading: boolean;
};

const AppsContext = createContext<AppsContextValue>({
  apps: [],
  selectedAppsIds: [],
  isLoading: true,
});

const AppsContextProvider = ({ children }: { children: ReactNode }) => {
  const [apps, setApps] = useState<AppInfo[]>([]);
  const [selectedAppsIds, setSelectedAppsIds] = useState<string[]>([]);

  const { data, isLoading } = useQuery("AllApps", fetchAllApps);

  useEffect(() => {
    if (data) {
      setApps(data);
    }
  }, [data]);

  const contextValue: AppsContextValue = {
    apps,
    selectedAppsIds,
    isLoading,
  };

  return (
    <AppsContext.Provider value={contextValue}>{children}</AppsContext.Provider>
  );
};

function useAppsContext() {
  const appsContext = useContext(AppsContext);

  return appsContext;
}

export { AppsContext, AppsContextProvider, useAppsContext };
