import { Outlet } from "react-router-dom";
import NavBar from "./navbar";

const Body = () => {
  return (
    <>
      <NavBar />
      <Outlet/>
    </>
  );
};

export default Body;
