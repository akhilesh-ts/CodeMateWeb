import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/slice/requestSlice";

const Request = () => {
  const requestData = useSelector((store) => store?.request);
  const [userRequestData, setUserRequestData] = useState([]);
  const dispatch = useDispatch();
  const fetchRequest = async () => {
    try {
      if (requestData) {
        setUserRequestData(requestData);
        return;
      }
      const res = await axios.get(BASE_URL + "/user/request/received", {
        withCredentials: true,
      });
      console.log(res.data);
      setUserRequestData(res.data);
      dispatch(addRequest(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  const removeFromui = (id) => {
    setUserRequestData((prev) => prev?.filter((x) => x._id !== id));
  };

  return (
    <div className="">
      {userRequestData &&
        userRequestData.map((item) => (
          <UserCard key={item._id} user={item} onRemove={removeFromui} />
        ))}
    </div>
  );
};

export default Request;
