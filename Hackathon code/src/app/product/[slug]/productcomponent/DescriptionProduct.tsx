'use client'
import Image from "next/image";

import { Product } from "@/app/components/types/Product";
import { useEffect, useState } from "react";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import AddtoCart from "@/Function/Addtocart";

export default function ProductCard({ product }: { product: Product }) {

     const [currentPageLink,setCurrentPageLink] = useState("")
     useEffect(()=>{
      setCurrentPageLink(window.location.href)
    
     },[]) 

    const [Quantity,setQuntity] = useState(1)

    const handleQuantity = (action:string) => {
      if (action == 'plus') {
        setQuntity((prev) => prev + 1);
      }
      else{
        if(Quantity>1)
          setQuntity((prev) => prev - 1);
      }
    }

  

    const Tags_print=product.tags.map((ele)=>(ele.charAt(0).toUpperCase()+ele.slice(1))).join(", ")

    const Key_features =()=>{

        const Des = product.description;
        const Position= Des.indexOf("Key Features:");
        return Des.slice(Position);

       } 
        const Featuers :string =Key_features();
       const Sizes_Array=["L","XL","XS"]
       const [current_size,setSize]=useState<number>(0)
       const color_list=["bg-[#816DFA]","bg-[#000000]","bg-[#B88E2F]"]
       const [current_color,setColor]=useState<string>("bg-[#816DFA]")
       const handlesetpage =(index:number)=>
       {
        setSize(index);
       }
       const handlecolor =(index:number)=>{
        setColor(color_list[index]);
       }

    return(
         <div className="mx-[4%] my-[4%] flex gap-[8%]">
                    <div className="w-[30rem] h-[35rem] relative"> <Image  src={product.imageurl} alt={product.title} layout="fill" objectFit="cover" className="rounded-md"/></div> 
                     <div className="w-[606px]">
                        
                        <h1 className="text-[42px] font-normal">{product.title}</h1>
                        <p className="text-2xl text-[#9F9F9F]"> Rs. {product.price}</p>
                        <p className="mt-[2%] text-justify">{Featuers}</p>
                        
                        <div className="mt-[22px] text-sm text-[#9F9F9F] ">
                             Size
                        </div>

                        <div className=" flex gap-4 mt-3">
                          {
                            Sizes_Array.map((ele,ind)=>(<button key={ind} onClick={()=>{handlesetpage(ind)}} className={`w-[30px] h-[30px] rounded grid items-center justify-center ${current_size === ind  ? "bg-[#B88E2F] text-white" : "bg-[#F9F1E7] text-black"} hover:scale-110 active:scale-95`}>
                                {ele}
                            </button>)
                            )
                          }
                        </div>

                        <h1 className="text-[#9F9F9F] text-sm mt-[18px]">Color</h1>

                        <div className="flex gap-4 mt-3">
                              {color_list.map((ele,ind)=>(
                               <button key={ind} onClick={()=>{handlecolor(ind)}}>
                                <div className={` w-10 h-10 flex items-center justify-center rounded-full ${current_color === ele ? "border-[3px] border-black" :""} active:scale-75 `}>
                                      <div className={`w-[30px] h-[30px]  ${ele} rounded-full`}>
                                        </div>  
                                </div> </button>
                                
                              ))}
                        </div>

                        <div className=" mt-8 flex gap-[18px] ">

                          <div className=" w-[123px] h-[64px] flex justify-center items-center border border-black rounded-[10px] text-[16px] font-normal">

                            <div className="flex justify-evenly w-full ">
                                <button onClick={()=>{handleQuantity("minus")}} className="w-6 h-6 rounded-full  hover:bg-[#B88E2F] hover:text-white active:scale-95">-</button>
                                <p className="font-medium">{Quantity}</p>
                                <button onClick={()=>{handleQuantity("plus")}} className=" w-6 h-6 rounded-full  hover:bg-[#B88E2F] hover:text-white active:scale-95">+</button>
                
                          </div>
                           
                        </div>

                        <button onClick={()=>{AddtoCart(product,Quantity,Sizes_Array[current_size],current_color)}} className="w-[215px] h-[64px] border border-black rounded-[15px] grid items-center transition-transform transform duration-300 hover:bg-[#B88E2F] hover:text-white  active:scale-95 active:" >
                                   <p className="text-xl font-normal">Add to Cart</p>
                        </button>
                        
                        <button className="w-[215px] h-[64px] font-normal border border-black rounded-[15px] flex gap-4 justify-center items-center ">
                                        <p className="text-[23px]">+</p>
                                        <p className="text-xl">Compare</p>
                        </button>

                        </div>
                             
                            
                       <div className="mt-[60px] w-full border "></div>

                       <div className="mt-[41px] grid gap-3 text-[#9f9f9f] text-[16px] font-normal">
                                   
                                  <div className="flex  gap-[52px]">
                                        <h1>Tags</h1>
                                        <p className="whitespace-pre">:    {Tags_print}</p>

                                  </div>

                                  <div className="flex  gap-[44px]">
                                    <h1>Share </h1>
                                    <div className="flex gap-3"><p>:</p>
                                         <div className=" flex gap-[25px]">
                                           <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentPageLink)}`}
                                          target="_blank"
                                         rel="noopener noreferrer"> 
                                            <FaFacebook className="text-2xl text-black hover:text-blue-600  hover:text-3xl active:scale-95" /> </a>
                                            <a
                                                  href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(currentPageLink)}`}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                            >
                                                      <FaLinkedin className="text-2xl text-black hover:text-blue-500 hover:text-3xl active:scale-95" />
                                              </a>
                                              <a
                                                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(currentPageLink)}`}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                >
                                                     <div className="w-7 h-7 bg-black rounded-full relative hover:bg-green-500 hover:w-8 hover:h-8  "> <FaWhatsapp className="absolute left-[1.75px] top-[1px] text-2xl text-white hover:text-3xl active:scale-95" /> </div>
                                                    </a>
                                         </div>
                                    </div>
                                  </div>

                       </div>
                        
        
                     </div>
                     
               </div>
    )
}