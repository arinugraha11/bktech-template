import { useEffect, useState } from "react";
import axiosClient from "../networks/apiClient";

/**
 * This is for REST API custom hooks
 * Feel free to change parameter, return or the logic
 *
 * This is very basic template, not using network policy etc
 */

const useGetPokemon = (url: string) => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setStatus("loading");
      const response = await axiosClient.get(url);
      const data = await response.data;
      setData(data);
      setStatus("finish");
    };

    fetchData();
  }, [url]);

  return {
    status,
    data,
  };
};

export default useGetPokemon;
