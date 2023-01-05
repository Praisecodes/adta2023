import { useState } from "react"
import Bolaji from '../assets/speakers/Bolaji Adebisi 1.png'
import Emmanuel from '../assets/speakers/Emmanel Samuel.jpg'
import Ibiniyi from '../assets/speakers/IBINIYI OBIKOYA.jpg'
import Samuel from '../assets/speakers/Samuel Mbonu 1.png'
import Stephen from '../assets/speakers/Stephen Komna.jpg'
import James from '../assets/speakers/Personal Image.png'


export default function Speakers(){
    const [speakers, setSpeakers] = useState([
        {
            id: 1,
            speakerName: "Bolaji Adebisi",
            role: "Data Analyst at Paystack",
            topic: "Understanding the ABC of Data Analysis & Visual",
            image: Bolaji,
        },
        {
            id: 2,
            speakerName: "Emmanuel Samuel",
            role: "HR Professional at Flutterwave",
            topic: "Becoming an innovative talent",
            image: Emmanuel,
        },
        {
            id: 3,
            speakerName: "Ibiniyi Obikoya",
            role: "Software Engineer at Paystack",
            topic: "Understanding Data Sturcture & Algorithms",
            image: Ibiniyi,
        },
        {
            id: 4,
            speakerName: "Samuel Mbonu",
            role: "ISC2 Nigeria President",
            topic: "Advanced Persistent Threat",
            image: Samuel,
        },
        {
            id: 5,
            speakerName: "Stephen Komna",
            role: "Software Engineer at Microsoft",
            topic: "",
            image: Stephen,
        },
        {
            id: 6,
            speakerName: "Tope James Moses",
            role: "NACOS NOUN National President",
            topic: "",
            image: James,
        },
    ])

    return (
        <div className="bg-white p-5 flex flex-col items-center">
            <h1 className="text-center font-inter text-2xl text-black font-bold py-3">
                Speakers
            </h1>
            <div className="flex flex-wrap justify-center">
                {speakers.map((speaker)=>(
                    <div key={speaker.id} className="flex flex-col lg:w-48 w-9/12 justify-center mx-8 my-4 items-center">
                        <img 
                            src={speaker.image} 
                            alt={`${speaker.speakerName}'s Picture`} 
                            className="w-full my-4"
                        />
                        <p className="text-xl text-center font-lato text-black">
                            {speaker.speakerName} <br />
                            <span className="text-gray-400 text-sm">({speaker.role})</span>
                        </p>
                        {(speaker.topic != "")?(<p className="font-lato text-gray-600">Talks About:</p>):''}
                        <p className="text-base text-gray-600 font-lato text-center">
                            {speaker.topic}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}