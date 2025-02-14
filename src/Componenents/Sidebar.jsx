import { IoMdHome } from "react-icons/io";
import { RiMeteorLine } from "react-icons/ri"
import { IoMusicalNotesOutline } from "react-icons/io5";
import { MdMovie } from "react-icons/md";
import { MdLiveTv } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6";
import { IoTrophyOutline } from "react-icons/io5"
import { MdNewspaper } from "react-icons/md"
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { setCategory } from "../utils/appSlice";

const Subscription=[
    {
        image:"https://yt3.googleusercontent.com/ytc/AIdro_k7J8-LWCa5QLDnY3x9kaArgJoSSMory4hgkYSBOFgvEg=s900-c-k-c0x00ffffff-no-rj",
        name:"ThePrimeTime"
    },
    {
        image:"https://yt3.ggpht.com/-egl0BJumF1A/AAAAAAAAAAI/AAAAAAAAAAA/zk1ch1-WaY8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
        name:"MrBeast"
    },
    {
        image:"https://yt3.ggpht.com/a-/AN66SAyxbLXqx46MaVKjEAyjtOpkGS8PQBKU4nosoA=s900-mo-c-c0xffffffff-rj-k-no",
        name:"Net Ninja"
    },
    {
        image:"https://yt3.ggpht.com/a-/AAuE7mCfWaPOwsuJgVsufijI_uvXPmmaPfzkLQcbpQ=s900-mo-c-c0xffffffff-rj-k-no",
        name:"Fireship"
    },
    {
        image:"https://yt3.googleusercontent.com/MeY_fGNrjVLV0PVOBN7dRWzMBS0y41YGm55LOaJ02cXV82a7Np9pYxxhHFqdYdncEy1I2cYR=s900-c-k-c0x00ffffff-no-rj",
        name:"Harkirat Singh"
    },
    {
        image:"https://tse2.mm.bing.net/th?id=OIP.l-4yEw07qt_1vgvHqZ9pQgHaHa&pid=Api&P=0&h=180",
        name:"ColdFusion"
    },
    {
        image:"https://yt3.googleusercontent.com/HwK2R0K5Q7ubT_zMsCbqdHxNYXPoMoP0HoXt8Jz668IchKqu3jSDwlH3qaHRa9WKD7_wLLTmqw=s900-c-k-c0x00ffffff-no-rj",
        name:"James jani"
    },
    {
        image:"https://yt3.ggpht.com/1FEdfq3XpKE9UrkT4eOc5wLF2Bz-42sskTi0RkK4nPh4WqCbVmmrDZ5SVEV3WyvPdkfR8sw2=s88-c-k-c0x00ffffff-no-rj",
        name:"Chai aur code"
    },
    {
        image:"https://tse1.mm.bing.net/th?id=OIP.Dr4yBAT9UWr52ME0tP5NpwHaHa&pid=Api&P=0&h=180",
        name:"Youtube"
    },
    {
        image:"https://yt3.ggpht.com/bCGwVEfrsjoDSzzMrYF9o7JlANP7Ol_nEAbYrJvdKGQNTnnF3WnsTN6dt2D17VdHKb2oqFIZHA=s48-c-k-c0x00ffffff-no-rj",
        name:"AmanYt"
    },
]

const Latestitems =[
    {
       icon:  <RiMeteorLine  className="text-xl mr-8 " /> , 
       title: "Trending"
                   
    },
    {
       icon:  < IoMusicalNotesOutline className="text-xl mr-8 " /> , 
       title: "Music"
                   
    },
    {
       icon:  <MdMovie className="text-xl mr-8 " /> , 
       title: "Movies"
                   
    },
    {
       icon:  <MdLiveTv className="text-xl mr-8 " /> , 
       title: "Live"
                   
    },
    {
       icon:  <IoGameControllerOutline className="text-xl mr-8 " /> , 
       title: "Gaming"
                   
    },
    {
       icon:  <MdNewspaper className="text-xl mr-8 " /> , 
       title: "News"
                   
    },
    {
       icon:  <IoTrophyOutline className="text-xl mr-8 " /> , 
       title: "Sports"
                   
    },
    {
       icon:  <FaBagShopping className="text-xl mr-8 " /> , 
       title: "Shopping"
                   
    },
]

   

  

const Sidebar = () => {

    const dispatch= useDispatch()

    const[active,setActive]=useState('All')

    const handleSearch = (category) => {
        if(active !== category){
          setActive(category)
          dispatch(setCategory(category))
        }
        };

    const open = useSelector((state)=> state.apps.open) //redux

    console.log(open)
  return (
    //sidebar toggler main div
    <div className={` ${open ? "w-[210px] scroll-smooth   h-full transition-all duration-100 absolute z-12 top-11 bg-white overflow-y-auto custom-scrollbar  " : "w-[0] top-11 bg-white absolute  overflow-hidden transition-all duration-300 ease-in-out "} `} >
        <div className=" h-screen ">
              
              <div className="flex flex-col mx-2 mr-4 border-b pb-2 ">
                  <div className="flex  mt-2 p-2 rounded-xl items-center bg-[#E5E5E5]  font-medium">
                    <IoMdHome className="text-xl mr-8 " />  
                    <Link to="/home">Home</Link>
                   </div>

                  <div className="flex  p-2 rounded-xl items-center hover:bg-[#E5E5E5]  font-medium">
                    <SiYoutubeshorts className="text-xl mr-8 " />  
                    <Link to="Shorts">Shorts</Link>
                   </div>

                  <div className="flex   p-2 rounded-xl items-center hover:bg-[#E5E5E5]  font-medium">
                    <MdOutlineSubscriptions className="text-xl mr-8 " />  
                    Subscription
                   </div>


              </div >
             

              {/* second div */}
              <div className=" mt-2 flex flex-col mx-2 mr-4 border-b pb-2" >
                {/* explore section */}
                <p className=" mx-2 font-medium">Explore</p>
              {
                          Latestitems.map((items,index)=>{
                            return(
                                <div key={index} onClick={()=>handleSearch(items.title)} className="flex   p-2 rounded-xl items-center hover:bg-[#E5E5E5] cursor-pointer font-medium">
                                     {items.icon}
                                     {items.title}
                                    </div>
                            )
                          })
              }

              </div>
              {/* third div subscription section */}

              <div className=" mt-2 flex flex-col mx-2 mr-4 border-b pb-2" >

                    <p className="mx-2 font-medium">Subscriptions</p>

                    {
                          Subscription.map((items,index)=>{
                            return(
                                <div key={index} className="flex   p-2 rounded-xl items-center hover:bg-[#E5E5E5]  font-medium">
                                  <img className="h-8 rounded-full mr-2" src={items.image}/>
                                     {items.name}
                                    </div>
                            )
                          })
              }
                    
              </div>

     
        </div>
    </div>
  );
};

export default Sidebar;