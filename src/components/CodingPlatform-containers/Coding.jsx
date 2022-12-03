import React from "react";
import { BsXDiamondFill } from "react-icons/bs";
import { BsArrowDownLeft } from "react-icons/bs";
import { BsArrowDownRight } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";

const ExtraLinkPoints = ({ links, name }) => {

    return (
        <div className="mx-7 flex gap-2 my-2">
            <div>
                <BsXDiamondFill className="text-fuchsia-700" />
            </div>
            <div className="-mt-1">
                <a href={links} target="_blank" rel="noreferrer">
                    {name}
                </a>
            </div>
        </div>
    )
}
const Coding = () => {
    return (
        <div className="">
            <div>
                <div className="mt-16 flex sm:flex-row sm:pl-20 pl-8 gap-10 sm:gap-32">
                    <div className="flex-1 pb-10 border-rose-400 border-b-2">
                        <h1 className="sm:text-left text-center sm:text-6xl text-4xl banner-gradient  w-full sm:w-10/12  font-semibold font  ">
                            ABOUT CODING<br /> PLATFORMS
                        </h1>
                    </div>
                    <div className="sm:flex-1 w-0">

                    </div>
                </div>
                <div className="flex sm:flex-row flex-col">
                    <div className="text-[20px] font-light flex-1 text-white pl-8 sm:pl-20 text-left pr-8 sm:pr-48 pt-10">
                        Once you are done with choosing the language, it is super important that all coding platforms are not the same. Each has a separate use case and should be used accordingly. I know websites like CodeChef and Codeforces may sound exciting for some and intimidating for others. We will reach to those websites slowly.
                        <br /><br /><span className="font-bold underline">HACKERRANK</span> : To set the basics right this is the go-to place. When you are learning a new language and want to get the syntax right, choose HackerRank.
                        <br /><br /><span className="font-bold underline">HACKEREARTH</span> : HackerEarth can be used very similar to how HackerRank is used. Both can be used hand in hand.
                        <br /><br /><span className="font-bold underline">CODECHEF</span> : To get started with Competitive Programming choose Codechef. You will find some good CP questions here, with the questions starting from an extremely easy level. If you are done with the basics of a language, CodeChef will be a good place to put them to the test and practice.
                        <br /><br /><span className="font-bold underline">CODEFORCES</span> : The main league for CPers. The place which teaches everyone their place Codeforces. No matter how much time you spend practicing before you come to Codeforces you will have a hard time. And if you come here prematurely you are in for a disaster. The questions are going to range from easy to supremely hard. And is the best place to get those CP juices running.
                        <br /><br /><span className="font-bold underline">LEETCODE</span> : Let me get this clear no matter how famous LeetCode is, it's not a CP website. It's a DSA website. If you want to just prepare for placement or practice DSA, go here. It has a plethora of questions surrounding different topics and is like a never-ending jungle of questions. It has all those typical types of questions that are commonly asked in interviews.
                    </div>
                    <div className="sm:mt-0 mt-10  flex-1 text-white ">
                        <div className="px-5 sm:px-0">
                            <div className="p-[3px]  pink-gradient w-10/12">
                                <div className=" bg-black">
                                    <h1 className="text-[20px] font-semibold w-10/12 text-left pl-5 py-1">
                                        EXTERNAL LINKS
                                    </h1>
                                </div>
                            </div>
                            <div className="mt-4">
                                <ExtraLinkPoints links="https://www.hackerrank.com/" name="HACKERRANK" />
                                <ExtraLinkPoints links="https://www.hackerearth.com/" name="HACKEREARTH" />
                                <ExtraLinkPoints links="https://www.codechef.com/" name="CODECHEF" />
                                <ExtraLinkPoints links="https://codeforces.com/" name="CODEFORCES" />
                                <ExtraLinkPoints links="https://leetcode.com/" name="LEETCODE" />
                            </div>
                        </div>
                        <div className="mt-20 px-5 sm:px-0">
                            <div className="p-[3px]  blue-gradient-one w-10/12">
                                <div className=" bg-black">
                                    <h1 className="text-[20px] font-semibold w-10/12 text-left pl-5 py-1">
                                        THE ORDER OF PROGRESSION I RECOMMEND
                                    </h1>
                                </div>
                            </div>
                            <p className="mt-10 text-left pt-3 px-0 sm:px-6 font sm:w-10/12 w-full">
                                <div className="text-center">HACKERRANK/HACKEREARTH</div>
                                <div className="flex justify-center items-center gap-20 sm:gap-10">
                                    <BsArrowDownLeft className="w-7 h-7 my-2" />
                                    <BsArrowDownRight className="w-7 h-7 my-2" />
                                </div>
                                <div className="flex">
                                    <div className="mx-6 flex-1 flex justify-start sm:justify-center">
                                        (For CP)
                                    </div>
                                    <div className="flex-1 flex sm:justify-center justify-start">
                                        (For Placement)
                                    </div>
                                </div>
                                <div className="flex mt-3 ml-10 sm:ml-0 gap-44 sm:gap-0">
                                    <BsArrowDown className="sm:flex-1 flex justify-center w-7 h-7" />
                                    <BsArrowDown className="sm:flex-1 w-7 h-7" />
                                </div>
                                <div className="flex gap-9 sm:ml-4 sm:gap-8 sm:mt-2">
                                    <div className="mx-6 flex-1 flex justify-start sm:justify-center">
                                        CODECHEF
                                    </div>
                                    <div className="flex-1 flex justify-start ">
                                        LEETCODE
                                    </div>
                                </div>
                                <div className="flex mt-3 ml-10 sm:ml-0 gap-44 sm:gap-0">
                                    <BsArrowDown className="sm:flex-1 flex justify-center w-7 h-7" />
                                    <BsArrowDown className="sm:flex-1 w-7 h-7" />
                                </div>
                                <div className="flex sm:ml-0 sm:gap-4 sm:mt-2">
                                    <div className="mx-6 flex-1 flex justify-start sm:justify-center">
                                        CODEFORCES
                                    </div>
                                    <div className="flex-1 flex justify-center ">
                                        INTERVIEWBIT
                                    </div>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coding;