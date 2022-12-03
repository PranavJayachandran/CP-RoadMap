import React from "react";
import { GiThreePointedShuriken } from "react-icons/gi";
import { useState, useEffect } from "react";
import data from "./data";

const CardContet = (props) => {
    return (
        <div className="flex gap-2 mb-2 cursor-pointer">
            <div className="mt-1  sm:animate-spin bullet" >
                <GiThreePointedShuriken />
            </div>
            <div className="text-xl">{props.items}</div>
        </div>
    )
}
const Card = (props) => {
    const [open, setOpen] = useState(0);
    const handleopen = (e) => {
        setOpen(open ^ 1);
        if (open === 0)
            e.target.classList.add("pink-gradient");
        else
            e.target.classList.remove("pink-gradient");
    }

    return (
        <div>

            <div className="-ml-28 sm:ml-0 my-10 sm:my-0 w-[300px] sm:w-full text-white sm:mb-5  cursor-pointer transition-all delay-500">
                <div className="transition-all  blue-gradient-one rounded-full px-10 py-4 text-2xl" onClick={handleopen}>
                    {props.name}
                </div>
            </div>
            {
                open === 1 ? <div className="-ml-28 w-72 sm:w-full sm:ml-0 transition-all delay-100 text-white mb-10 sm:pl-10">
                    {props.items.map((item, index) => (
                        <CardContet items={item} />
                    ))}


                </div> : <></>
            }
        </div >
    )
}

const RoadmapPage = () => {
    return (
        <div>
            <div className="flex justify-center text-6xl">
                <h1 className="banner-gradient border-b-2 pb-10 sm:pb-0 sm:border-b-0">
                    ROADMAP
                </h1>
            </div>
            <div>
                <div className=" px-36 mt-10">
                    {
                        data.map((item, index) => (
                            <Card name={item.name} items={item.items} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default RoadmapPage