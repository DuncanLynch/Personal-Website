import Image from "next/image";
const IMG = ""
const Page = ({}) => {
    return (
        <div id="Main" className="flex justify-center p-8">
            <div id="About" className=" h-full w-[75%] flex jusify-center items-center flex-col gap-5 ">
                <div id="Header" className="text-6xl text-center ">Duncan Lynch</div>
                <div className="grid grid-rows-1 items-center justify-center justify-items-center">
                    <div id="Intro" className="text-2xl text-center h-[25%] w-[50%] py-4">Hello! My name is Duncan Lynch, and I am a 2/3 
                        (graduating in my junior year) Computer Science major at Stevens Institute of Technology! 
                        I'm especially interested in embedded systems and I am preparing some projects to work in my free time to connect all my skills.
                        If you'd like to see my current projects you can check them out under my projects tab. 
                        </div>
                    </div>    
            </div>
        </div>
    );
}

export default Page;