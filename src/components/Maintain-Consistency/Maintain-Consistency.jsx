import React from "react";
import consis from "../../assets/consistency.png";
import rating from "../../assets/rating-graph.png";
import heat from "../../assets/heat-map.png";

const MaintainConsiststency = () => {
    return (
        <div className="mb-20">
            <div className="mt-16 flex flex-col px-10 sm:px-20 gap-10 justify-center">
                <div className="flex justify-center border-rose-400 border-b-2 w-full pb-10 ">
                    <h1 className="flex justify-center sm:text-left text-center sm:text-6xl text-4xl banner-gradient  w-full  font-semibold font  ">
                        MAINTAINING<br /> CONSISTENCY
                    </h1>
                </div><div className="text-[20px] text-white text-center sm:text-left">
                    Starting to do CP is easy, but the harder part is to maintain doing it consistently. Sounds easy, I know it does. I thought it would be easy to remain consistent too. But then this happened.
                    <br>
                    </br>
                    <div className="pt-10 pb-10 sm:w-[800px]">
                        <img src={consis} />
                    </div>

                    You see some consistent negative ratings and boom you panic, or at least I did.  Yes, these are just some contests I performed badly in, but look at the dates. For around 3 weeks I was doing nothing but bad performance. This is when the switch goes off. The tiredness kicks in, the motivation bleeds, and eventually, you just stop doing CP. So what's the solution? Let's go point by point.

                    <div>
                        <div className="pt-2 pb-2">1. <span className="font-semibold underline">Have the right reasons.</span> If you are one of the many who want to do CP for placements, stop reading and never look back at CP again. CP for placements might end up being overkill. Yes, some companies do ask CP-level questions but spending so much time doing CP just for those companies is worth and no is up to you to decide. So why do CP, do it if you are genuinely passionate about the sport or want to improve your problem-solving skills For me, it was the latter.
                        </div> <div className="pb-2">2. <span className="font-semibold underline">Understand you are not special.</span> I don't care what your background is, you are not special. You won't magically get all the right answers or will be able to grasp a concept in a snap. You will have to grind for it, just like everyone else.
                        </div> <div className="pb-2">3. <span className="font-semibold underline">Negative ratings are just minor setbacks.</span> If I just take a bird's view of my ratings, the net has been positive only. Although I had those negative ratings, in the end, the ratings increased.
                            <div className="pt-10 pb-10 sm:w-[800px]">
                                <img src={rating} />
                            </div>
                        </div><div className="pb-2">4. <span className="font-semibold underline">Sometimes it's unfair, I know.</span> Your friend started doing CP after you but is performing better than you. It feels disheartening sometimes I know, but understand that everyone has their own journey.
                        </div>
                    </div>
                    If you haven't been doing CP for a while now, you won't understand a lot of what I have written here. But believe me, I am not sure about the other things, but this particular page about Maintaining Consistency, bookmark it and come back anytime you feel like you are losing motivation.

                    PS: Just show you that the grind is real, here is a pick of the number of questions I have done and the heat map.
                    <div className="pt-10 pb-10 sm:w-[800px]">
                        <img src={heat} />
                    </div>
                </div>
            </div>

        </div >

    )
}

export default MaintainConsiststency