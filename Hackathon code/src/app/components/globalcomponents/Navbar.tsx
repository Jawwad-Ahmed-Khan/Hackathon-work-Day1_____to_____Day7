'use client'
import {useState } from 'react'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { Producttype } from '../types/Product'

const montserrat = Montserrat({
  subsets: ['latin'],
})

const Navibar = () => {
  // State to toggle the mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [showcartlist,setCartlist] = useState(false)

  const [Product,setProducts] = useState<Producttype[]>([])
   
    const [total,setTotal]=useState(0)

  function showlist()
  {
    const cart = JSON.parse(localStorage.getItem('cart') || '{}');
    const item:Producttype[]=Object.values(cart) ;
    setProducts(Object.values(cart));

    if(item.length >0)
       {
        let dummytotal=0;
        for (const i of item){
  
          dummytotal+=i.price * i.Quantity;
          
        }
        setTotal(dummytotal)
       }
    
    setCartlist(!showcartlist)
  }

  const removeproduct = (ele:Producttype)=>{
    const cart = JSON.parse(localStorage.getItem('cart') || '{}');

  delete cart[ele.title];
  localStorage.setItem('cart', JSON.stringify(cart));
  setProducts(Object.values(cart))}

            

  return (
    <div  className={`${montserrat.className} relative w-full h-[100px]`}>
      {/* Logo – remains in the same position */}
      <div className="absolute w-[185px] h-[41px] top-[29px] left-[54px] flex gap-[5px] items-center justify-center">
        <div className="w-[50px] h-8">
          <Image
            src="/Navbar/websitelogo.png"
            alt="Furniro Logo"
            width={50}
            height={32}
          />
        </div>
        <h1 className="w-[130px] h-[41px] text-[34px] mb-1 font-bold">Furniro</h1>
      </div>

      {/* Desktop Navigation Links (visible on md and larger) */}
      <div className="hidden md:block bg-white font-medium text-[16px] absolute top-[38px] left-[505px] w-[430px] h-6">
        <ul className="flex justify-between">
          <li>
            <Link href="./">Home</Link>
          </li>
          <li>
            <Link href="../shop">Shop</Link>
          </li>
          <li>
            <Link href="./blog">Blog</Link>
          </li>
          <li>
            <Link href="./contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Desktop Icons (visible on md and larger) */}
      <div className="hidden md:flex absolute top-9 left-[1093px] w-[247px] h-7 justify-between">
        <div className="relative w-7 h-7">
          <Image
            src="/Navbar/user.png"
            alt="User"
            width={23.33}
            height={18.67}
            className="absolute top-[4.67px] left-[2.33px]"
          />
        </div>
        <div className="relative w-7 h-7">
          <Image
            src="/Navbar/search.png"
            alt="Search"
            width={22.17}
            height={22.17}
            className="absolute top-[2.33px] left-[2.33px]"
          />
        </div>
        <div className="relative w-7 h-7">
          <Image
            src="/Navbar/whishlist.png"
            alt="Wishlist"
            width={23.33}
            height={20.81}
            className="absolute top-[3.5px] left-[2.33px]"
          />
        </div>
        <div className="relative w-7 h-7">
         <button onClick={showlist}> <Image
            src="/Navbar/cart.png"
            alt="Cart"
            width={24.53}
            height={22.06}
            className="absolute top-[3.55px] left-[1.67px]"
          /> </button>
        </div>
      </div>

      {/* Mobile Hamburger Button (visible on mobile only) */}
      <div className="absolute top-[29px] right-[20px] md:hidden flex items-center">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {/* Hamburger icon SVG */}
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay – toggled with hamburger */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[100px] left-0 w-full bg-white shadow-md z-50">
          {/* Nav links in vertical layout */}
          <ul className="flex flex-col items-center py-4 space-y-4 font-medium text-[16px]">
            <li>
              <Link href="./" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="../shop" onClick={() => setMobileMenuOpen(false)}>
                Shop
              </Link>
            </li>
            <li>
              <Link href="./blog" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="./contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
          {/* Icons for mobile (if you want them shown here too) */}
          <div className="flex justify-center space-x-4 pb-4">
            <div className="relative w-7 h-7">
              <Image
                src="/Navbar/user.png"
                alt="User"
                width={23.33}
                height={18.67}
              />
            </div>
            <div className="relative w-7 h-7">
              <Image
                src="/Navbar/search.png"
                alt="Search"
                width={22.17}
                height={22.17}
              />
            </div>
            <div className="relative w-7 h-7">
              <Image
                src="/Navbar/whishlist.png"
                alt="Wishlist"
                width={23.33}
                height={20.81}
              />
            </div>
            <div className="relative w-7 h-7">
              <Image
                src="/Navbar/cart.png"
                alt="Cart"
                width={24.53}
                height={22.06}
              />
            </div>
          </div>
        </div>
      )}
      <div onClick={showlist} className={`relative w-full h-[1000px] z-20 right-0 ${showcartlist==false ? "hidden" : ""} `}>
              <div className='absolute w-full h-[1000px] bg-black opacity-20'></div>
              <div className='absolute w-[430px] h-[746px] bg-white z-20 opacity-100 right-0  grid grid-cols-1 place-content-between'>
                <div className=''>  
                <div className='flex mx-[8%] mt-7 text-2xl font-semibold justify-between items-center'>
                    <h1>Shopping Cart</h1>
                   <div className='relative w-[16.63px] h-[19px]'> 
                    <Image src="/Navbar/Group.png" alt="" layout='fill' objectFit='cover '></Image>
                   </div>
                </div>

                <div className='border border-[#d9d9d9] mt-7 ml-[8%] mr-[20%]'></div>
                <div className="grid gap-5 mt-7">
                      {Product.map((ele, idx) => (
                        <div key={idx} className="flex items-center gap-[35px] mx-[8%]">
                        
                          <div className="w-[108px] h-[105px] relative">
                            <Image
                              src={ele.imageurl}
                              alt={ele.title}
                              layout="fill"
                              objectFit="cover"
                              className="rounded-lg"
                            />
                          </div>

                          {/* Title */}
                        <div className='w-full flex justify-between items-center'>
                          <div className="h-14 grid items-center">
                            <h1 className="text-[16px] font-normal whitespace-nowrap">{ele.title}</h1>
                            <div className='flex gap-[15px] text-xs font-light'>
                              <h1 className='text-[16px] font-light'>{ele.Quantity}</h1>
                              <h1>X</h1>
                              <h1 className='font-medium text-[#B88E2F]'>Rs. {ele.price}</h1>
                            </div>
                          </div>
                            
                            <button onClick={()=>{
                              removeproduct(ele);
                            }} className='w-5 h-5 rounded-full bg-[#9f9f9f] text-xs text-white font-bold'><p>X</p></button>
                          </div>  

                        </div>
                      ))}
                   </div>
                   </div>

                   <div className='grid gap-6'>

                    <div className='mx-[8%] flex gap-[101px] text-[16px] font-normal'>
                      <h1>Subtotal</h1>
                      <h1 className='text-[#B88E2F] font-semibold'>Rs. {total}</h1>
                    </div>

                    <div className='border border-[#9f9f9f]'></div>

                    <div  className='mx-[8%] flex justify-between mb-6'>
                    <Link href={"../cart"} >
                    <button onClick={showlist} className='border border-black rounded-[50px] w-[87px] h-[30px] text-xs font-normal'>Cart</button>
                    </Link>  
                     <Link href={"../checkout"}>
                     <button disabled={total==0 || total==undefined}  onClick={showlist} className='border border-black rounded-[50px] w-[118px] h-[30px] text-xs font-normal'>Checkout</button>
                     </Link>
                     <Link href={""}>
                      <button onClick={showlist} className='border border-black rounded-[50px] w-[135px] h-[30px] text-xs font-normal'>Comparision</button>
                     </Link> 
                    </div>
                    
                   </div>
             </div>               
      </div>

    </div>
  )
}

export default Navibar
