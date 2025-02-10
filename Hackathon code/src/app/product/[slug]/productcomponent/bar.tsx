'use client'
import { usePathname } from "next/navigation";

export default function Barline({title}:{title:string})
{
    let Mainpath:string | null =usePathname();
        if(Mainpath!='/')
         { Mainpath= (Mainpath.split('/'))[1];
          Mainpath=Mainpath.replace(Mainpath[0],Mainpath[0].toUpperCase());
         }else
           Mainpath=null;
          
          return(
            <div className="text-[16px] font-normal">
                  <div className="w-full h-[100px] bg-[#F9F1E7] flex gap-4 items-center sm:gap-3">
                    <h1 className="ml-[10%] text-[#9F9F9F] sm:ml-[3%]">Home </h1>
                    <div className="text-xl">&gt;</div>
                    <h1 className="text-[#9F9F9F]">{Mainpath}</h1>
                    <div className="text-xl">&gt;</div>
                    <div className="h-[35px] border-l border-[#9F9F9F]"></div>
                    <h1 className="">{title}</h1>
                  </div>
            </div>
          ) 

}