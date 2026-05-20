const LOCAL_API_BASE_URL = "http://127.0.0.1:8000";
const PROD_API_BASE_URL = "https://yangisamarkand-api.azurewebsites.net";

function stripTrailingSlash(url: string): string {
  return url.replace(/\/+$/, "");
}

function getApiBaseUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  // If the env variable is set to the dead Google Cloud Run backend, ignore it
  if (envUrl && !envUrl.includes("run.app")) {
    return envUrl;
  }
  return process.env.NODE_ENV === "production" ? PROD_API_BASE_URL : LOCAL_API_BASE_URL;
}

export const apiBaseUrl = stripTrailingSlash(getApiBaseUrl());

export function buildApiUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${apiBaseUrl}${normalizedPath}`;
}
