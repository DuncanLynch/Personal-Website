const Page = ({}) => {
    return (
        <div id="Main" className="flex justify-center p-8">
            <div id="Recent News" className="rounded-xl bg-[#362f3a] h-auto w-[25%] inline-grid transition-all ease-in-out duration-150 p-2 hover:border-1 hover:scale-[115%] ">
                <header className="text-3xl text-center">Recent News</header>
                <view className="rounded-full h-1 w-full  bg-white"/>
                <ul className="py-2 px-2 text-lg">
                    <li className=" px-2 py-2 hover:bg-[#786f7e] rounded-md transition-all duration-75">2/16/25  -  I am in the process of designing the website rn! </li>
                    <li className=" px-2 py-2 hover:bg-[#786f7e] rounded-md transition-all duration-75">2/23/25  -  I created the Cats tab, check it out to see links to all active cat feeders on meow.camera!!!!!</li>
                </ul>
            </div>
        </div>
    );
}

export default Page;