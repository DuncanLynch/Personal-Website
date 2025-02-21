'use client'
import { useState } from "react";
import { getCats } from "@/API/MeowCameraAPI/getCats";
import Image from "next/image";

const defaultCats = JSON.parse(await getCats());
const URL = "https://meow.camera/viewer/#";
const IMG_URL = "https://screenshots.meow.camera/";

export default function CatContainer(){
    let [catList, setCatList] = useState(defaultCats);

    return (
        <div className=" flex justify-center  py-5" >
            <div className=" grid grid-cols-2 gap-2 bg-black rounded-lg p-5">
                {catList.map(cat => 
                    <div className="border" href={URL + cat['id']}>
                        <Image src={IMG_URL + cat['id'] + ".jpg"} width={400} height={400} />
                    <a href={URL + cat['id']} >{cat['name'] +" " + cat['translatedName']}</a>
                    </div>
                )}
            </div>
        </div>
    );
}