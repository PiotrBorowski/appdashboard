import React from "react";
import { AppsList } from "../../components/AppsList";
import { WatchedAppsList } from "../../components/WatchedAppsList";
import { useAppsContext } from "../../context/AppsContext/AppsContext";

function Dashboard() {
  const { isLoading } = useAppsContext();

  if (isLoading) return <div>LOADING...</div>;

  return (
    <div>
      <AppsList />
      <WatchedAppsList />
    </div>
  );
}

export default Dashboard;
