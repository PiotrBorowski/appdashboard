import React, { useMemo } from "react";
import { useAppsContext } from "../../context/AppsContext/AppsContext";
import AppItemWithDetails from "../AppItemWithDetails/AppItemWithDetails";

function AppsList() {
  const { apps, selectApp } = useAppsContext();

  const items = useMemo(
    () =>
      apps.map((app) => {
        return (
          <AppItemWithDetails
            key={app.id}
            data={app}
            onWatchClick={selectApp}
            watchButtonLabel="WATCH"
          />
        );
      }),
    [apps, selectApp]
  );

  return (
    <table>
      <thead>
        <tr>
          <th>ALL APPS</th>
        </tr>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Company</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>{items}</tbody>
    </table>
  );
}

export default AppsList;
