export default function Header(){
    return (
        <div className="w-full font-inter py-4 px-2 lg:px-12 flex justify-between bg-headerBg fixed top-0 left-0">
            <h1 className="text-white text-3xl">
                ഥധഉധ
            </h1>
            <a 
                href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSfF8uzgSfjNrb17UvBkELw8n5kCwn6n9Qg86qOiIoSAcrTK9w/viewform" 
                className="btn no-animation border-0 bg-white normal-case font-normal text-black text-base hover:bg-whiteHover rounded px-8"
            >
                Register
            </a>
        </div>
    )
}