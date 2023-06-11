import React, { memo, useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import { useParams } from "react-router-dom";
import { dataSet } from "../data/dataSet";

const Photo = () => {
    const { id } = useParams();
    console.log(dataSet);

    const [item, setItem] = useState({});
    useEffect(() => {
        setItem(dataSet.find((i) => i.id === parseInt(id)));
    }, [id]);
    console.log(item, id);
    return (
        <div>
            <HeroSection />
            <div className="flex flex-col bg-white justify-center itmes-center gap-2 pb-28 p-2 rounded-md w-[700px]">
                <img
                    src={item.imgUrl}
                    alt=""
                    className=" h-[500px] w-full  shadow-md"
                />

                <p>{item.date}</p>
                <h2 className=" font-bold">{item.title}</h2>
                <p>{item.description}</p>
            </div>
        </div>
    );
};

export default memo(Photo);
