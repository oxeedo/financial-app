import React from "react";
import YouTube from "react-youtube";

const YouTubeEmbed = ({ videoId }) => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
      controls: 1,
      disablekb: 1,
      modestbranding: 1,
      rel: 0, // Prevents showing related videos at the end
      fs: 1, // Enables fullscreen button
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubeEmbed;
