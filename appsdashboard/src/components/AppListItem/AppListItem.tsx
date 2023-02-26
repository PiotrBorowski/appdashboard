import { Button, IconButton, TableCell, TableRow } from "@mui/material";
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
    <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      <TableCell>{data.id}</TableCell>
      <TableCell>{data.name}</TableCell>
      <TableCell>{data.company}</TableCell>
      <TableCell>
        {onWatchClick ? (
          <Button variant="outlined" onClick={_onWatchClick} sx={{ mr: 2 }}>
            {watchButtonLabel}
          </Button>
        ) : null}
        <Button variant="outlined" onClick={onDetailsClick}>
          DETAILS
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default AppListItem;
