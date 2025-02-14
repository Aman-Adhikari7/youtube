
import React, { useState, useEffect } from "react";
import { API_Key } from "../Constants/youtube";
import { useSearchParams } from "react-router-dom";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";


const Comments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  

    useEffect(() => {
      if (videoId) {
        fetchComments(videoId);
      }
    }, [videoId]);
  
    const fetchComments = async (videoId) => {
      setLoading(true);
      setError(null);
  
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${API_Key}&maxResults=20`
        );
  
        if (!response.ok) {
          throw new Error("Failed to fetch comments");
        }
  
        const data = await response.json();
  
        const fetchedComments = data.items.map((item) => {
          const comment = item.snippet.topLevelComment.snippet;
          return {
            authorName: comment.authorDisplayName,
            profileImage: comment.authorProfileImageUrl,
            text: comment.textDisplay,
            likeCount: comment.likeCount,
          };
        });
  
        setComments(fetchedComments);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div className="comments-container mt-4 border">
        <h2>Comments</h2>
        {loading && <p>Loading comments...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!loading && !error && comments.length === 0 && <p>No comments found.</p>}
        {!loading && !error && comments.length > 0 && (
          <ul>
            {comments.map((comment, index) => (
              <div key={index} className=" flex my-2  ">
                 <div>
                  <img className="rounded-full w-[50px] mx-4 my-1"
                   src={comment.profileImage}
                      alt={`${comment.authorName}'s profile`}
                  />

                 </div>

                 <div className="flex flex-col w-[80%]">
                    <h1>{comment.authorName}</h1>
                    <p>{comment.text}</p>
                    <p className="flex items-center mr-2"><AiOutlineLike /> {comment.likeCount}  <AiOutlineDislike className="ml-4"/></p>

                 </div>

                
             </div>
            ))}
          </ul>
        )}
      </div>
    );
  };

    
//     <div className="flex flex-col p-4">
//         <div className="flex">
//         <img className="h-10 rounded-full mr-2 ml-4" src={""}/>
//         <div className="flex flex-col">
//             <p>channel name</p>
//             <p>Comment</p>
//             <div className="flex">  
//                 <p>Like</p><p>Dislike</p>         
//             </div>
          
//         </div>


//         </div>
//     </div>
//   );
// };

export default Comments;