import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { heroData } from "../data/dataSet";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroSection = () => {
    return (
        <>
            <Carousel
                autoPlay
                infiniteLoop
                showIndicators={false}
                showArrows={false}
                showThumbs={false}
            >
                {heroData.map((item) => (
                    <div className=" w-full md:h-[500px] h-[400px]">
                        <LazyLoadImage
                            src={item.imgUrl}
                            alt=""
                            className=" h-full w-full"
                        />
                        <div className=" absolute px-6 py-4 left-6 bg-[#333333] bg-opacity-[0.6] top-[40%] flex flex-col items-start gap-2">
                            <h2 className=" text-3xl text-white font-semibold">
                                {item.title}
                            </h2>
                            <Link to={"/"} className=" bg-[#115f8c] px-2 py-1">
                                Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </Carousel>
        </>
    );
};

export default HeroSection;
