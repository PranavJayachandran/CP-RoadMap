import React from "react";

const Cards = () => {
    return (
        <div className="">
            <div className="pb-24 bg-black text-white">
                <div className=" flex flex-col sm:flex-row  pt-36">
                    <div className="purple-gradient ml-10 flex-col bg-yellow-300 w-4/5 sm:w-1/5 mx-1 rounded-3xl py-5 sm:hover:-mt-10 sm:hover:mb-20 sm:transition-all cursor-pointer duration-300 -mt-10 sm:mt-10" >
                        <a href="/coding-platforms">
                            <div className="h-10 flex flex-row px-4 py-3 ">
                                <div className="mx-1 bg-black h-2.5 w-2.5">
                                </div>
                                <div className="mx-1 bg-black h-2.5 w-2.5">
                                </div>
                                <div className="mx-1 bg-black h-2.5 w-2.5">
                                </div>
                            </div>
                            <div className="flex items-end h-52 ">
                                <div className="px-4 text-4xl flex text-left font-black text-black">
                                    <h1>ABOUT <br />CODING<br />PLATFORMS</h1>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="blue-gradient-one ml-10  flex-col bg-yellow-300 w-4/5 sm:w-1/5 mx-1 rounded-3xl py-5 sm:hover:-mt-10 sm:hover:mb-20 sm:transition-all cursor-pointer duration-300 mt-10 sm:mt-10">
                        <a href="better-language"><div className="h-10 flex flex-row px-4 py-3 ">
                            <div className="mx-1 bg-black h-2.5 w-2.5">
                            </div>
                            <div className="mx-1 bg-black h-2.5 w-2.5">
                            </div>
                            <div className="mx-1 bg-black h-2.5 w-2.5">
                            </div>
                        </div>

                            <div className="flex items-end h-52">
                                <div className="px-4 text-4xl flex text-left font-black text-black">
                                    <h1>WHICH <br />LANGUAGE<br />IS BETTER</h1>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="pink-gradient ml-10  flex-col bg-yellow-300 w-72 mx-1 rounded-3xl py-5 sm:hover:-mt-10 sm:hover:mb-20 sm:transition-all cursor-pointer duration-300 mt-10 sm:mt-10">
                        <a href="maintain-consistency"><div className="h-10 flex flex-row px-4 py-3 ">
                            <div className="mx-1 bg-black h-2.5 w-2.5">
                            </div>
                            <div className="mx-1 bg-black h-2.5 w-2.5">
                            </div>
                            <div className="mx-1 bg-black h-2.5 w-2.5">
                            </div>
                        </div>
                            <div className="flex items-end h-52">
                                <div className="px-4 text-4xl flex text-left font-black text-black">
                                    <h1>MAINTAINING CONSISTENCY</h1>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="blue-gradient-two ml-10  flex-col bg-yellow-300 w-4/5 sm:w-1/5 mx-1 rounded-3xl py-5 sm:hover:-mt-10 sm:hover:mb-20 sm:transition-all cursor-pointer duration-300 mt-10 sm:mt-10">
                        <a href="roadmap"><div className="h-10 flex flex-row px-4 py-3 ">
                            <div className="mx-1 bg-black h-2.5 w-2.5">
                            </div>
                            <div className="mx-1 bg-black h-2.5 w-2.5">
                            </div>
                            <div className="mx-1 bg-black h-2.5 w-2.5">
                            </div>
                        </div>

                            <div className="flex items-end h-52">
                                <div className="px-4 text-4xl flex text-left font-black text-black">
                                    <h1>ROADMAP TO GET STARTED</h1>
                                </div>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Cards;