import React, { useContext } from "react";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import { RiMenu3Line } from "react-icons/ri";
import ButtonContex from "../context/ButtonContext";

const Navbar = () => {
    const { toggle, setToggle } = useContext(ButtonContex);

    return (
        <>
            <nav className=" bg-[#115c8f]  sticky w-full z-20 px-10 py-10">
                <div className=" w-full ">
                    <div className="flex items-center justify-between">
                        <Link
                            className="block text-white  overflow-hidden "
                            to="/"
                        >
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
                        <div className=" hidden md:block">
                            <NavMenu />
                        </div>
                        <div
                            className=" block md:hidden text-white cursor-pointer"
                            onClick={() => setToggle(!toggle)}
                        >
                            <RiMenu3Line size={42} />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
