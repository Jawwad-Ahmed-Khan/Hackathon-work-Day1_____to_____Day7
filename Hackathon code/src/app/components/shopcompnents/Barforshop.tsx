'use client'
import Image from "next/image"
import { Product } from "../types/Product"
import {useRef, useState } from "react"
import Shop from "./product"
import React from "react"
export default function Barline({productList}:{productList:Product[]})
{
     const [showingProduct,setShowingProduct]=useState(1);
     setShowingProduct(1);
         
    const [defaultValue,setDefaultValue]=useState(16);
    const inputdefaul_value=useRef<HTMLInputElement>(null);
    function handleinput(event:React.KeyboardEvent)
    {
        if(event.key === "Enter" && inputdefaul_value.current)
        {
            const setvalue = inputdefaul_value.current.value;
            

            if(!isNaN(Number(setvalue)))
                setDefaultValue(Number(setvalue));
        }

    
    }

    return(
    <div>    
    <div className="relative w-full h-[100px] bg-[#F9F1E7] flex">
    <div className="flex gap-3 ml-[98px] pt-[37px]">
         <div className="relative w-[25px] h-[25px]"><Image src={"/shop/filter.png"} alt="" width={19.05} height={16.67} className="absolute top-[4.76] left-[2.98px]"></Image> </div>
          <h1 className="text-xl font-normal">Filter</h1>
    </div>

    <div className="ml-[23px] pt-[36px] h-7 w-[100px] flex gap-6 ">

        <div className="relative w-7 h-7">
                 <Image src={"/shop/fourdots.png"} alt="" width={16.33} height={16.33} className="absolute top-[5.83px] left-[5.83px]"></Image>
        </div>
        <div className="relative w-6 h-6 ">
                <Image src={"/shop/decorate.png"} alt="" width={21} height={19.5} className="absolute top-1 left-[1.5px]"></Image>
        </div>
    </div>
    
    <div className="ml-[30px] mt-[31px] border-l-2 border-[#9F9F9F] w-[237px] h-[37px]">
            <p className=" w-[210px] h-6 text-[16px] font-normal text-center ml-[34px] pt-1.5"> 
                      Showing {showingProduct}-{defaultValue} of {productList.length} results
            </p>
    </div>

    <div className="absolute right-0 w-32 h-[55px] mr-[417px] flex items-center gap-[17px] top-[22px]">

        <h1 className="text-xl font-normal">Show</h1>
        <input type="text" ref={inputdefaul_value} placeholder={defaultValue.toString()} onKeyDown={handleinput} className="w-[55px] h-[55px] outline-none border-none text-center"/>

    </div>

    <div className="absolute right-0 top-[22px] mr-[100px] w-[288px] h-[55px] flex gap-[17px] items-center">
            <h1 className="text-xl font-normal">Sort by</h1>
            <input type="text" placeholder="Default" className="w-[188px] h-[55px] outline-none border-none text-center"/>
    </div>

    </div>
     <Shop productList={productList} mainvalue={defaultValue}/>
</div>
    )

}