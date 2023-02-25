import { AppInfo } from "../../types/apps";

export type Props = {
  data: AppInfo;
  onWatchClick?: (id: number) => void;
  watchButtonLabel: string;
};
