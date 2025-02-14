import axios from "axios";
import { useEffect, } from "react";
import { API_Key, Vedio_API } from "../Constants/youtube";
import Vediocart from "./Vediocart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setVedio  } from "../utils/appSlice";


const Vediocontainer = () => {

    const {vedio,category}= useSelector((state)=> state.apps)

       const dispatch=useDispatch()

    const fetchVedios= async ()=>{
        //fetching home section vedios upto 50/100
        try {
            const res= await axios.get(Vedio_API+API_Key)
            // console.log(res)
          
            dispatch(setVedio(res?.data?.items))
            
        } catch (error) {
            console.log(error)
        }


    }


    const fetchVideosByCategory = async (category) => {
        try {
            const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${category}&type=video&key=${API_Key}`)
          // dispatch(setVedio(response.data.items));
          // console.log(response.data.items) 
          const videoItems = response.data.items
          const videoIds = videoItems.map((item) => item.id.videoId).join(",");

          // Step 2: Fetch statistics for these videos
          const statsResponse = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds}&key=${API_Key}`
          );
      
          // Combine statistics with video items
          const statsData = statsResponse.data.items;
      
          const enrichedVideos = videoItems.map((item) => {
            const stats = statsData.find((stat) => stat.id === item.id.videoId);
            return {
              ...item,
              statistics: stats?.statistics || {}, // Include statistics if available
            };
          });
      
          // Step 3: Update Redux state with enriched videos
          dispatch(setVedio(enrichedVideos));
          console.log(enrichedVideos);
        } catch (error) {
          console.error("Error fetching videos by category:", error);
        }
      };

      useEffect(() => {
        fetchVedios();
    }, []); // Runs only once
    
    useEffect(() => {
        fetchVideosByCategory(category);
    }, [category]); // Runs when `category` changes
    

    return (
      <div className="h-screen grid md:grid-cols-2 xl:grid-cols-3  overflow-y-auto   ">
        {
         vedio &&   vedio.map((items)=>{
               console.log(items.snippet.channelId)
                return(
                    <Link key={items.id.videoId} to={`/watch?v=${items.id.videoId}`}>

                    <Vediocart  item={items}/>
                    </Link>
                )
            })

        }

      </div>
    );
  };
  
  export default Vediocontainer;