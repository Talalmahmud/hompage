import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { videoData } from "../data/dataSet";
import VideoCard from "./VideoCard";

const VideoGallary = () => {
    return (
        <div className=" px-20 py-10 bg-[#2385be] flex  flex-col">
            <h2 className=" text-3xl text-white font-bold tracking-[10px]">
                VIDEO GALLARY
            </h2>
            <div
                className="py-8 flex flex-col gap-6 justify-center items-center "
                data-aos="fade-up"
            >
                <div className=" flex flex-wrap gap-4 px-[200px]">
                    {videoData.map((item) => (
                        <VideoCard videoId={item.videoUrl} />
                    ))}
                </div>
                <Link className=" bg-white flex w-36 font-bold items-center justify-center border-2 px-1 py-2 hover:text-white hover:bg-slate-500">
                    <button>Learn More</button>
                    <BiRightArrowAlt size={20} />
                </Link>
            </div>
        </div>
    );
};

export default VideoGallary;
