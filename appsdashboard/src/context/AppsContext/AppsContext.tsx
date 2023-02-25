import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useQuery } from "react-query";
import { fetchAllApps } from "../../services/apps";
import { AppInfo } from "../../types/apps";

type AppsContextValue = {
  apps: AppInfo[];
  selectedAppsIds: number[];
  isLoading: boolean;
  selectApp: (id: number) => void;
  removeSelectedApp: (id: number) => void;
};

const AppsContext = createContext<AppsContextValue>({
  apps: [],
  selectedAppsIds: [],
  isLoading: true,
  selectApp: () => null,
  removeSelectedApp: () => null,
});

const AppsContextProvider = ({ children }: { children: ReactNode }) => {
  const [apps, setApps] = useState<AppInfo[]>([]);
  const [selectedAppsIds, setSelectedAppsIds] = useState<number[]>([]);

  const { data, isLoading } = useQuery("AllApps", fetchAllApps);

  useEffect(() => {
    if (data) {
      setApps(data);
    }
  }, [data]);

  const selectApp = useCallback((id: number) => {
    setSelectedAppsIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, []);

  const removeSelectedApp = useCallback((id: number) => {
    setSelectedAppsIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : prev
    );
  }, []);

  const contextValue: AppsContextValue = {
    apps,
    selectedAppsIds,
    isLoading,
    selectApp,
    removeSelectedApp,
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
