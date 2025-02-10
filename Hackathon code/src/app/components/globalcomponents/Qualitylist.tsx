'use client'
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Marketing() {

    let Mainpath: string | null = usePathname();
    if (Mainpath !== '/') {
        Mainpath = (Mainpath.split('/'))[1];
        Mainpath = Mainpath.replace(Mainpath[0], Mainpath[0].toUpperCase());
    } else {
        Mainpath = null;
    }

    return (
        <div>
            {Mainpath &&
                <div className="w-full bg-[#FAF3EA] mt-[85px] md:h-[270px] flex items-center">
                    <div className="mx-[4%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-6 w-full max-w-[1200px]">
                        
                        {/* High Quality */}
                        <div className="flex items-center gap-4 justify-center md:justify-start">
                            <div className="relative w-[60px] h-[60px]">
                                <Image 
                                  src="/cup.png" 
                                  alt="High Quality" 
                                  width={60} 
                                  height={52.77} 
                                />
                            </div>
                            <div className="text-center md:text-left">
                                <h1 className="text-[22px] md:text-[25px] font-semibold">
                                    High Quality
                                </h1>
                                <p className="text-[#898989] text-lg md:text-xl font-medium">
                                    crafted from top materials
                                </p>
                            </div>
                        </div>

                        {/* Warranty Protection */}
                        <div className="flex items-center gap-4 justify-center md:justify-start">
                            <div className="relative w-[60px] h-[60px]">
                                <Image 
                                  src="/check.png" 
                                  alt="Warranty Protection" 
                                  width={60} 
                                  height={58.13} 
                                />
                            </div>
                            <div className="text-center md:text-left">
                                <h1 className="text-[22px] md:text-[25px] font-semibold">
                                    Warranty Protection
                                </h1>
                                <p className="text-[#898989] text-lg md:text-xl font-medium">
                                    Over 2 years
                                </p>
                            </div>
                        </div>

                        {/* Free Shipping */}
                        <div className="flex items-center gap-4 justify-center md:justify-start">
                            <div className="relative w-[60px] h-[60px]">
                                <Image 
                                  src="/shipping.png" 
                                  alt="Free Shipping" 
                                  width={60} 
                                  height={55.97} 
                                />
                            </div>
                            <div className="text-center md:text-left">
                                <h1 className="text-[22px] md:text-[25px] font-semibold">
                                    Free Shipping
                                </h1>
                                <p className="text-[#898989] text-lg md:text-xl font-medium">
                                    Order over 150 $
                                </p>
                            </div>
                        </div>

                        {/* 24/7 Support */}
                        <div className="flex items-center gap-4 justify-center md:justify-start">
                            <div className="relative w-[60px] h-[60px]">
                                <Image 
                                  src="/support.png" 
                                  alt="24/7 Support" 
                                  width={52.94} 
                                  height={60} 
                                />
                            </div>
                            <div className="text-center md:text-left">
                                <h1 className="text-[22px] md:text-[25px] font-semibold">
                                    24 / 7 Support
                                </h1>
                                <p className="text-[#898989] text-lg md:text-xl font-medium">
                                    Dedicated support
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            }
        </div>
    )
}
