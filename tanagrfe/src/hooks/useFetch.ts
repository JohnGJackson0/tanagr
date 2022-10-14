import { useState, useEffect } from "react";
import axios from "axios";

interface UseFetch<T> {
  data: T | undefined;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

function useFetch<T>(url: string): UseFetch<T> {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    const source = axios.CancelToken.source();
    axios
      .get(url, { cancelToken: source.token })
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
      source.cancel();
    };
  }, [url]);

  return { data, isLoading, isError, errorMessage };
}

export default useFetch;
