import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PhotoGallary = () => {
    return (
        <div className=" px-1 md:px-20 py-10 bg-white">
            <h2 className=" text-3xl text-[#115f8c] font-bold tracking-[10px]">
                PHOTO GALLARY0
            </h2>
            <div
                className=" flex items-center justify-center px-1 lg:px-48 md:px-32 gap-4 pt-10 flex-wrap"
                data-aos="fade-up"
            >
                <Link
                    className="w-[240px] h-[300px]"
                    to="https://anjirliton.com/uploads/gallery/1676722408.jpg"
                >
                    <LazyLoadImage
                        src="https://anjirliton.com/uploads/gallery/1676722408.jpg"
                        alt=""
                        className="w-full h-full"
                    />
                </Link>
                <Link
                    className="w-[240px] h-[300px]"
                    href="https://anjirliton.com/uploads/gallery/1676722426.jpg"
                >
                    <LazyLoadImage
                        className="w-full h-full"
                        src="https://anjirliton.com/uploads/gallery/1676722426.jpg"
                        alt=""
                        title=""
                    />
                </Link>
                <Link
                    className="w-[240px] h-[300px]"
                    href="https://anjirliton.com/uploads/gallery/1676722426.jpg"
                >
                    <LazyLoadImage
                        className="w-full h-full"
                        src="https://anjirliton.com/uploads/gallery/1676722426.jpg"
                        alt=""
                        title=""
                    />
                </Link>
                <Link
                    className="w-[240px] h-[300px]"
                    href="https://anjirliton.com/uploads/gallery/1676722426.jpg"
                >
                    <LazyLoadImage
                        className="w-full h-full"
                        src="https://anjirliton.com/uploads/gallery/1676722426.jpg"
                        alt=""
                        title=""
                    />
                </Link>
                <Link
                    className="w-[240px] h-[300px]"
                    href="https://anjirliton.com/uploads/gallery/1676722426.jpg"
                >
                    <LazyLoadImage
                        className="w-full h-full"
                        src="https://anjirliton.com/uploads/gallery/1676791153.jpg"
                        alt=""
                        title=""
                    />
                </Link>
                <Link
                    className="w-[240px] h-[300px]"
                    href="https://anjirliton.com/uploads/gallery/1676791153.jpg"
                >
                    <LazyLoadImage
                        className="w-full h-full"
                        src="https://anjirliton.com/uploads/gallery/1676722426.jpg"
                        alt=""
                        title=""
                    />
                </Link>
            </div>
            <div className=" flex items-center justify-center py-4">
                <Link className=" bg-slate-200 flex w-36 font-bold items-center justify-center border-2 px-1 py-2 hover:text-white hover:bg-slate-500">
                    <button>Learn More</button>
                    <BiRightArrowAlt size={20} />
                </Link>
            </div>
            {/* <div className=" flex flex-center justify-center flex-wrap ">
                <div className=" flex flex-wrap ustify-center items-center gap-4 px-[200px]">
                    <Link
                        className="w-[240px] h-[300px]"
                        to="https://anjirliton.com/uploads/gallery/1676722408.jpg"
                    >
                        <img
                            src="https://anjirliton.com/uploads/gallery/1676722408.jpg"
                            alt=""
                            className="w-full h-full"
                        />
                    </Link>
                    <Link
                        className="w-[240px] h-[300px]"
                        href="https://anjirliton.com/uploads/gallery/1676722426.jpg"
                    >
                        <img
                            className="w-full h-full"
                            src="https://anjirliton.com/uploads/gallery/1676722426.jpg"
                            alt=""
                            title=""
                        />
                    </Link>
                    <Link
                        className="w-[240px] h-[300px]"
                        href="https://anjirliton.com/uploads/gallery/1676722426.jpg"
                    >
                        <img
                            className="w-full h-full"
                            src="https://anjirliton.com/uploads/gallery/1676722426.jpg"
                            alt=""
                            title=""
                        />
                    </Link>
                    <Link
                        className="w-[240px] h-[300px]"
                        href="https://anjirliton.com/uploads/gallery/1676722426.jpg"
                    >
                        <img
                            className="w-full h-full"
                            src="https://anjirliton.com/uploads/gallery/1676722426.jpg"
                            alt=""
                            title=""
                        />
                    </Link>
                    <Link
                        className="w-[240px] h-[300px]"
                        href="https://anjirliton.com/uploads/gallery/1676722426.jpg"
                    >
                        <img
                            className="w-full h-full"
                            src="https://anjirliton.com/uploads/gallery/1676791153.jpg"
                            alt=""
                            title=""
                        />
                    </Link>
                    <Link
                        className="w-[240px] h-[300px]"
                        href="https://anjirliton.com/uploads/gallery/1676791153.jpg"
                    >
                        <img
                            className="w-full h-full"
                            src="https://anjirliton.com/uploads/gallery/1676722426.jpg"
                            alt=""
                            title=""
                        />
                    </Link>
                </div>
                <Link className=" bg-slate-200 flex w-36 font-bold items-center justify-center border-2 px-1 py-2 hover:text-white hover:bg-slate-500">
                    <button>Learn More</button>
                    <BiRightArrowAlt size={20} />
                </Link>
            </div> */}
        </div>
    );
};

export default PhotoGallary;
