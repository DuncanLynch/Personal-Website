import HeaderButton from "./HeaderButton";

const NavButtons = {
    "Home": "/Home",
    "About": "/About",
    "Projects": "/Projects",
    "Resume": "/Resume",
    "Cats": "/Cats"
};

const NavBar = () => {
    return (
        <div id="NavBar" className={`" transition-all ease-in-out drop-shadow-2xl
          bg-gradient-to-r from-[#2d2657] to-[rgb(23,22,24)] duration-150 py-10  w-full flex justify-center h-[20%] "`}>
            <div className="flex justify-center lg:gap-8 md:gap-5 sm:gap-2  ">
                {Object.entries(NavButtons).map(([key, value]) => (
                    <>
                    <HeaderButton key={key} children={key} href={value}/>
                    {key !== "Cats" && (<view key={key + "43"} className=" h-full w-1 rounded-full bg-[#3e3b41] " /> )}
                    </>
                ))}
        </div>
        </div>
    );
};

export default NavBar;