import React, { useMemo } from "react";
import { useAppsContext } from "../../context/AppsContext/AppsContext";
import { AppListItem } from "../AppListItem";

function AppsList() {
  const { apps } = useAppsContext();

  const items = useMemo(
    () =>
      apps.map((app) => {
        return <AppListItem data={app} />;
      }),
    [apps]
  );

  return (
    <div>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Company</th>
        <th>Actions</th>
      </tr>
      <tbody>{items}</tbody>
    </div>
  );
}

export default AppsList;
