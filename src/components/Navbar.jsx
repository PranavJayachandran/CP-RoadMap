import React from "react";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    return (
        <div className="h-10 px-10 py-8 bg-black flex justify-start items-center">
            <div className="px-1 text-purple-600  rounded-full" >
                <CgProfile className="w-7 h-7" />
            </div>
            <div className="pink-color">
                Pranav Jayachandran
            </div>
        </div >
    )
}

export default Navbar;


// #018786
// #3700B3
// #CF6679
// #BB86F6
// #1F0655