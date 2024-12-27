import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="h-screen  ">
        <Outlet/>
        <div className="absolute h-full top-0">

        <Sidebar />
        </div>
    </div>
  );
};

export default Body;