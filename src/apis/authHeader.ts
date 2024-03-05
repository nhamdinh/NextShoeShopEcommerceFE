import { ACCESSTOKEN_STORAGE } from "utils/constants";

export const authHeader = () => {
  let authorization = "Bearer";
  const accessToken = localStorage.getItem(ACCESSTOKEN_STORAGE);
  if (accessToken) {
    authorization = `Bearer ${accessToken}`;
  }
  return { Authorization: authorization };
};

/* 
function fetcher(url, username, password) {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  }).then(res => res.json());
}

export function useUser(username, password) {
  const { data, mutate, error } = useSWR(
    ["/login", username, password],
    fetcher,
  );

  const loading = !data && !error;
  const loggedOut = error && error.status === 403;

  console.log("swr data", data);
  console.log("swr error", error);

  return {
    loading,
    loggedOut,
    user: data,
    mutate,
  };
}

const { user } = useUser("my-username", "my-strong-password"); */