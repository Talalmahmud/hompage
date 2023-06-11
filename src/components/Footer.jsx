import React from "react";
import { Link } from "react-router-dom";
import { TfiFacebook, TfiLinkedin } from "react-icons/tfi";
import { BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
    return (
        <div className=" bg-[#0c4063] mt-20">
            <div class="w-11/12 mx-auto lg:pb-10 " data-aos="fade-up">
                <div class="flex  xl:w-8/12 mx-auto -translate-y-[120px] flex-col items-center lg:flex-row gap-2 md:gap-4 bg-[#0080d7] p-5 md:p-8 rounded-xl relative z-10">
                    <div class="w-full lg:w-4/12  text-center lg:text-left relative z-10">
                        <h2 class="text-white text-2xl font-semibold ">
                            NEWSLETTER SUBSCRIBE
                        </h2>
                        <p class="text-white text-lg py-2">
                            Sign up with your email address to updates.
                        </p>
                    </div>
                    <div class="w-full lg:w-8/12 relative z-10">
                        <form
                            action="https://anjirliton.com/newsletter"
                            method="post"
                            enctype="multipart/form-data"
                        >
                            <input
                                type="hidden"
                                name="_token"
                                value="mwqqVPBO9C88YYNMixHlJZLbPhqHLjvK0i1nUl27"
                            />
                            <div class="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-3">
                                <input
                                    class="rounded-md w-full border border-gray-300 h-14 focus:outline focus:outline-1 px-4 placeholder:font-light placeholder:text-lg"
                                    placeholder="Name"
                                    type="text"
                                    name="name"
                                    required=""
                                />
                                <input
                                    class="rounded-md w-full border border-gray-300 h-14 focus:outline focus:outline-1 px-4 placeholder:font-light placeholder:text-lg"
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    required=""
                                />
                                <button
                                    type="submit"
                                    class="rounded-md w-full transition-all col-span-full md:col-span-1 cursor-pointer bg-[#115c8f] hover:bg-[#0e476d] font-bold text-white uppercase text-xl md:text-xl 2xl:text-2xl text-center px-4 h-[3.5rem]  flex items-center justify-center"
                                >
                                    SUBMIT
                                </button>
                            </div>
                        </form>
                    </div>
                    <img
                        class="absolute left-0 top-0 h-[130px] opacity-20"
                        src="https://anjirliton.com/frontend/images/home/email-footer.png"
                        alt=""
                    />
                </div>
            </div>
            <div className=" px-20 flex flex-col md:flex-row gap-6 justify-between text-[1.5rem] md:text-[2.5rem] font-bold text-white items-center">
                <div className=" flex flex-col gap-1 " data-aos="fade-left">
                    <Link to={"https://"}>dgbsa22@gmail.com</Link>
                    <p>01914088093</p>
                    <div className="flex gap-6">
                        <TfiFacebook size={40} />
                        <BsTwitter size={40} />
                        <FiInstagram size={40} />
                        <TfiLinkedin size={40} />
                    </div>
                </div>
                <div
                    className="flex flex-col gap-1 justify-center items-center"
                    data-aos="fade-left"
                >
                    <p>Bangladesh Shishu Academy , Doyel</p>
                    <p>Chattor, Shabag, Dhaka-1000</p>
                </div>
            </div>
            <div className=" py-40 px-32 flex flex-col gap-1 font-bold text-xl text-white">
                <p data-aos="fade-right">©2023 by .</p>
                <p data-aos="fade-left">
                    {" "}
                    Proudly created with Bangla Puzzle Ltd.
                </p>
            </div>
        </div>
    );
};

export default Footer;
