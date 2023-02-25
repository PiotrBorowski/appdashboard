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
      {detailsVisible ? (
        isLoading || !detailedData ? (
          <tr>
            <td>LOADING...</td>
          </tr>
        ) : (
          <AppDetails data={detailedData} />
        )
      ) : null}
    </>
  );
}

export default AppItemWithDetails;
