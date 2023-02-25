import React from "react";
import { Props } from "./types";

function AppListItem({ data }: Props) {
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.company}</td>
    </tr>
  );
}

export default AppListItem;
