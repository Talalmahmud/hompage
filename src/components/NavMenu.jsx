import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import ButtonContex from "../context/ButtonContext";

const NavMenu = () => {
    const [isHovered, setIsHovered] = useState("");
    const { toggle, setToggle } = useContext(ButtonContex);

    const handleHover = (items) => {
        setIsHovered(items);
    };
    return (
        <div
            className={` ${
                toggle && "absolute flex-col  w-full h-full z-30"
            } flex  lg:md:flex-row justify-between items-center`}
        >
            <div
                className="  top-2 right-1 md:hidden"
                onClick={() => setToggle(!toggle)}
            >
                <RxCross1 />
            </div>
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
    );
};

export default NavMenu;
