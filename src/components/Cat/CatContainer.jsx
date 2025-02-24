'use client'
import { useState } from "react";
import { getCats } from "@/API/MeowCameraAPI/getCats";
import Image from "next/image";
import CatPane from "./CatPane";

const defaultCats = JSON.parse(await getCats());
const URL = "https://meow.camera/viewer/#";
const IMG_URL = "https://screenshots.meow.camera/";

export default function CatContainer(){
    let [catList, setCatList] = useState(defaultCats);

    return (
        <div className=" flex justify-center  py-5" >
            <div className=" grid grid-cols-2 gap-5 bg-[#211f22] rounded-lg p-7">
                {catList.map(cat => 
                    <CatPane catName={cat['name']} catTranslatedName={cat['translatedName']} catURL={URL + cat['id']} catIMG={IMG_URL+cat['id'] +".jpg"} />
                )}
            </div>
        </div>
    );
}