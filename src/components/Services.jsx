import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { BsTelephoneFill, BsGlobe2 } from "react-icons/bs";
import { LuNewspaper } from "react-icons/lu";

const Services = () => {
    return (
        <div className=" bg-[#115f8c] w-full">
            <p className=" w-full border-b-2 py-6 border-[#0080d7]" />
            <div
                className="flex flex-col gap-10 justify-center text-white items-center"
                data-aos="fade-up"
            >
                <h2 className=" text-5xl font-bold">CONSTITUENT SERVICES</h2>
            </div>
            <div
                className=" flex flex-wrap justify-center items-center gap-4 py-16"
                data-aos="fade-up"
            >
                <div className=" h-[200px] w-[200px]">
                    <div className=" bg-[#0080d7] text-white flex flex-col justify-center items-center font-bold rounded-[100%] p-16">
                        <MdAlternateEmail size={50} />
                        Email Me
                    </div>
                </div>

                <div className=" h-[200px] w-[200px]">
                    <div className=" bg-[#0080d7] text-white flex flex-col justify-center items-center font-bold rounded-[100%] p-16">
                        <BsTelephoneFill size={50} />
                        Call Me
                    </div>
                </div>
                <div className=" h-[200px] w-[200px]">
                    <div className=" bg-[#0080d7] text-white flex flex-col justify-center items-center font-bold rounded-[100%] p-16">
                        <LuNewspaper size={50} />
                        News
                    </div>
                </div>
                <div className=" h-[200px] w-[200px]">
                    <div className=" bg-[#0080d7] text-white flex flex-col justify-center items-center font-bold rounded-[100%] p-16">
                        <BsGlobe2 size={50} />
                        Visit us
                    </div>
                </div>
            </div>
            <p className=" w-full border-t-2 py-6 border-[#0080d7]" />
        </div>
    );
};

export default Services;
