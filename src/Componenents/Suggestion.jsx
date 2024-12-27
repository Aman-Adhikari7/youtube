// import { useEffect, useState } from "react";
// import axios from "axios";
// import { API_Key } from "../Constants/youtube";
// import { Link } from "react-router-dom";



// const Suggestions = ({ videoId }) => {
//   const [relatedVideos, setRelatedVideos] = useState([]);

//   const fetchVideoCategory = async () => {
//     try {
//       const res = await axios.get(
//         `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_Key}`
//       );
//       const categoryId = res.data.items[0].snippet.categoryId;
//     //   console.log(res.data.items[0].snippet.categoryId;)
//       return categoryId;
//     } catch (error) {
//       console.error("Error fetching video category:", error.response?.data || error.message);
//     }
//   };

//   const fetchRelatedVideos = async (categoryId) => {
//     try {
//       const res = await axios.get(
//         `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=${categoryId}&key=${API_Key}`
//       );
//       setRelatedVideos(res.data.items);
//     } catch (error) {
//       console.error("Error fetching related videos:", error.response?.data || error.message);
//     }
//   };

  
//   const [channelId, setChannelId] = useState("");
//   const [profile, setProfile] = useState("");

 


//   const getSingleVedio = async () => {
//     try {
//       const res = await axios.get(
//         `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${vedioId}&key=${API_Key}`
//       );

//       const videoData = res.data.items[0];
     
//       setChannelId(videoData.snippet.channelId);

//       // Set likes and dislikes
   
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getChannelDetails = async () => {
//     if (!channelId) return;

//     try {
//       const res = await axios.get(
//         `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${API_Key}`
//       );
//       setProfile(res.data.items[0].snippet.thumbnails.default.url);
//     } catch (error) {
//       console.error("Error fetching channel details:", error.response?.data || error.message);
//     }
//   };

//   useEffect(() => {
//     getSingleVedio();
//   }, [videoId]);

//   useEffect(() => {
//     getChannelDetails();
//   }, [channelId]);

//   useEffect(() => {
//     const fetchSuggestions = async () => {
//       const categoryId = await fetchVideoCategory();
//       if (categoryId) {
//         fetchRelatedVideos(categoryId);
//       }
//     };

//     if (videoId) {
//       fetchSuggestions();
//     }
//   }, [videoId]);

//   return (
//     <div className="p-4 w-full flex flex-col ">
//       <h2>Related Videos</h2>
//       <div className="w-full">
//         {relatedVideos.map((video) => (

//          <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`}>

//            <div key={video.id.videoId} className="shadow-md rounded-xl m-2  ">
//             <img className="w-full"
//               src={video.snippet.thumbnails.medium.url}
//               alt={video.snippet.title}
             
//             />
//             <h3 className="text-lg font-medium">{video.snippet.title}</h3>
//             <p>{video.snippet.channelTitle}</p>
//             <img className="h-10 rounded-full mr-2 ml-4" src={profile}/>
//           </div>
//            </Link>

          
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Suggestions;

