import React from "react";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    return (
        <div className="h-10 px-10 py-8  text-purple-600 flex flex-row justify-start items-center">
            <div className="flex-1 flex gap-2 ">  <div className="px-1   rounded-full" >
                <CgProfile className="w-7 h-7" />
            </div>
                <div className="pink-color">
                    Pranav Jayachandran
                </div>
            </div>
            <a href="/">
                <div className="flex-1">
                    Home
                </div>
            </a>
        </div >
    )
}

export default Navbar;
