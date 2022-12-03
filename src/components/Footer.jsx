import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { SiCodechef } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";

const Footer = () => {
    return (<div>
        <div className=" flex flex-col sm:mt-0 mt-10 text-2xl py-5 bg-black text-white justify-center">
            <div className="flex flex-1 justify-center items-center">
                <div className="banner-gradient">
                    To Contact Me
                </div>
            </div>
            <div className="flex justify-center py-2 ">
                <div className="flex flex-row gap-2">
                    <a href="https://www.instagram.com/pranav.jayachandran/" rel="noreferrer" target="_blank"><AiFillInstagram className="hover:text-amber-400 hover:text-3xl transition-all duration-100 cursor-pointer" /></a>
                    <a href="https://twitter.com/PranavPranj" rel="noreferrer" target="_blank"><AiOutlineTwitter className="hover:text-amber-400 hover:text-3xl transition-all duration-100 cursor-pointer" /></a>
                    <a href="https://www.linkedin.com/in/pranav-jayachandran-b971bb1b8/" rel="noreferrer" target="_blank" ><AiFillLinkedin className="hover:text-amber-400 hover:text-3xl transition-all duration-100 cursor-pointer" /></a>
                    <a href="https://www.codechef.com/users/pranj" rel="noreferrer" target="_blank"><SiCodechef className="hover:text-amber-400 hover:text-3xl transition-all duration-100 cursor-pointer" /></a>
                    <a href="https://codeforces.com/profile/pranj" rel="noreferrer" target="_blank"><SiCodeforces className="hover:text-amber-400 hover:text-3xl transition-all duration-100 cursor-pointer" /></a>
                </div>
            </div>
        </div>
    </div>)
}

export default Footer;