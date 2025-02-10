// components/homecomponents/homeproducts.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { client } from "@/sanity/lib/client";
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  _id: string;
  title: string;
  isNew: boolean;
  tags: string[];
  slug: string;
  imageurl: string;
}

async function getProduct(start: number): Promise<Product[]> {
  const Data = await client.fetch<Product[]>(
    `*[_type == "product"][${start}..${start + 7}] {
      _id,
      title,
      isNew,
      tags,
      "slug": slug.current,
      "imageurl": productImage.asset->url
    }`
  );
  return Data;
}

export default function Home_Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [start, setStart] = useState(0);

  const showemore = () => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProduct(start);
        setProducts((prev) => [...prev, ...fetchedProducts]);
        setStart((prev) => prev + 8);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  };

  useEffect(() => {
    showemore();
  }, []);

  return (
    <section className="py-12 px-4 md:px-8">
      <h1 className="text-center text-[#3a3a3a] text-3xl md:text-4xl font-bold mb-8">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.length > 0 ? (
          products.map((product: Product,idx) => (
            <div key={idx} className="relative group bg-black drop-shadow-lg">
              {/* Product Image */}
              <div className="relative w-full h-64 md:h-72 group-hover:opacity-50 transition duration-300">
                <Image
                  src={product.imageurl}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              {/* Product Details */}
              <div className="relative bg-[#F4F5F7] p-4 group-hover:opacity-50 transition duration-300">
                <h1 className="text-2xl font-semibold text-[#3a3a3a]">
                  {product.title}
                </h1>
                <p className="text-[16px] font-medium text-[#898989] mt-2">
                  {product.title}
                </p>
                <div className="flex items-center mt-2">
                  <span className="text-xl font-semibold text-[#3a3a3a]">
                    Rp 2,500.000
                  </span>
                  <span className="text-[16px] font-normal line-through text-[#898989] ml-4">
                    Rp 3,300.000
                  </span>
                </div>
              </div>
              {/* Hover Overlay */}
              <div
                className="
                  absolute inset-0 flex flex-col justify-center items-center 
                  opacity-0 group-hover:opacity-100 transition duration-300
                  bg-black bg-opacity-50
                "
              >
                <Link href={`product/${product.slug}`}>
                  <button
                    className="w-[202px] h-12 bg-white text-[#B88E2F] grid place-items-center mb-4"
                  >
                    Add to cart
                  </button>
                </Link>
                <div className="flex gap-5">
                  <button className="flex gap-2 items-center">
                    <div className="relative w-4 h-4">
                      <Image
                        src="/Home/share.png"
                        alt="Share"
                        width={12}
                        height={13.33}
                      />
                    </div>
                    <span>Share</span>
                  </button>
                  <button className="flex gap-2 items-center">
                    <div className="relative w-4 h-4">
                      <Image
                        src="/Home/compare.png"
                        alt="Compare"
                        width={13.1}
                        height={14}
                      />
                    </div>
                    <span>Compare</span>
                  </button>
                  <button className="flex gap-2 items-center">
                    <div className="relative w-4 h-4">
                      <Image
                        src="/Home/like.png"
                        alt="Like"
                        width={13.84}
                        height={11.9}
                        className="mt-1.5"
                      />
                    </div>
                    <span>Like</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No products available</p>
        )}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={showemore}
          className="w-[245px] h-12 border border-[#B88E2F] text-[#B88E2F] grid place-items-center hover:text-white hover:bg-[#B88E2F] transition duration-500"
        >
          <p className="text-[16px] font-semibold">Show More</p>
        </button>
      </div>
    </section>
  );
}
