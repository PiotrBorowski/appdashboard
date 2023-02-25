import { AppDetailsInfo, AppInfo } from "../types/apps";

export async function fetchAllApps(): Promise<AppInfo[]> {
  const res = await fetch("https://api.recruitment.4soft.tech/list");

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
}

export async function fetchAppDetails(id: number): Promise<AppDetailsInfo> {
  const res = await fetch(`https://api.recruitment.4soft.tech/details/${id}`);

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
}
