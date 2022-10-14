import { useState, useEffect } from "react";
import { cancelRequest, getRequest, getRequestCancelToken } from "../lib/api";
interface UseFetch<T> {
  data: T | undefined;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

function useFetch<T>(url: string): UseFetch<T> {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    const source = getRequestCancelToken();

    getRequest<T>(url)
      .then((res) => {
        setIsLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
        setErrorMessage(err);
      });
    return () => {
      cancelRequest(source);
    };
  }, [url]);

  return { data, isLoading, isError, errorMessage };
}

export default useFetch;
