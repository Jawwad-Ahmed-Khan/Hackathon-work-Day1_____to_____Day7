// pages/index.tsx (or .jsx)

import Image from "next/image";
import { Category_Show } from "./components/homecomponents/category";
import Home_Products from "./components/homecomponents/homeproducts";

export default async function Home() {
  return (
    <div className="relative">
      {/* HERO SECTION */}
      <section className="relative h-[716px] sm:h-[500px] md:h-[716px] lg:h-[800px]">
        {/* Full-bleed background image */}
        <Image 
          src="/Home/hero1.png" 
          alt="Hero Image" 
          layout="fill" 
          objectFit="cover" 
        />

        {/* Overlay Shape (background element) */}
        <div
          className="
            absolute bg-[#FFF3E3] rounded-lg
            top-[150px] left-4 w-[90%] h-[300px]
            sm:top-[200px] sm:left-8 sm:w-[500px] sm:h-[350px]
            md:top-[253px] md:left-[739px] md:w-[643px] md:h-[443px]
          "
        ></div>

        {/* “New Arrival” Label */}
        <h2
          className="
            absolute text-[14px] sm:text-[16px] tracking-[3px]
            top-[180px] left-4
            sm:top-[230px] sm:left-8
            md:top-[315px] md:left-[780px]
          "
        >
          New Arrival
        </h2>

        {/* Main Heading */}
        <h1
          className="
            absolute font-bold text-[#B88E2F]
            text-[28px] sm:text-[40px] md:text-[52px] leading-tight
            top-[200px] left-4 w-[90%]
            sm:top-[260px] sm:left-8 sm:w-[500px]
            md:top-[343px] md:left-[780px] md:w-[559px]
          "
        >
          Discover Our<br />New Collection
        </h1>

        {/* Description */}
        <p
          className="
            absolute text-[14px] sm:text-[16px] font-medium leading-[24px]
            top-[280px] left-4 w-[90%]
            sm:top-[340px] sm:left-8 sm:w-[500px]
            md:top-[487px] md:left-[780px] md:w-[546px]
          "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>

        {/* “Buy Now” Button */}
        <button
          className="
            absolute bg-[#B88E2F] text-white font-bold rounded
            grid items-center
            text-[14px] sm:text-[16px]
            top-[340px] left-4 w-[150px] h-[50px]
            sm:top-[400px] sm:left-8 sm:w-[180px] sm:h-[60px]
            md:top-[585px] md:left-[778px] md:w-[222px] md:h-[74px]
          "
        >
          Buy Now
        </button>
      </section>

      {/* CATEGORY SECTION */}
      <Category_Show />

      {/* PRODUCTS SECTION */}
      <Home_Products />
    </div>
  );
}
