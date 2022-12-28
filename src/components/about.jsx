export default function About() {
    return (
        <div className="bg-white py-12 flex flex-row justify-center items-center flex-wrap h-fit font-inter">
            <div className="bg-about-div bg-contain bg-center bg-no-repeat lg:w-1/2 w-full h-80">
            </div>
            <div className="lg:w-1/2 w-full px-2 py-6 lg:p-0">
                <h1 className="text-black text-3xl font-bold">
                    About (Nacos Noun National)
                </h1>

                <p className="pr-10 text-lg text-gray-500 font-lato py-5">
                    We now live in world where nearly everything is being digitalized. It has been said repeatedly that the next generation belong to the young people of today.
                    <br /><br />
                    Bearing in the mind that National Open University has the highest number of Nigeria, Computer Science & information Technology Student in Nigeria in the country that we make good use of the number of schools in particular the I.T related aspect of our studying to really count.
                </p> <br />
                <div>
                    <a
                        href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSfF8uzgSfjNrb17UvBkELw8n5kCwn6n9Qg86qOiIoSAcrTK9w/viewform"
                        className="btn no-animation text-white my-2 bg-greenUsed border-0 font-inter rounded px-12 hover:bg-greenUsed normal-case font-normal text-base"
                    >
                        Register
                    </a>
                    {" "}
                    <a
                        href="https://flutterwave.com/pay/s1kc9us86zlw"
                        className="btn no-animation text-white lg:mx-6 my-2 bg-greenUsed border-0 font-inter rounded px-12 hover:bg-greenUsed normal-case font-normal text-base"
                    >
                        Get Ticket
                    </a>
                </div>
            </div>
        </div>
    )
}