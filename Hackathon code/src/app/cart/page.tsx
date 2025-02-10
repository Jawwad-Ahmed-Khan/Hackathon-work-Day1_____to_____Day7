'use client'

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";
import { Producttype } from "../components/types/Product";
export default function Cart()
{
    const [products, setProducts] = useState<Producttype[]>([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
      const cart = JSON.parse(localStorage.getItem('cart') || '{}') as Producttype;
      const items = Object.values(cart);
      setProducts(items) ;

       let dummytotal=0;
      for (const i of items){

        dummytotal+=i.price * i.Quantity;
        
      }
      setTotal(dummytotal)
      console.log(items)
    }, []);

    const removeproduct = (ele:Producttype)=>{
        const cart = JSON.parse(localStorage.getItem('cart') || '{}');

      delete cart[ele.title];
      localStorage.setItem('cart', JSON.stringify(cart));
      setProducts(Object.values(cart))
      setTotal(total-(ele.price*ele.Quantity))
        
    }
    return(
        <div className=" mt-[72px] flex gap-14">
          <div className="flex flex-col gap-y-14 ml-[100px]">
            <div className="  w-[817px] h-14 bg-[#F9F1E7] grid items-center">

                  <div className=" flex justify-between text-[16px] font-medium">
                         <h1 className="whitespace-pre"> Product Image</h1>
                         <h1>Product</h1>
                         <h1 className="whitespace-pre"> Price</h1>
                         <h1>Quantity</h1>
                         <h1>Subtotal</h1>
                         <h1></h1>
                  </div>

            </div>

            <div className="grid text-[16px] text-[#9F9F9F] font-normal gap-y-4">

                {products.map((ele)=>(
                    <div key={ele._id} className="flex justify-between items-center ">

                       <div className="relative w-[108px] h-[105px]"> <Image src={ele.imageurl} alt="" layout="fill" objectFit="cover" className="rounded"></Image></div>
                        <h1>{ele.title}</h1>
                        <h1>Rs {ele.price}</h1>
                        <h1 className="w-8 h-8 border border-[#9F9F9F] text-black grid items-center justify-center rounded">{ele.Quantity}</h1>
                        <h1 className="text-black">Rs. {ele.price * ele.Quantity}</h1>
                       <button onClick={()=>{removeproduct(ele)}}> <Image src={"/delete.png"} alt="" width={21} height={21.88}></Image></button>
                    </div>
                ))}
                
            </div>

        </div>

        <div className=" w-[392px] h-[390px] bg-[#F9F1E7] flex items-center flex-col rounded-lg">
             <h1 className="mt-4 text-[32px] font-semibold">Cart Totals</h1>
             <div className="flex gap-[60px] mt-28 ">
                 <p>Total</p>
                 <h1 className="text-xl text-[#B88E2F] font-medium">Rs. {total}.00</h1>
             </div>

          <Link href="./checkout">   <button  disabled={total==0} className={`w-[222px] h-[60px] border border-black rounded-[15px] mt-16 text-xl font-normal hover:w-[236px] hover:h-16 hover:bg-[#B88E2F] transform duration-300 hover:text-white ${total == 0 ? "cursor-not-allowed" : ""}`}>Check Out</button> </Link>
        </div>

     </div>
    )
}