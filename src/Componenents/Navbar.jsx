import { HiMiniBars3 } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { PiPlusThin } from "react-icons/pi"
import { IoIosNotificationsOutline } from "react-icons/io";

import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";



const Navbar = () => {

        const dispatch = useDispatch()


  return (

    //youtube logo big
    <div>
        <div className="flex   px-2 justify-between ">
            <div className="flex items-center w-[35%]">
                <div onClick={()=>{dispatch(toggleSidebar())}}>
                     <HiMiniBars3  className="text-2xl"/>
                </div>
                 <div>
                     <img className="h-14 pl-6 "  src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"/>
                 </div>
            </div>

            

            <div className="flex items-center   ">
                <CiSearch  className="text-2xl mr-8"/>
                <FaMicrophone className="mr-4" />
                <div className="flex items-center rounded-full py-1 bg-[#E5E5E5] px-4 mr-6 ">
                  <  PiPlusThin className="text-lg mr-2" />
                    Create 
                </div>
                <IoIosNotificationsOutline className="text-3xl mr-[5%]" />
                <img className="h-8 rounded-full mr-2" src="https://yt3.ggpht.com/bCGwVEfrsjoDSzzMrYF9o7JlANP7Ol_nEAbYrJvdKGQNTnnF3WnsTN6dt2D17VdHKb2oqFIZHA=s48-c-k-c0x00ffffff-no-rj"/>

            </div>



        </div>
        
    </div>
  );
};

export default Navbar;