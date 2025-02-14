import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_Key } from "../Constants/youtube";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai"
import { RiShareForwardLine } from "react-icons/ri"
import { IoMdDownload } from "react-icons/io";
import Suggestions from "./Suggestion";
import Buttons from "./Topbuttonlist";
import Comments from "./Comment";

const Watch = () => {
  const [singleVedio, setSingleVedio] = useState({});
  const [channelId, setChannelId] = useState("");
  const [profile, setProfile] = useState("");
  const [likeCount, setLikeCount] = useState(null);
  const [showMore, setShowMore] = useState(false);
 

  const [searchParams] = useSearchParams();
  const vedioId = searchParams.get("v");

  const formatLikes = (views) => {
    if (views >= 1e9) return `${(views / 1e9).toFixed(1)}B`; // Billion
    if (views >= 1e6) return `${(views / 1e6).toFixed(1)}M`; // Million
    if (views >= 1e3) return `${(views / 1e3).toFixed(1)}K`; // Thousand
    return views; // Less than 1k
  };

  const getSingleVedio = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${vedioId}&key=${API_Key}`
      );

      const videoData = res.data.items[0];
      setSingleVedio(videoData.snippet);
      setChannelId(videoData.snippet.channelId);

      // Set likes and dislikes
      setLikeCount(videoData.statistics.likeCount);
   
    } catch (error) {
      console.log(error);
    }
  };

  const getChannelDetails = async () => {
    if (!channelId) return;

    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${API_Key}`
      );
      setProfile(res.data.items[0].snippet.thumbnails.default.url);
    } catch (error) {
      console.error("Error fetching channel details:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    getSingleVedio();
  }, [vedioId]);

  useEffect(() => {
    getChannelDetails();
  }, [channelId]);

  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-col">
        <iframe
          width="100%"
          height="415"
          src={`https://www.youtube.com/embed/${vedioId}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <div className="flex flex-col p-4 ">
          <h1 className="text-xl font-bold">{singleVedio.title}</h1>

          <div className="md:flex md:justify-between">
          <div className="flex items-center   p-4">

<div className="flex items-center  ">
  {profile && <img className="h-10 rounded-full border mr-2" src={profile} alt="Channel" />}
  <h1 className="font-medium text-lg  ">{singleVedio.channelTitle}</h1>
</div>
<button className="px-4 py-2 bg-black text-white rounded-full ml-6">Subscribe</button>
</div>

<div className="flex mb-4">

<div className="flex p-2 border rounded-full items-center shadow-lg">

<p className="text-xl"><AiOutlineLike /></p>
<p className="border-r-2 px-2">  {formatLikes(likeCount) || "Loading..."}</p>
<p className="text-xl px-2 mt-1"><AiOutlineDislike/></p>

</div>


<a  className="rounded-full flex items-center shadow-lg border-2  px-4  mx-4" href={`https://www.youtube.com/watch?v=${vedioId}`} target="_blank" rel="noreferrer">
<RiShareForwardLine className="mt-1 text-2xl mr-2" />

  <p>Share</p>
</a>

<a  className="rounded-full md:hidden flex items-center shadow-lg border-2  px-4  mx-4" href={`https://publer.io/tools/youtube-video-downloader`} target="_blank" rel="noreferrer">
<IoMdDownload 
className="mt-1 text-2xl mr-2" />

  <p>Download</p>
</a>


</div>

          </div>
    

          <div className=" shadow-lg rounded-2xl bg-gray-100 p-4  ">
          <p
              className={`text-gray-700 ${
                showMore ? "" : "line-clamp-3"
              } overflow-hidden`}
              style={{ WebkitLineClamp: showMore ? "unset" : 3, display: "-webkit-box", WebkitBoxOrient: "vertical" }}
            >
              {singleVedio.description || "No description available."}
            </p>
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-blue-500 mt-2 ml-[90%]  "
            >
              {showMore ? "Less" : "More"}
            </button>
          </div>

        </div>
      </div>
      <Buttons/>

       <Suggestions  videoId={vedioId}/>
       <Comments/>
    </div>
  );
};

export default Watch;
