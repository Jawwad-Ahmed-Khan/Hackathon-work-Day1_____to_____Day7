// app/billing/page.tsx
"use client";

import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { Producttype } from '../components/types/Product';

export default function BillingPage() {
  // Define the state for your div fields
  const {user}=useUser();
  const [formData, setFormData] = useState({
    userID:user?.id,
    firstName: '',
    lastName: '',
    companyName: '',
    country: 'Pakistan',
    streetAddress: '',
    city: '',
    province: '',
    zipCode: '',
    phone: '',
    email: '',
    additionalInfo: '',
    payment_method:"",
    payment_status:"pending",
    
  });

  const [products, setProducts] = useState<Producttype[]> ([]);
    const [total, setTotal] = useState(0);
     useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart') || '{}');
        const items :Producttype[] = Object.values(cart);
        setProducts(items) ;
         let dummytotal=0;
        for (const i of items){
  
          dummytotal+=i.price * i.Quantity;
          
        }
        setTotal(dummytotal)

        const orderProduct=items.map((ele)=>{
    
          return ({productID:ele._id,
                  productName:ele.title,
                   size:ele.Size,
                   quantity:ele.Quantity,
                   pricePerUnit:ele.price,
                   totalPrice:ele.price*ele.Quantity
                  })
           
      })

      

      setFormData((pre)=>({...pre,orderProduct}))
        
      }, []);


  

  const [Payment_method,setPayment] =useState<string[]>(["Credit / Debit Card","Bank Transfer","Cash On Deleviry"]);

  useEffect(()=>{
    setPayment(["Credit / Debit Card","Bank Transfer","Cash On Deleviry"])
  },[])
  const [payment_Style,setPaymentsytle]=useState(-1)

  function handlePaymentMethodSelection(paymentmethod_index:number)
  {
          setPaymentsytle(paymentmethod_index)
          setFormData((pre)=>({...pre,payment_method:Payment_method[paymentmethod_index]}))
          
  }

  const pakistanCities = {
    Punjab: [
      "Lahore",
      "Faisalabad",
      "Rawalpindi",
      "Multan",
      "Gujranwala",
      "Sialkot",
      "Bahawalpur",
      "Jhang",
      "Sheikhupura",
      "Sahiwal"
    ],
    Sindh: [
      "Karachi",
      "Hyderabad",
      "Sukkur",
      "Nawabshah",
      "Mirpur Khas",
      "Larkana"
    ],
    "Khyber Pakhtunkhwa": [
      "Peshawar",
      "Mardan",
      "Swabi",
      "Abbottabad",
      "Bannu",
      "Mansehra",
      "Dera Ismail Khan"
    ],
    Balochistan: [
      "Quetta",
      "Turbat",
      "Khuzdar",
      "Gwadar"
    ],
    Islamabad: [
      "Islamabad"
    ],
    Gilgit: ["Gilgit Baltistan"],
    NUll: []
  };

  const Province = ["Sindh", "Punjab", "Khyber Pakhtunkhwa", "Balochistan", "Islamabad", "Gilgit Baltistan"];

  // Handle input changes for both <input>, <textarea>, and <select>
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(formData);
  };
 
  async function handlesubmit(e:React.MouseEvent<HTMLButtonElement>)
  {
    e.preventDefault();

    if(formData.userID== undefined || formData.userID== "")

      { 
        const userID=user?.id
        setFormData((pre)=>({...pre,userID}))
      }
      try {
        const response = await fetch('/api/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
    
        if (!response.ok) {
          throw new Error('Order submission failed');
        }
    
        const result = await response.json();
        console.log('Order created:', result);
        
        // Clear cart and redirect
        localStorage.removeItem('cart');
       
        
      } catch (error) {
        console.error('Error submitting order:', error);
        alert('Order submission failed. Please try again.');
      }
 
    }

  return (
    <div className=''>
      <div className="mt-16 mx-[5%] flex gap-6">
        <div className='w-[608px] h-[1714px]] ml-[120px]'>
          <h2 className="text-4xl font-semibold mt-9">Billing Details</h2>
          <div  className="text-[16px] font-medium">
            <div className="mt-9">
              <div className='flex gap-8'>
                <label htmlFor="firstname" className='w-[217px]'>First Name</label>
                <label htmlFor="lastName" className='w-[217px]'>Last Name</label>
              </div>
              <div className='flex gap-8'>
                <input
                  id="firstname"
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  required
                  className="border border-[#9F9F9F] w-[211px] h-[75px] rounded-[10px] mt-[22px]"
                />
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  required
                  onChange={handleChange}
                  className="border border-[#9F9F9F] w-[211px] h-[75px] rounded-[10px] mt-[22px]"
                />
              </div>
            </div>
            <div className='mt-9'>
              <label htmlFor="companyName">Company Name (Optional)</label>
              <input
                id="companyName"
                type="text"
                name="companyName"
                onChange={handleChange}
                className="w-[453px] h-[75px] border border-[#9F9F9F] rounded-[10px] mt-[22px]"
              />
            </div>
            <div className='mt-9'>
              <h1>Country</h1>
              <input
                id="country"
                type="text"
                value={formData.country}
                readOnly
                className='w-[453px] h-[75px] border mt-[22px] text-gray-400 border-[#9F9F9F] rounded-[10px] cursor-not-allowed'
              />
            </div>
            <div className='mt-9'>
              <label htmlFor="province">Province</label>
              <br />
              <select
                name="province"
                id="province"
                required
                value={formData.province}
                onChange={handleChange}
                className='w-[453px] h-[75px] border border-[#9F9F9F] rounded-[10px] mt-[22px]'
              >
                <option value="">Choose A Province</option>
                {Province.map((province, idx) => (
                  <option key={idx} value={province}>{province}</option>
                ))}
              </select>
            </div>
            <div className='mt-9'>
              <label htmlFor="city">City</label>
              <br />
              <select
                id="city"
                name="city"
                required
                onChange={handleChange}
                className="w-[453px] h-[75px] border border-[#9F9F9F] rounded-[10px] mt-[22px]"
              >
                <option value="">Select City</option>
                {(pakistanCities[formData.province as keyof typeof pakistanCities]  || []).map((city:string, idx:number) => (
                  <option key={idx} value={city}>{city}</option>
                ))}
              </select>
            </div>
            <div className='mt-9'>
              <label htmlFor="streetAddress"> Street Address</label>
              <br />
              <input
                required
                type="text"
                id="streetAddress"
                name="streetAddress"
                placeholder="Street Address"
                onChange={handleChange}
                className="border border-[#9f9f9f] w-[453px] mt-[22px] h-[75px] rounded-[10px]"
              />
            </div>
            <div className='mt-9'>
              <label htmlFor="Zipcode"> Zip Code</label>
              <br />
              <input
                id="Zipcode"
                type="text"
                name="zipCode"
                placeholder="ZIP Code"
                onChange={handleChange}
                className="border border-[#9f9f9f] w-[453px] mt-[22px] h-[75px] rounded-[10px]"
              />
            </div>
            <div className='mt-9'>
              <label htmlFor="phone"> Phone</label>
              <br />
              <input
                required
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                className="border border-[#9f9f9f] w-[453px] mt-[22px] h-[75px] rounded-[10px]"
              />
            </div>
            <div className='mt-9'>
              <label htmlFor="email"> Email</label>
              <br />
              <input
                required
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                className="border border-[#9f9f9f] w-[453px] mt-[22px] h-[75px] rounded-[10px]"
              />
            </div>
            <div className='mt-9'>
              <label htmlFor="info"> Additional Information</label>
              <br />
              <textarea
                name="additionalInfo"
                id="info"
                placeholder="Additional Information"
                onChange={handleChange}
                className="border border-[#9f9f9f] w-[453px] mt-[22px] h-[75px] rounded-[10px]"
              ></textarea>
            </div>
            <div className='mt-9'>
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className='w-[533px]  mt-28 flex flex-col gap-y-9  text-[16px] font-normal'>
            <div className='flex justify-between text-2xl font-semibold'>
              <h1>Product</h1>
              <h1>Subtotal
                </h1>
              </div>
             
             {products.map((ele)=>(
              <div key={ele._id}  className='flex justify-between'>
                <h1 className='text-[#9f9f9f] inline-flex'>{ele.title} &emsp; <p className='text-black'>x  &emsp; {ele.Quantity}</p></h1>
                <h1 className=' font-light'> Rs. {ele.price * ele.Quantity}.00</h1>
              </div>
             ))}
         
           <div className='flex justify-between'>
            <h1>Total</h1>
            <h1 className='text-2xl font-bold text-[#B88E2F] '>Rs. {total}.00</h1>
           </div>
              
            <div className='border border-[#D9D9D9]'></div>  

            <div className='grid gap-10 text-[16px] font-normal '>
                    {Payment_method.map((ele,idx)=>(
                      <div key={idx} className='flex gap-3 items-center  '>
                            <button onClick={()=>{
                              if(idx!=payment_Style)
                              handlePaymentMethodSelection(idx);
                            }} className={`w-3.5 h-3.5 rounded-full border border-black ${idx == payment_Style ? 'bg-black' : ''} `}>

                            </button>
                            <p>{ele}</p>
                      </div>
                    ))}
  
             </div>

            <div className='flex justify-center text-xl font-normal'>
             <button onClick={handlesubmit} className='w-[318px] h-16 border border-black rounded-[15px] hover:bg-[#B88E2F] transform duration-300 hover:-translate-y-1 hover:text-white'>Place Order</button>
              </div> 
        </div>
      </div>
    </div>
  );
}
