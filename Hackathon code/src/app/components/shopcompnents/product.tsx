'use client'
import Image from "next/image";
import { Product } from "../types/Product";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Shopproducts({productList,mainvalue}:{productList:Product[],mainvalue:number})
{
    //    const [showingProduct,_setShowingProduct]=useState(1);
        const [defaultValue,setDefaultValue]=useState(mainvalue);
        const inputdefaul_value=useRef<HTMLInputElement>(null);
        function handleinput(event:React.KeyboardEvent)
        {
            if(event.key === "Enter" && inputdefaul_value.current)
            {
                const setvalue = inputdefaul_value.current.value;
                
    
                if(!isNaN(Number(setvalue)))
                    setDefaultValue(Number(setvalue));
            }
    
        
        } //Yhan Bar Line kA code he 


     const [Page,setPage]= useState<Array<number>>([1,2,3]);      //Niche Page k liye Sara Code he
    const [currentpage,setCurrentPage]=useState(1);
    const Product_length=productList.length;
    const [ShowData,setShowData]=useState<Product[]>([]);

    function handlePageChange(pageIndex: number=0) {
        
        const start = (Page[pageIndex]-1)*defaultValue;   //konsa Product Phle ay ga start page[0]-1 = 0*defaultValue=0
        let end=(Page[pageIndex])*defaultValue;         //  End Konse Product Pr ho ga page[0]=1*defaultvalue=1 *16=16   
       end= end > Product_length ? Product_length : end;

        if(Page[pageIndex]!==currentpage && start<Product_length){  //Same Page pr kam nhi kare ga Ya me ne start ko value Zayada de di to kam nhi kaere
          
           const Data=productList.slice(start,end);    //Ek specific range me product nikalna
           setShowData(Data);

           if(Page[pageIndex]>currentpage && pageIndex==2)
           {
            
            setCurrentPage(Page[pageIndex]);
            setPage([Page[1],Page[2],Page[2]+1]);

           }else if(Page[pageIndex]<currentpage && pageIndex==0)
           {
                            
            setCurrentPage(Page[pageIndex]);
            if(Page[pageIndex]!==1)
            setPage([Page[0]-1,Page[0],Page[1]]);

           }else{

            setCurrentPage(Page[pageIndex]);

           }
            
         }        
    }

    function HandleNext(){
        let check=Math.ceil(Product_length/defaultValue);   // 24 / 16 = 2 total pages
           
        if(check>Page[2])  
       {
           check=check-Page[2] >3 ? 3 : check-Page[2];
            setPage([Page[0]+check,Page[1]+check,Page[2]+check]);
       }     
          
    }

    useEffect(()=>{
        const end=defaultValue >Product_length ?Product_length:defaultValue;
        const Data=productList.slice(0,end);
        setCurrentPage(1);
        setPage([1,2,3])
        setShowData(Data);
    },[defaultValue])
    
    return(
        <div>

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
                    <p className=" w-[220px] h-6 text-[16px] font-normal text-center ml-[34px] pt-1.5"> 
                              Showing {(currentpage-1)*defaultValue + 1}-{currentpage*defaultValue > Product_length ? Product_length : currentpage*defaultValue} of {productList.length} results
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
            
        </div>



        <div className="w-full mt-[63px] flex flex-col justify-center items-center">

            <div className="mx-[5%] flex flex-wrap gap-x-8 gap-y-10 justify-center">
            
            {
                ShowData.length > 0 ? (
                    ShowData.map((product: Product) => (
                        <div key={product._id} className='relative w-[285px] h-[446px] '>
                     <div className='group bg-black drop-shadow-lg hover:scale-105 transform duration-300'>
                        <div className='relative w-[285px] h-[301px] group-hover:opacity-50 transform duration-300'><Image src={product.imageurl} alt={product.title} layout='fill' objectFit='cover' />
                         <div className={`absolute grid items-center text-[16px] font-medium text-white justify-center w-12 h-12 ${product.isNew  == true ? "bg-[#2EC1AC]" : product.dicountPercentage >0 ?"bg-[#E97171]":"hidden"} top-6 left-[213px] rounded-full`}>
                                           <h1>{product.isNew == true ? "New":"-"+product.dicountPercentage+"%"}</h1>
                         </div>
                    
                        </div>
                        <div className='relative w-[285px] h-[145px] bg-[#F4F5F7] group-hover:opacity-50 transform duration-300'>
                                 <h1 className={`absolute top-4 left-4 w-[285px] h-[29px] text-2xl font-semibold text-[#3a3a3a]`}>
                                    {product.title}
                                 </h1>
                                 <h1 className={`absolute top-[53px] left-4 w-[285px] h-[29px] text-[16px] font-medium text-[#898989]`} >
                                        {product.title}
                                 </h1>
                                 <h1 className={`absolute top-[85px] left-4 w-[285px] h-[29px] text-xl font-semibold text-[#3a3a3a]`} >
                                        {product.dicountPercentage !=0 ? product.price - (product.price * product.dicountPercentage / 100) : product.price }
                                 </h1>
                                 <h1 className={`absolute top-[88px] left-[163px] w-[285px] h-[29px] text-[16px] font-normal line-through text-[#898989]`} >
                                        {product.dicountPercentage!=0? product.price : product.price }
                                 </h1>
                        </div>
                                <div className='absolute top-[175px] left-4 w-[252px] h-24 grid grid-cols-1 gap-6 justify-items-center text-[16px] font-semibold text-white opacity-0 group-hover:opacity-100 transform duration-300'>
                                  <Link href={`product/${product.slug}`}>  <button className='w-[202px] h-12 bg-white text-[#B88E2F] grid justify-center items-center active:bg-slate-300 rounded-lg transition-transform transform active:scale-95'>
                                                <p>Add to cart</p>
                                    </button> </Link> 
                                    <div className='w-[252px] h-6 flex gap-5'>

                                        <button className='w-[66] h-6 flex gap-[2px] justify-center items-center'><div className='relative w-4 h-4'><Image src="/Home/share.png" alt="" width={12} height={13.33}></Image></div>
                                        <h1 className='w-12 h-6'>Share</h1></button>
                                        <button className='w-24 h-6 flex gap-[2px] justify-center items-center'><div className='relative w-4 h-4'><Image src="/Home/compare.png" alt="" width={13.1} height={14} ></Image></div>
                                        <h1 className='w-[78px] h-6'>Compare</h1></button>
                                        <button className='w-[50] h-24 flex gap-[2px] justify-center'><div className='relative w-4 h-4'><Image src="/Home/like.png" alt="" width={13.84} height={11.9} className='mt-1.5'></Image></div>
                                        <h1 className='w-8 h-6'>Like</h1></button>

                                    </div>
                                </div>
                        </div>
                        </div>
                        
                    ))
                ) : (
                    <p>No ShowData available</p>
                )}            
    
            </div>

            <div className="mt-[4%] w-[392px] h-[60px] flex justify-center gap-[38px] text-xl font-normal">
               
               {
                Page.map((ele,index)=>{
                    return(
                        <button onClick={()=>{handlePageChange(index)}} key={index} className={`w-[60px] h-[60px]   ${currentpage==ele ?"bg-[#B88E2F] text-white" : " bg-[#F9F1E7] text-black"} ${((ele -1)*defaultValue ) >=Product_length ? "hidden" : ""} rounded-[10px] grid justify-center items-center`}>

                              {ele}

                        </button>
                    )
                })
               }

               <button onClick={HandleNext} className="w-[98px] h-[60px] bg-[#F9F1E7] rounded-[10px] ">Next</button>

            </div>
            
        </div>

        
       </div> 
    )
}