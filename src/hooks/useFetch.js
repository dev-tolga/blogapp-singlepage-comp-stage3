import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { env } from "../.././src/library/network/env/env";

const useFetch = () => {
  const { api } = env;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [apiUrl, setApiUrl] = useState(api);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const url = `${api}blogs/`;
        const response = await fetch(url, { signal: controller.signal });
        if (response.status === 200) {
          const _data = await response.json();
          setData(_data);
        } else {
          throw new Error("Could not fetch the data\nurl: " + url);
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    };

    fetchData();
    return () => controller.abort();
  }, []);

  return { data, isLoading, error };
};

export default useFetch;
