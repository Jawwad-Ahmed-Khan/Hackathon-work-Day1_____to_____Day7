'use client'
import Image from "next/image";
import { useState } from "react";

export default function Contact()
{
    const [usercontact,setUsercontact] = useState({
        name:"",
        email:"",
        subject:"",
        message:""
    })


    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        setUsercontact((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        console.log(usercontact);
      };
    return(
        <div>
            
                <h1 className="mt-24 flex justify-center text-4xl font-semibold sm:text-2xl sm:font-medium">Get In Touch With Us</h1>
            <div className="flex justify-center">

                <p className="w-[616px] text-center">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>

            <div className="mt-[130px] flex justify-evenly">

                <div className="grid grid-cols-1 gap-[42px]">
                       <div className="flex gap-[30px]">
                        <div className="w-7 h-7">   <Image src="/location.png" alt="" width={22} height={27.6}></Image> </div>
                           <div className="grid ">
                              <h1 className="text-2xl font-medium">Address</h1>
                              <p className="w-[212px] text-[16px]">236 5th SE Avenue, New York NY10000, United States</p>
                           </div>

                       </div>

                       <div className="flex gap-[30px] ">
                        <div className="w-[30px] h-[30px] grid items-center justify-center ">   <Image src="/phone.png" alt="" width={22.7} height={22.7}></Image> </div>
                           <div className="grid ">
                              <h1 className="text-2xl font-medium">Phone</h1>
                              <p className="w-[212px] text-[16px]">Mobile: +(84) 546-6789<br/>Hotline:+(84) 456-6789</p>
                           </div>

                       </div>

                       <div className="flex gap-[30px]">
                        <div className="w-6 h-6 mt-[2.5px]">   <Image src="/timing.png" alt="" width={23} height={23}></Image> </div>
                           <div className="grid ">
                              <h1 className="text-2xl font-medium">Workig Time</h1>
                              <p className="w-[212px] text-[16px]">Monday-Friday: 9:00 - 22:00 <br />Saturday-Sunday: 9:00 - 21:00</p>
                           </div>

                       </div>
                </div>

                <form action="" className=" flex flex-col gap-[36px] text-[16px] font-medium">
                    <div >
                         <label htmlFor="Name" >Your Name</label>
                         <br />
                         <input id="Name" 
                         type="text"
                         name="name"
                         onChange={handleChange} required className="border border-[#9f9f9f] w-[528px] h-[75px] rounded-[10px] mt-[22px]" />
                    </div>

                    <div >
                         <label htmlFor="Email" >Email Address</label>
                         <br />
                         <input id="Email" 
                         type="email"
                         name="Email"
                         onChange={handleChange} required className="border border-[#9f9f9f] w-[528px] h-[75px] rounded-[10px] mt-[22px]" />
                    </div>

                    <div >
                         <label htmlFor="subject" >Subject</label>
                         <br />
                         <input id="subject" 
                         type="text"
                         name="subject"
                         onChange={handleChange} required className="border border-[#9f9f9f] w-[528px] h-[75px] rounded-[10px] mt-[22px]" />
                    </div>

                    <div >
                         <label htmlFor="Message" >Message</label>
                         <br />
                         <textarea id="Message"
                         name="message"
                         onChange={handleChange} required className="border border-[#9f9f9f] w-[528px] h-28 rounded-[10px] mt-[22px]" />
                    </div>

                    <button type="submit" className="w-[217px] h-14 bg-[#B88E2F] rounded-[5px] text-white hover:bg-[#B88000] hover:-translate-y-2 hover:drop-shadow-md">Submit</button>
                </form>
    

            </div>

            
        </div>
    )
}