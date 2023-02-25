import React, { useCallback } from "react";
import { Props } from "./types";

function AppListItem({
  data,
  onWatchClick,
  onDetailsClick,
  watchButtonLabel,
}: Props) {
  const _onWatchClick = useCallback(() => {
    if (onWatchClick) {
      onWatchClick(data.id);
    }
  }, [data.id, onWatchClick]);

  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.company}</td>
      <td>
        {onWatchClick ? (
          <button onClick={_onWatchClick}>{watchButtonLabel}</button>
        ) : null}
        <button onClick={onDetailsClick}>DETAILS</button>
      </td>
    </tr>
  );
}

export default AppListItem;
