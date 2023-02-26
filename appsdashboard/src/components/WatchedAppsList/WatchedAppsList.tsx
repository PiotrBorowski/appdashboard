import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";
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
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <Typography fontSize={24} fontWeight={500}>
              WATCHED APPS
            </Typography>
          </TableRow>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>{items}</TableBody>
      </Table>
    </TableContainer>
  );
}

export default WatchedAppsList;
