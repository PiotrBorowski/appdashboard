import React, { useMemo } from "react";
import { useAppsContext } from "../../context/AppsContext/AppsContext";
import AppItemWithDetails from "../AppItemWithDetails/AppItemWithDetails";

function WatchedAppsList() {
  const { selectedAppsIds, apps, removeSelectedApp } = useAppsContext();

  const items = useMemo(
    () =>
      selectedAppsIds.map((id) => {
        const app = apps.find((a) => a.id === id);

        if (!app) {
          return null;
        }

        return (
          <AppItemWithDetails
            key={app.id}
            data={app}
            onWatchClick={removeSelectedApp}
            watchButtonLabel={"REMOVE"}
          />
        );
      }),
    [apps, removeSelectedApp, selectedAppsIds]
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Watched Apps</th>
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

export default WatchedAppsList;
