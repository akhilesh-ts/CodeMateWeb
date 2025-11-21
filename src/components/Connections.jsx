import axios from "axios";
import ConnectionCard from "./ConnectionCard";
import { BASE_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const Connections = () => {
  const [connections, setConnections] = useState([]);
  const fetchConnections = async () => {
    try {
      const res = await axios.get(
        BASE_URL + "/user/connections",
       
        { withCredentials: true }
      );
       console.log(res.data)
      setConnections(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5">
      {connections && connections.map((item) => <ConnectionCard  key={item?._id} user={item}/>)}
    </div>
  );
};

export default Connections;
