import { AppInfo } from "../../types/apps";

export type Props = {
  data: AppInfo;
  onWatchClick?: (id: number) => void;
  onDetailsClick: () => void;
  watchButtonLabel: string;
};
