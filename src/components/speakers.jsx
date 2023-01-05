import { useState } from "react"

export default function Speakers(){
    const [speakers, setSpeakers] = useState([
        {
            id: 1,
            speakerName: "Bolaji Adebisi",
            role: "Data Analyst at Paystack",
            topic: "Understanding the ABC of Data Analysis & Visual",
        },
        {
            id: 2,
            speakerName: "Emmanuel Samuel",
            role: "HR Professional at Flutterwave",
            topic: "Becoming an innovative talent",
        },
        {
            id: 3,
            speakerName: "Ibiniyi Obikoya",
            role: "Software Engineer at Paystack",
            topic: "Understanding Data Sturcture & Algorithms",
        },
        {
            id: 4,
            speakerName: "Samuel Mbonu",
            role: "ISC2 Nigeria President",
            topic: "Advanced Persistent Threat",
        },
        {
            id: 5,
            speakerName: "Stephen Komna",
            role: "Software Engineer at Microsoft",
            topic: "",
        },
        {
            id: 6,
            speakerName: "Tope James Moses",
            role: "NACOS NOUN National President",
            topic: "",
        },
    ])

    return (
        <div className="bg-white p-5 flex flex-col justify-center">
            <h1 className="text-center font-inter text-2xl text-black font-bold py-3">
                Speakers
            </h1>
        </div>
    )
}