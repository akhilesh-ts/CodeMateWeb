import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeeds } from "../utils/slice/feedSlice";


const Feed = () => {
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
    <>
      feed
    </>
  );
};

export default Feed;
