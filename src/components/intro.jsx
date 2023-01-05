export default function Intro(){
    return (
        <div className="animate-carousel bg-center bg-cover bg-no-repeat font-inter">
            <div className="bg-headerBg lg:px-12 px-2 h-screen flex flex-col justify-center text-white">
                <p className="text-grayText font-bold text-xl">
                    (Nacos Noun Presents)
                </p> <br />
                <h1 className="text-white lg:text-6xl text-3xl font-lato font-bold lg:w-4/5">
                    ADTA''23 CONFERENCE <br />
                    Advancing Technology and Innovation Conference
                </h1>
                <div className="py-10 flex flex-wrap">
                    <div className="w-fit lg:text-center font-lato text-base">
                        <a 
                            href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSfF8uzgSfjNrb17UvBkELw8n5kCwn6n9Qg86qOiIoSAcrTK9w/viewform"
                            className="btn no-animation text-white mt-6 bg-greenUsed border-0 font-inter rounded px-12 hover:bg-greenUsed normal-case font-normal text-base"
                        >
                            Register
                        </a>
                        <p className="text-grayText">Participant Tags || Online Swags</p>
                    </div>
                    {" "}
                    <div className="w-fit lg:text-center font-lato">
                        <a 
                            href="https://flutterwave.com/pay/s1kc9us86zlw"
                            className="btn no-animation text-white lg:mx-10 mt-6 bg-greenUsed border-0 font-inter rounded px-12 hover:bg-greenUsed normal-case font-normal text-base"
                        >
                            Get Ticket
                        </a>
                        <p className="text-grayText">
                            Certificate || Online Swags
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
