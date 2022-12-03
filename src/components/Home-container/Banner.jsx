import React from "react";

const Banner = () => {
    return (
        <div className="bg-black py-10">
            <div className="flex sm:flex-row flex-col sm:gap-0 gap-10 sm:w-full  px-10 sm:px-0">
                <div className="sm:-pr-16 sm:border-r-2 sm:border-b-0 border-b-2 pb-10 sm:pb-0 border-violet-500 flex-1 flex sm:px-10 justify-center items-center ">
                    <h1 className="sm:mr-10 font-medium w-fit banner-gradient text-4xl sm:text-6xl">
                        A ROADMAP TO <br />COMPETITIVE
                        <br />PROGRAMMING
                    </h1>
                </div >
                <div className="flex flex-1 text-white sm:px-5 sm:pr-10 text-center sm:text-right font-light">
                    <p>
                        Hey, Pranav Jayachandran here. A 3rd-year Computer Science student at the College of Engineering,
                        Trivandrum. I have been doing competitive programming for over a year now. I am an expert
                        at Codeforces and 4-star at Codechef. Here are some things that will help you get started
                        with competitive programming. Do give it a read.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Banner;