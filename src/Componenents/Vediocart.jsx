import axios from "axios";
import { API_Key } from "../Constants/youtube";
import { useEffect, useState, } from "react";
import { formatDistanceToNow } from "date-fns";


const Vediocart = ({item}) => {
           // converting timezone to day ago hours ago format
    const publishedAt = item.snippet.publishedAt
    const timeAgo = formatDistanceToNow(new Date(publishedAt),{addSuffix:true})


    const [profile,setprofile]=useState([])
    
// formating views section from 2837463views to 2.8million views
    const formatViews = (views) => {
        if (views >= 1e9) return `${(views / 1e9).toFixed(1)}B`; // Billion
        if (views >= 1e6) return `${(views / 1e6).toFixed(1)}M`; // Million
        if (views >= 1e3) return `${(views / 1e3).toFixed(1)}K`; // Thousand
        return views.toString(); // Less than 1k
      };


       //fetching profile picture of channe;
    const fetchytprofile = async () => {
        try {
           // Replace with your actual API key
          const channelId = item.snippet.channelId // Replace with the actual channelId
          const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_Key}`;
    
          const res = await axios.get(url);
    
          if (res.data.items && res.data.items.length > 0) {
            const Profilepic = res.data.items[0].snippet.thumbnails.high.url;
            setprofile(Profilepic)
            console.log("Thumbnails:", Profilepic);
          } else {
            console.error("No data found for the channel.");
          }
        } catch (error) {
          console.error("Error fetching channel profile picture:", error);
        }
      };

    useEffect(()=>{
              fetchytprofile()
    },[])

  return (
         

    /// vedio cart section all dynamic contents
          
    <div className="mt-4    flex flex-col overflow-hidden   " >
        
        
         <img className=" rounded-2xl m-4 h-[243px]  object-cover    " src={item.snippet.thumbnails.high.url}/>
          <div className="flex ">

         <img className="h-10 rounded-full mr-2 ml-4" src={profile}/>
         <div className="">
         <h1 className="text-md font-medium">{item.snippet.title}</h1>

         <p className="text-sm text-black text-opacity-60">{item.snippet.channelTitle}</p>
         <p className="text-sm text-black text-opacity-60"> {formatViews(item.statistics.viewCount)} views · {timeAgo}</p>
         </div>
          </div>

   
   
        


    
</div>
  );
};

export default Vediocart;