import React from "react";

const Address = () => {
    return (
        <div
            className=" flex bg-white flex-col md:flex-row sm:justify-center justify-between pt-10 pb-48 md:px-10 px-2 items-center"
            data-aos="fade-up"
        >
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29220.11873546259!2d90.4009475!3d23.7290134!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8efa65e6b1b%3A0x2290178cf2c42315!2sBangladesh%20Shishu%20Academy!5e0!3m2!1sen!2sbd!4v1686419027174!5m2!1sen!2sbd"
                title="bangla puzzle"
                className=" border-0 w-[300px] h-[300px] md:w-[600px] md:h-[500px]  "
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className=" flex flex-col justify-center text-xl items-center">
                <h2 className=" font-semibold text-2xl">Present Address</h2>
                <p>Present Address- Bangladesh Shishu</p>
                <p>Academy ,</p>
                <p>Doyel Chattor, Shabag, Dhaka-1000</p>
            </div>
            <div className=" flex flex-col justify-center text-xl items-center">
                <h2 className=" font-semibold text-2xl">Permanent Address</h2>
                <p>Permanent Address- Mymensingh</p>
                <p>District</p>
                <p>Mymensingh, Bangladesh</p>
            </div>
        </div>
    );
};

export default Address;
