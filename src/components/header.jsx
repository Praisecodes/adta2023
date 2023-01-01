export default function Header(){
    return (
        <div className="w-full font-inter py-1 px-2 lg:px-12 flex justify-between items-center bg-headerBg fixed top-0 left-0">
            <img src="https://nacosnoun.com.ng/images/l1.png" className="h-20" />
            <a 
                href="https://nacosnoun.com.ng" 
                className="btn no-animation border-0 bg-white normal-case font-normal text-black text-base hover:bg-whiteHover rounded px-3"
            >
                Become a Nacosite
            </a>
        </div>
    )
}