import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
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
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <Typography fontSize={24} fontWeight={500}>
              ALL APPS
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

export default AppsList;
