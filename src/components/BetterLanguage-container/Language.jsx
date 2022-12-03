import React from "react";
import { BsXDiamondFill } from "react-icons/bs";

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
const Language = () => {
    return (
        <div className="mb-20">
            <div>
                <div className="mt-16 flex sm:flex-row sm:pl-20 pl-8 gap-10 sm:gap-32">
                    <div className="flex-1 pb-10 border-rose-400 border-b-2">
                        <h1 className="sm:text-left text-center sm:text-6xl text-4xl banner-gradient  w-full sm:w-10/12  font-semibold font  ">
                            WHICH LANGUAGE<br /> IS BETTER ??
                        </h1>
                    </div>
                    <div className="sm:flex-1 w-0">

                    </div>
                </div>
                <div className="flex sm:flex-row flex-col text-[20px]">
                    <div className=" font-light flex-1 text-white pl-8 sm:pl-20 text-left pr-8 sm:pr-48 pt-10">
                        I first want to make it very clear that I am talking here with only Competitive programming in mind.
                        <br /><br />
                        You can do CP in virtually any language as long as you know that language and it is supported on the platform. But the fight is usually between Python, Java, and C++. Let's go point by point. Python is an easy-to-understand language, yes but to be fair it's slow. It has a lot of libraries making the code-writing process really fast but the executing time is higher than in other languages. I have seen people use Python for CP but for questions that need optimizations, they too would jump to Java or C++. So I don't recommend Python for CP cause it will lead you to have to optimize your code a lot, which in most situations is super hard.
                        <br /><br />
                        Coming to Java Vs C++, if you are already proficient in either language continue with it.  But if you are planning to start learning a language I would recommend C++, I personally do CP in C++, and in some cases, it's faster compared to Java.
                        <br /><br />
                        I will put some resources you can check out on the side to read deeply about this topic.
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
                                <ExtraLinkPoints links="https://www.tutorialspoint.com/why-is-python-slower-than-other-languages" name="Why Python is slower?" />
                                <ExtraLinkPoints links="https://www.codingninjas.com/codestudio/library/java-vs-python-and-c" name="JAVA VS PYTHON VS C" />
                                <ExtraLinkPoints links="https://www.codingninjas.com/codestudio/library/java-vs-ccpp-for-competitive-programming" name="JAVA VS C/C++ FOR CP" />
                                <ExtraLinkPoints links="https://youtu.be/deaQG10LWR8" name="Best Language for CP (video)" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Language;