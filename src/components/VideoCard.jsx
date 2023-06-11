import React from "react";
import YouTube from "react-youtube";

const VideoCard = ({ videoId }) => {
    const opts = {
        width: "280",
        height: "150",
        playerVars: {
            autoplay: 0,
        },
    };

    return <YouTube videoId={videoId} opts={opts} />;
};

export default VideoCard;
