import { useEffect, useState } from "react";
import axiosClient from "../networks/apiClient";

const useGetAllUser = () => {
  const [status, setStatus] = useState("idle");
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setStatus("loading");
      const responses = await axiosClient.get("/users/");
      const data = await responses.data;
      setListUser(data);
      setStatus("finish");
    };

    fetchData();
  }, []);

  return {
    status,
    listUser,
  };
};

export default useGetAllUser;
