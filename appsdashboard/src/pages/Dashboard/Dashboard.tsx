import React from "react";
import { AppsList } from "../../components/AppsList";
import { useAppsContext } from "../../context/AppsContext/AppsContext";

function Dashboard() {
  const { isLoading } = useAppsContext();

  if (isLoading) return <div>LOADING...</div>;

  return (
    <div>
      <AppsList />
    </div>
  );
}

export default Dashboard;