import React from "react";
import { Link } from "react-router-dom";

const MediaCard = ({ item }) => {
    return (
        <div>
            <div className="flex flex-col bg-white justify-center itmes-center gap-2 p-2 rounded-md md:w-[400px] w-full">
                <Link to={`/photo/${item.id}`}>
                    <img
                        src={item.imgUrl}
                        alt=""
                        className=" h-[300px] w-full p-2 rounded-md shadow-md"
                    />
                </Link>
                <p>{item.date}</p>
                <h2 className=" font-bold">{item.title.slice(0, 50)}</h2>
                <p>{`${item.description.slice(0, 200)}...`}</p>
            </div>
        </div>
    );
};

export default MediaCard;
