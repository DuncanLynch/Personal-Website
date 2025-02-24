import Image from "next/image";
export default function CatPane({catName, catTranslatedName, catURL, catIMG})
{
    return (
        <button onClick={() => {window.open(catURL,'_blank')}} className="hover:bg-white content-box transition-all ease-in-out duration-200 rounded-lg hover:text-gray-800" >
            <Image width={500} height={500} src={catIMG} className="rounded-lg" />
            <a>{catName}</a>
            { "「" + catTranslatedName + "」" }
        </button>
    );
}