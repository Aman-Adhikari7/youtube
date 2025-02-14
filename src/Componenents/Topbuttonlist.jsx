import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowBack,  IoIosArrowForward } from "react-icons/io"
import { useDispatch } from "react-redux";
import { API_Key } from "../Constants/youtube";
import { setCategory } from "../utils/appSlice";

const Buttons = () => {

    const buttonList = ["All", "Javascript", "Java", "Live", "Music", "Songs", "Vlogs", "Trending", "Programming", "News", "Technology", "Cricket", "Comedy", "Thriller", "New to you", "Computer Programming", "Netlify", "Coding"]

    const scrollButtonsref=useRef(null)
    const [isLeftVisible, setIsLeftVisible] = useState(false);//left scroller
    const [isRightVisible, setIsRightVisible] = useState(true);//right scroller top buttons

    const dispatch = useDispatch()

    const[active,setActive]=useState('All')


   

      const handleSearch = (category) => {
      if(active !== category){
        setActive(category)
        dispatch(setCategory(category))
      }
      };
      

    const scrollLeft = () => {
        scrollButtonsref.current.scrollBy({
            left:-200,
            behavior:"smooth",
        })
    }

    const scrollRight = () => {
        scrollButtonsref.current.scrollBy({
            left:200,
            behavior:"smooth",
        })
    }

    //visibility of scroller based upon scroll

    const handelScroll = ()=>{
        const container= scrollButtonsref.current
        setIsLeftVisible(container.scrollLeft > 0)
        setIsRightVisible(container.scrollWidth > container.scrollLeft + container.clientWidth)
    }

    useEffect(()=>{
        const container = scrollButtonsref.current

        container.addEventListener("scroll",handelScroll);

        return ()=>{
            container.removeEventListener("scroll", handelScroll);
        }

    },[])
  return (

            //left arrow
            
            <div className="relative" >
         {
             isLeftVisible && (
                 <button
                 onClick={scrollLeft}
                 
                 className={`absolute left-0  top-0 h-full px-2  $ hover:bg-gray-200 hover:rounded-full  bg-white `}
               >
                 <IoIosArrowBack />
               </button>
 
             )
         }
        

           {/* all buttons below navbar */}
           <div ref={scrollButtonsref} className=" px-2 overflow-x-auto whitespace-nowrap flex items-center scroll-smooth scrollbar-hide">
       
       {
           buttonList.map((items,index)=>{
             return  <div key={index} onClick={()=>handleSearch(items)}      className={`h-8 px-4 m-1 rounded-full flex items-center justify-center whitespace-nowrap cursor-pointer ${active === items ? "bg-black text-white" : "bg-gray-200"}`}>
                  {items}
               </div>
           })
        }
        <button onClick={() => handleSearch('Music')}>Music</button>
        </div>

              {/* right scroll button */}
   {
            isRightVisible && (
                <button
                onClick={scrollRight}
                
                className={`absolute right-0 top-0 h-full px-2 $ hover:bg-gray-200 hover:rounded-full z-1 bg-white `}
              >
                <IoIosArrowForward />
              </button>

            )
        }
        



    </div>
    
  );
};

export default Buttons;