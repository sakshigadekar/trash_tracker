import { useState, useEffect, useCallback } from "react";
import axios from "axios";
// import { useAuth } from "../providers/AuthProvider.jsx";

/**
 * Used for request that is sent at the page load time
 *
 * @param url the url of the resource, should include base url
 * @param headers an object contains all the header, for example, { Authorization: "Bearer abcde" }
 * @returns {{
 *   isLoading: boolean,
 *   isError: boolean,
 *   data: any,
 *   error: {status: number, message: string},
 *   reFetch: ((function(): Promise<void>))
 * }}
 */
export const useFetch = (url, headers) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
//   const { getAccessToken } = useAuth();

  const fetch = useCallback(async () => {
    setData(null);
    setError(null);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVICE_URL}/${url}`,
        {
          headers: {
            // Authorization: `Bearer ${getAccessToken()}`,
            ...(headers || {}),
          },
        }
      );
      setData(res.data);
    } catch (e) {
      setError({
        status: e.response.status,
        message: e.response.data,
      });
    }
  }, [headers, url]);

  useEffect(() => {
    (async () => await fetch())();
  }, [fetch]);

  return {
    data,
    error,
    isError: error !== null,
    isLoading: data === null && error === null,
    reFetch: fetch,
  };
};
