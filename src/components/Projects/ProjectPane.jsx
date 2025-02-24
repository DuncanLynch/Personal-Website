'use client'
import Image from "next/image"
export default function ProjectPane({desc, title, duration, img, url}){
    return (
        <button onClick={() => window.open(url,"_blank")} className=" relative grid gap-1 py-2 px-2 grid-cols-1 grid-flow-row bg-slate-100 min-w-[15%] min-h-[5%] transition-all ease-in duration-250 rounded-lg hover:bg-slate-300 w-fit h-fit border-spacing-8 border-4 border-sky-200 ">
            <div className=" flex justify-center items-center rounded-md bg-gray-400 ">
                <Image height={100} width={400} src={img} alt={title} className="rounded-md"/>
            </div>
            <view className=" h-1 w-full rounded-full bg-[#1b1a1b] " />
            <a className="text-xl text-gray-800">{title}</a>
            <a className="text-md text-gray-800">{duration}</a>
            <view className=" h-1 w-full rounded-full bg-[#1b1a1b] " />
            <a className="text-lg text-gray-800">{desc}</a>
        </button>
    );
}