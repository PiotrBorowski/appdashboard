import { Box, Collapse, TableCell, TableRow } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useQuery } from "react-query";
import { fetchAppDetails } from "../../services/apps";
import { AppDetails } from "../AppDetails";
import { AppListItem } from "../AppListItem";
import { Props } from "./types";

function AppItemWithDetails({ data, onWatchClick, watchButtonLabel }: Props) {
  const [detailsVisible, setDetailsVisible] = useState(false);

  const onDetailsClick = useCallback(() => {
    setDetailsVisible((prev) => !prev);
  }, []);

  const { data: detailedData, isLoading } = useQuery(
    ["details", data.id],
    ({ queryKey }) => fetchAppDetails(queryKey[1] as number),
    { enabled: detailsVisible }
  );

  // IT WOULD BE BETTER TO SHOW DETAILS IN MODAL OR NAVIGATE TO details page
  return (
    <>
      <AppListItem
        data={data}
        watchButtonLabel={watchButtonLabel}
        onWatchClick={onWatchClick}
        onDetailsClick={onDetailsClick}
      />
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
          <Collapse in={detailsVisible} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              {isLoading || !detailedData ? (
                <TableCell>LOADING...</TableCell>
              ) : (
                <AppDetails data={detailedData} />
              )}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default AppItemWithDetails;
