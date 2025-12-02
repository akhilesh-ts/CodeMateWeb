import { useEffect, useState } from "react";
import DiscoverCard from "../components/DiscoverCard";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { addFeeds } from "../utils/slice/discoverSlice";

const Discover = () => {
  const [userData, setUserData] = useState([]);
  const devData = useSelector((store) => store?.discover);
  const dispatch = useDispatch();
  const fetchDiscoverData = async () => {
    try {
      if (devData) {
        setUserData(devData);
        return;
      }

      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });
      console.log(res.data);
      setUserData(res.data);
      dispatch(addFeeds(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDiscoverData();
    console.log("discover");
  }, []);

  const removeUserFromUI = (userId) => {
    setUserData((prev) => prev?.filter((x) => x._id !== userId));
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {
          userData.map((item) => (
            <DiscoverCard
              key={item._id}
              user={item}
              onRemove={removeUserFromUI}
            />
          ))}
      </div>
    </>
  );
};

export default Discover;
