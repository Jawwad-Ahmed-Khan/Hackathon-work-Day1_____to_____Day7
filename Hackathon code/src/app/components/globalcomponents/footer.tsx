import Link from "next/link";

export default function Footer()
{

    return( 
      <div>
        <div className="border-t border-black border-opacity-[.17]">

            <div className=" mx-[7%] my-[3.3%] flex justify-between flex-wrap">
                
                <div className="w-[285px] h-[158px] grid grid-col-1 gap-[50px]">
                        <h1 className="w-[85px] h-9 text-2xl font-bold">
                         Funiro.
                        </h1>
                        <p className="w-[290px] h-[72px] text-[#9F9F9F] text-[16px] font-normal">400 University Drive Suite 200 Coral <br />Gables,<br />FL 33134 USA</p>
                </div>

                <ul className="w-[66px] text-[16] font-medium grid grid-cols-1 gap-[46px]">
                <li className="text-[#9F9F9F]">Links</li>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"./shop"}>Shop</Link></li>
                <li><Link href={""}>About</Link></li>
                <li><Link href={""}>Contact</Link></li>
                </ul>
                
                <ul className="w-[140px] text-[16] font-medium grid grid-cols-1 gap-[46px]">
                <li className="text-[#9F9F9F]">Help</li>
                <li><Link href={"/"}>Payment Options</Link></li>
                <li><Link href={"./shop"}>Returns</Link></li>
                <li><Link href={""}>Privacy Policies</Link></li>
                </ul>

                <div className="w-[286px] grid grid-cols-1 gap-[46px]">

                    <h1 className="text-[#9F9F9F]">Newsletter</h1>
                    <div className="flex gap-[11px]">
                        <input type="email" placeholder="Enter Your Email Address" className="w-[200px] h-6 text-sm font-normal border-b border-black " />
                        <button className="text-sm font-medium w-[75px] h-[21px] underline underline-offset-[9px]">SUBSCRIBE</button>
                    </div>

                </div>

            </div>
           
        </div>
        <div className=" mx-[7%] my-[3.3%] border-t" >
             <p className="mt-9 text-[16px] font-normal">2023 furino. All rights reverved</p>
        </div>
        </div>
    )
} 