import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Nav = () => {
    const [isHovered, setIsHovered] = useState("");

    const handleHover = (items) => {
        setIsHovered(items);
    };
    const [open, setOpen] = useState(false);
    return (
        <div className="shadow-md w-full sticky bg-[#115f8c] top-0 left-0 z-40">
            <div className="md:flex items-center justify-between  py-6 md:px-10 px-7">
                <Link className="block text-white  overflow-hidden " to="/">
                    <div className="block md:hidden lg:block sm:block">
                        <div className="flex items-center">
                            <div>
                                <img
                                    width="25"
                                    height="44"
                                    src="https://anjirliton.com/frontend/images/New Text Document.png"
                                    alt=""
                                />
                            </div>
                            <div className="text-sm  md:text-xl font-bold">
                                <p> Anjir</p>
                                <p> Liton</p>
                            </div>
                            <div className="pl-2 text-sm font-mono hidden md:block">
                                <p>Children's</p>
                                <p>Writter</p>
                            </div>
                        </div>
                    </div>
                </Link>

                <div
                    onClick={() => setOpen(!open)}
                    className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden "
                >
                    {open ? <RxCross1 size={42} /> : <RiMenu3Line size={42} />}
                </div>

                <div
                    className={` justify-center md:flex sm:h-full sm:w-full items-center md:pb-0 pb-12 absolute md:static bg-[#115f8c] md:z-40 z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                        open ? "top-20 " : "top-[-490px]"
                    }`}
                >
                    <Link
                        to="/"
                        className="text-gray-300 hover:text-[#115c8f] px-3 py-2 rounded-md  font-medium"
                        onMouseOver={() => handleHover("about")}
                        onMouseLeave={() => handleHover("")}
                    >
                        <div className=" flex gap-1 text-[20px] hover:text-[#cedee9] text-white font-bold items-center justify-center">
                            About Anjir
                            <FaChevronDown />
                        </div>
                        {isHovered === "about" && (
                            <div className="absolute ml-0 mt-2 py-2 bg-slate-800 rounded-md shadow-lg">
                                <Link
                                    to="/"
                                    className="block px-4 py-2 text-sm text-white hover:bg-[#115c8f]"
                                >
                                    Biography
                                </Link>
                                <Link
                                    to="/"
                                    className="block px-4 py-2 text-sm text-white hover:bg-[#115c8f]"
                                >
                                    Achivewment
                                </Link>
                            </div>
                        )}
                    </Link>
                    <Link
                        to={"/"}
                        className="text-white  hover:text-[#cedee9] px-3 py-2 rounded-md text-[20px] font-medium"
                    >
                        Event
                    </Link>
                    <Link
                        to={"/"}
                        className="text-white  hover:text-[#c8d5dd] px-3 py-2 rounded-md text-[20px] font-medium"
                    >
                        News
                    </Link>
                    <Link
                        to="/"
                        className="text-gray-300  hover:text-[#115c8f] px-3 py-2 rounded-md text-sm font-medium"
                        onMouseOver={() => handleHover("media")}
                        onMouseLeave={() => handleHover("")}
                    >
                        <div className=" flex gap-1 hover:text-[#c8d5dd] text-[20px] text-white font-bold items-center justify-center">
                            Media
                            <FaChevronDown />
                        </div>
                        {isHovered === "media" && (
                            <div className="absolute ml-0 mt-2 py-2 bg-slate-800 rounded-md shadow-lg">
                                <Link
                                    to="/"
                                    className="block px-4 py-2 text-sm text-white hover:bg-[#115c8f]"
                                >
                                    Press
                                </Link>
                                <Link
                                    to="/"
                                    className="block px-4 py-2 text-sm text-white hover:bg-[#115c8f]"
                                >
                                    Quotes
                                </Link>
                                <Link
                                    to="/"
                                    className="block px-4 py-2 text-sm text-white hover:bg-[#115c8f]"
                                >
                                    Speeches
                                </Link>
                                <Link
                                    to="/"
                                    className="block px-4 py-2 text-sm text-white hover:bg-[#115c8f]"
                                >
                                    Interview
                                </Link>
                            </div>
                        )}
                    </Link>
                    <Link
                        to="/"
                        className="text-gray-300  hover:text-[#115c8f] px-3 py-2 rounded-md text-sm font-medium"
                        onMouseOver={() => handleHover("gallary")}
                        onMouseLeave={() => handleHover("")}
                    >
                        <div className=" flex gap-1 text-[20px] hover:text-[#c8d5dd] text-white font-bold items-center justify-center">
                            Gallary
                            <FaChevronDown />
                        </div>
                        {isHovered === "gallary" && (
                            <div className="absolute ml-0 mt-2 py-2 bg-slate-800 rounded-md shadow-lg">
                                <Link
                                    to="/photos"
                                    className="block px-4 py-2 text-sm text-white hover:bg-[#115c8f]"
                                >
                                    Photo Gallary
                                </Link>
                                <Link
                                    to="/video"
                                    className="block px-4 py-2 text-sm text-white hover:bg-[#115c8f]"
                                >
                                    Video Gallary
                                </Link>
                            </div>
                        )}
                    </Link>
                    <Link
                        to={"/contact"}
                        className="text-white hover:text-[#c8d5dd] hover:bg-white border-white border-4 p-1 font-bold text-[20px]"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;
