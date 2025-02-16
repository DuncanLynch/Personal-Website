import HeaderButton from "./HeaderButton";

const NavButtons = {
    "Home": "/Home",
    "About": "/About",
    "Projects": "/Projects",
    "Resume": "/Resume",
    "Github": "https://www.github.com/duncanlynch"
};

const NavBar = () => {
    return (
        <div id="NavBar" className={`" transition-all ease-in-out drop-shadow-2xl
          bg-gradient-to-r from-[#2e2b30] to-[#171618] duration-150 py-10  w-full flex justify-center h-[20%] "`}>
            <div className="flex gap-40">
                {Object.entries(NavButtons).map(([key, value]) => (
                    <>
                    <HeaderButton key={key} children={key} href={value}/>
                    {key !== "Github" && (<view key={key + "43"} className=" h-full w-1 rounded-full bg-[#3e3b41] " /> )}
                    </>
                ))}
        </div>
        </div>
    );
};

export default NavBar;