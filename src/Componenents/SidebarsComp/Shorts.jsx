import React, { useEffect, useState } from 'react';
import { API_Key } from '../../Constants/youtube';

const Shorts = () => {
  // Replace with your API key
  const [shorts, setShorts] = useState([]);

  // Fetch shorts data from YouTube API
  useEffect(() => {
    const fetchShorts = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoDuration=short&maxResults=10&q=shorts&key=${API_Key}`
        );
        const data = await response.json();
        setShorts(data.items);
      } catch (error) {
        console.error('Error fetching shorts:', error);
      }
    };

    fetchShorts();
  }, []);

  return (
    <div className="w-full h-screen border flex flex-col overflow-y-scroll scroll-snap-y items-center justify-center scroll-snap-mandatory bg-white pt-[600px] text-black">
      {shorts && shorts.map((short) => (
        <div
          key={short.id.videoId}
          className="short-card w-[400px] h-[90vh] flex flex-col justify-center items-center scroll-snap-start p-4"
        >
          {/* Embed video using iframe */}
          <iframe
            className="w-full h-[80vh] rounded-lg"
            src={`https://www.youtube.com/embed/${short.id.videoId}`}
            title={short.snippet.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h3 className="mt-4 text-lg font-semibold text-center">
            {short.snippet.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Shorts;

