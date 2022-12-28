export default function Intro(){
    return (
        <div className="bg-first-div bg-center bg-cover bg-no-repeat font-inter">
            <div className="bg-headerBg lg:px-12 px-2 py-28 lg:py-32 text-white">
                <p className="text-grayText font-bold text-xl">
                    (Nacos Noun National)
                </p> <br />
                <h1 className="text-white lg:text-6xl text-3xl font-lato font-bold w-4/5">
                    The Nigerian Association of Computing
                    Students of the National 
                    Open University of Nigeria
                </h1>
                <div className="flex flex-row w-fit justify-around flex-wrap items-center px-0 py-10">
                    <a 
                        href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSfF8uzgSfjNrb17UvBkELw8n5kCwn6n9Qg86qOiIoSAcrTK9w/viewform"
                        className="btn no-animation text-white my-2 bg-greenUsed border-0 font-inter rounded px-12 hover:bg-greenUsed normal-case font-normal text-base"
                    >
                        Register
                    </a>

                    <a 
                        href="https://flutterwave.com/pay/s1kc9us86zlw"
                        className="btn no-animation text-white mx-6 my-2 bg-greenUsed border-0 font-inter rounded px-12 hover:bg-greenUsed normal-case font-normal text-base"
                    >
                        Get Ticket
                    </a>
                </div>
            </div>
        </div>
    )
}
