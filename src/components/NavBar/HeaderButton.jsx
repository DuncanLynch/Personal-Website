"use client"
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const HeaderButton = ({ children, href }) => {
    const router = useRouter();
    const pathname = usePathname();
    return (
        <button onClick={() => router.push(href)} className={`" rounded-lg hover:text-slate-800 transition-all ease-in duration-200 hover:bg-gray-300 text-3xl max-w-[50%] min-w-40 min-h-20 w-fit h-fit max-h-full hover:scale-[110%] ${pathname === href ? ' bg-slate-50 scale-[110%] text-slate-800 ' : ' text-white '} "`} >
            {children}
        </button>
    )
}

export default HeaderButton;