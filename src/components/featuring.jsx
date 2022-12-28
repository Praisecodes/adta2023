import { useState } from "react"

export default function Featuring(){
    const [features] = useState([
        {
            id: 1,
            icon: 'https://summit.nacosnoun.com.ng/asset/imgs/f.png',
            title: "Software Exhibition",
        },
        {
            id: 2,
            icon: 'https://summit.nacosnoun.com.ng/asset/imgs/h.png',
            title: "Hackathon Competition",
        },
        {
            id: 3,
            icon: 'https://summit.nacosnoun.com.ng/asset/imgs/f.png',
            title: "Football Match",
        },
    ]);

    return (
        <div className="bg-notWhite p-10">
            <h1 className="w-full text-center font-inter text-black font-bold text-2xl">
                Featuring
            </h1>
            <div className="flex flex-row flex-wrap justify-around items-center w-full py-7">
                {
                    features.map((feature)=>(
                        <div key={feature.id} className="w-72 my-3 shadow-custom text-black font-lato rounded cursor-pointer h-60 flex flex-col justify-center items-center bg-white">
                            <img src={feature.icon} className={"h-16"} /> <br />
                            <h1 className="text-xl font-bold text-center">
                                {feature.title}
                            </h1>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}