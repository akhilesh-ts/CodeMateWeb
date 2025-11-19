import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeeds } from "../utils/slice/feedSlice";
import UserCard from "./UserCard";
const Overview = () => {
   const dispatch = useDispatch();
  const feedData = useSelector((store) => store?.feed?.data);

  const fetchFeed = async () => {
    if (feedData) return;
    try {
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });

      dispatch(addFeeds(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFeed();
  }, []);
  return (
  <div className="w-full h-auto text-3xl lg:grid grid-cols-6 gap-10">
        <div className="bg-yellow-400 rounded-2xl col-span-4 h-screen ">
          <div className="h-[85vh] overflow-y-auto no-scrollbar">
            {feedData &&
              feedData?.map((user, index) => <UserCard key={index} user={user}  />)}
          </div>
          <p className="text-center">1..2...3...4...5...</p>
        </div>
        <div className="bg-orange-600 rounded-2xl col-span-2">top picks</div>
      </div>
  )
}

export default Overview
