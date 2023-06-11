import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";
import {
    MdOutlineArrowForwardIos,
    MdOutlineArrowBackIos,
} from "react-icons/md";
import { dataSet } from "../data/dataSet";
import MediaCard from "../components/MediaCard";
import VideoGallary from "../components/VideoGallary";
import PhotoGallary from "../components/PhotoGallary";
import Address from "../components/Address";
import { Carousel } from "react-responsive-carousel";

const Home = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const handlePrevious = () => {
        setActiveSlide((prevSlide) => (prevSlide === 0 ? 0 : prevSlide - 1));
    };

    const handleNext = () => {
        setActiveSlide((prevSlide) => (prevSlide === 2 ? 2 : prevSlide + 1));
    };
    return (
        <div className=" bg-fixed bg-[url(https://anjirliton.com/uploads/banner/1676789309.jpg)] ">
            <HeroSection />

            <Services />

            {/* section-1 */}
            <div
                className="pt-20 bg-white flex flex-col md:flex-row justify-center items-center gap-6 "
                data-aos="fade-right"
            >
                <div className=" ">
                    <img
                        src="https://anjirliton.com/frontend/images/gallery/row-image-Mujib100.png"
                        alt=""
                        className=" w-80"
                    />
                </div>
                <div className=" flex flex-col gap-2 w-64 pb-16">
                    <h2 className=" font-bold text-3xl">THE IDEOLOGY</h2>
                    <p>
                        My greatest strength is the love for my people, My
                        greatest weakness is that I love them too much.
                    </p>
                    <p className="font-bold text-xl">
                        -Bangabandhu Sheikh Mujibur Rahman
                    </p>
                    <Link className=" rounded-md flex w-36 font-bold items-center justify-center border-2 px-1 py-1 hover:text-white hover:bg-slate-500">
                        <button>Learn More</button>
                        <BiRightArrowAlt size={20} />
                    </Link>
                </div>
            </div>

            {/* section-2 */}
            <div className=" bg-blue-600 w-full py-10">
                <div className="flex gap-10 justify-center text-white items-center">
                    <div
                        className=" flex flex-col gap-2  pb-16"
                        data-aos="fade-left"
                    >
                        <h2 className=" font-bold text-3xl">
                            MY LEADER AND INSPIRATION
                        </h2>
                        <p>- Hon'ble Prime Minister Sheikh Hasina</p>
                        <Link className=" rounded-md flex w-36 font-bold items-center justify-center border-2 px-1 py-1 hover:text-white hover:bg-slate-500">
                            <button>Learn More</button>
                            <BiRightArrowAlt size={20} />
                        </Link>
                    </div>
                    <div className=" h-60 w-[450px]">
                        <img
                            src="https://anjirliton.com/uploads/home/1675939078.jpg"
                            alt=""
                            className=" h-full w-full"
                        />
                    </div>
                </div>
            </div>
            {/* section-3 upcoming event */}
            <div className=" px-20 py-10 bg-white flex flex-col">
                <h2
                    className=" text-xl md:text-3xl text-[#115f8c] font-bold tracking-[10px]"
                    data-aos="fade-up"
                >
                    UPCOMMING EVENT
                </h2>
                <p className=" text-center">No events</p>
            </div>

            {/* jpurney */}
            <div className=" bg-blue-600 w-full py-10 px-2">
                <div
                    className="flex gap-10 flex-col md:flex-row justify-center text-white items-center"
                    data-aos="fade-left"
                >
                    <div className=" flex flex-col gap-2 w-ful md:w-[400px]  pb-16">
                        <h2 className=" font-bold text-3xl">
                            MY JOURNEY WITH SHISHU ACADEMY
                        </h2>
                        <p className="" data-aos="fade-up">
                            One of the strengths to build a golden Bengal in the
                            ideology of Father of the Nation Bangabandhu Sheikh
                            Mujibur Rahman is our future generation, who are
                            today's children. Bangladesh Shishu Academy is for
                            children. Bangladesh Shishu Academy is working to
                            develop latent talents including creative and gentle
                            scholarship for the purpose of creating the spirit
                            of great liberation war, love of country, moral
                            education, discipline and sense of responsibility
                            among the children. Under the leadership of Hon'ble
                            Prime Minister Sheikh Hasina, a child friendly
                            environment has been created in the country today.
                            At present children's academy activities are being
                            carried out in 64 districts and 6 upazilas
                            (Keshabpur, Parshuram, Mithapukur, Kulaura, Srinagar
                            and Babuganj upazilas) for the creative development
                            and protection of children's rights. Under this
                            program, various programs are being implemented in
                            collaboration with the local administration for the
                            participation of children across the country.
                        </p>
                        <Link className=" rounded-md flex w-36 font-bold items-center justify-center border-2 px-1 py-1 hover:text-white hover:bg-slate-500">
                            <button>Learn More</button>
                            <BiRightArrowAlt size={20} />
                        </Link>
                    </div>
                    <div className=" md:h-62 md:w-[450px] ">
                        <img
                            src="https://anjirliton.com/uploads/home/1675939333.jpg"
                            alt=""
                            className=" h-full w-full"
                        />
                    </div>
                </div>
            </div>
            {/* INITIATIVES
             */}
            <div className=" h-[600px] w-full"></div>
            <div className=" bg-white w-full py-10 md:px-[300px]">
                <div
                    className="flex gap-10 md:flex-row flex-col justify-center items-center"
                    data-aos="fade-up"
                >
                    <div className=" flex flex-col gap-2 w-[250px]  pb-16">
                        <h2 className=" font-bold text-3xl">INITIATIVES</h2>
                        <p>
                            ICT Division has taken initiatives to build Digital
                            Bangladesh. Our software and service industry is a
                            billion-dollar market and is expected to grow our
                            export to USD 5 Billion by 2025. We are serving
                            clients in the array of domains –Financial Services,
                            Telecom companies, Healthcare. Various Startup
                            projects, High-Tech parks, Sheikh Kamal IT Training
                            and Incubation Centers etc projects are underway
                            across the country.
                        </p>
                        <Link className=" rounded-md flex w-36 font-bold items-center justify-center border-2 px-1 py-1 hover:text-white hover:bg-slate-500">
                            <button>Learn More</button>
                            <BiRightArrowAlt size={20} />
                        </Link>
                    </div>

                    <div className=" flex flex-wrap gap-4 justify-center items-center">
                        <div className="flex justify-center bg-slate-300 shadow-md items-center hover:-translate-y-2">
                            <div className=" h-[150px] w-[150px] ">
                                <img
                                    src="https://anjirliton.com/uploads/initiative/1674028164.jpg"
                                    alt=""
                                    className=" h-full w-full"
                                />
                            </div>
                            <p className="text-3xl font-bold h-[150px] w-[150px] ">
                                333
                            </p>
                        </div>
                        <div className="flex justify-center bg-slate-300 shadow-md items-center hover:-translate-y-2">
                            <div className=" h-[150px] w-[150px]  ">
                                <img
                                    src="https://anjirliton.com/uploads/initiative/1674028064.jpg"
                                    alt=""
                                    className=" h-full w-full"
                                />
                            </div>
                            <p className="text-3xl font-bold h-[150px] w-[150px] ">
                                999
                            </p>
                        </div>
                        <div className="flex justify-center bg-slate-300 shadow-md items-center hover:-translate-y-2">
                            <div className=" h-[150px] w-[150px]  ">
                                <img
                                    src="https://anjirliton.com/uploads/initiative/1674028041.jpg"
                                    alt=""
                                    className=" h-full w-full"
                                />
                            </div>
                            <p className="text-3xl font-bold h-[150px] w-[150px] ">
                                Start Up Bangladesh
                            </p>
                        </div>
                        <div className="flex justify-center bg-slate-300 shadow-md items-center hover:-translate-y-2">
                            <div className=" h-[150px] w-[150px]  ">
                                <img
                                    src="https://anjirliton.com/uploads/initiative/1674028014.jpg"
                                    alt=""
                                    className=" h-full w-full"
                                />
                            </div>
                            <p className="text-3xl font-bold h-[150px] w-[150px] ">
                                Porichoy
                            </p>
                        </div>
                        <div className="flex justify-center bg-slate-300 shadow-md items-center hover:-translate-y-2">
                            <div className=" h-[150px] w-[150px]  ">
                                <img
                                    src="https://anjirliton.com/uploads/initiative/1674027986.png"
                                    alt=""
                                    className=" h-full w-full"
                                />
                            </div>
                            <p className="text-3xl font-bold h-[150px] w-[150px] ">
                                Food For Nation
                            </p>
                        </div>
                        <div className="flex justify-center bg-slate-300 shadow-md items-center hover:-translate-y-2">
                            <div className=" h-[150px] w-[150px]  ">
                                <img
                                    src="https://anjirliton.com/uploads/initiative/1674027956.png"
                                    alt=""
                                    className=" h-full w-full"
                                />
                            </div>
                            <p className="text-3xl font-bold h-[150px] w-[150px] ">
                                SUROKHA
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <VideoGallary />

            <PhotoGallary />

            {/* media coverage */}
            <div
                className=" px-48 py-10 bg-[#115f8c] flex flex-col justify-center md:items-center"
                data-aos="fade-up"
            >
                <h2 className=" text-xl md:text-3xl text-white font-bold tracking-[10px]">
                    MEDIA COVERAGE
                </h2>

                <div className=" block md:flex  md:justify-center md:items-center gap-2 pt-10">
                    <div
                        className="bg-white hidden md:block p-4 cursor-pointer rounded-full"
                        onClick={handlePrevious}
                    >
                        <MdOutlineArrowBackIos size={20} />
                    </div>
                    <Carousel
                        autoPlay
                        infiniteLoop
                        showThumbs={false}
                        selectedItem={activeSlide}
                        onChange={(index) => setActiveSlide(index)}
                        showArrows={false}
                        showStatus={false}
                        className="h-full w-full md:h-[600px] md:w-[400px] "
                    >
                        {dataSet.map((item) => (
                            <MediaCard key={item.id} item={item} />
                        ))}
                    </Carousel>
                    <div
                        className="bg-white hidden md:block p-4 cursor-pointer rounded-full"
                        onClick={handleNext}
                    >
                        <MdOutlineArrowForwardIos size={20} />
                    </div>
                </div>
            </div>

            {/* map */}
            <Address />
        </div>
    );
};

export default Home;
