'use client'


import Image from "next/image"
import { usePathname } from "next/navigation"


export default function Herosection()
{
      let Mainpath:string | null =usePathname();
      if(Mainpath!='/')
       { Mainpath= (Mainpath.split('/'))[1];
        Mainpath=Mainpath.replace(Mainpath[0],Mainpath[0].toUpperCase());
       }else
         Mainpath=null; 

    return(
        <div>

          { Mainpath && <div className="relative w-full h-[316px] grid justify-center">

             <Image src="/Rectangle.png" alt="" layout="fill" objectFit="cover" className="rounded"></Image> 

                  <div className=" mt-[61px] grid grid-cols-1 justify-items-center w-[124px] h-24 z-10">

                     <div className="w-[50px] h-8 mb-[14px]"> <Image src="/Navbar/websitelogo.png" alt="" width={50} height={32} className="ml-2.5"/> </div>
                    <h1 className={`w-[124px] h-[72px] font-medium text-5xl text-[#000000]`}>{Mainpath}</h1>
                    <div className="ml-1 flex gap-1.5 text-[16px] font-medium justify-center">
                          <h1>Home</h1>
                           <h1>&gt;</h1>
                           <h1 className="font-light">{Mainpath}</h1>
                    </div>
                  </div>

            </div>
}
        </div>
    )
}