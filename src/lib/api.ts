const LOCAL_API_BASE_URL = "http://127.0.0.1:8000";
const PROD_API_BASE_URL = "https://yangisamarkand-api.azurewebsites.net";

function stripTrailingSlash(url: string): string {
  return url.replace(/\/+$/, "");
}

export const apiBaseUrl = stripTrailingSlash(
  process.env.NEXT_PUBLIC_API_BASE_URL ||
    (process.env.NODE_ENV === "production" ? PROD_API_BASE_URL : LOCAL_API_BASE_URL),
);

export function buildApiUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${apiBaseUrl}${normalizedPath}`;
}
