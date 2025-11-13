import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { adduser } from "../utils/slice/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector((store) => store.user);
  const fetchUser = async () => {
    if (userData) return;
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });

      dispatch(adduser(res.data));
    } catch (error) {
      if (error.status === 401) {
        navigate("/login");
      }
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <div className="flex min-h-dvh flex-col">
        {/* <header className="shrink-0">
          <NavBar />
        </header> */}

        <main className="grow grid place-items-center px-4">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Body;
