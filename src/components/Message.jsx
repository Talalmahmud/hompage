import React from "react";
import {} from "react-icons";
import {} from "react-icons";
import { BiMessage } from "react-icons/bi";

const Message = () => {
    return (
        <div>
            <div className="fixed z-40 right-2 bottom-2">
                <div className=" bg-[#47fde5] text-black  p-4 rounded-full ">
                    <BiMessage size={30} />
                </div>
            </div>
        </div>
    );
};

export default Message;
