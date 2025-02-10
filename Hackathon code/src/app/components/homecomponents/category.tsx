// components/homecomponents/category.tsx
import poppin from "../globalcomponents/Poppin";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

interface Props {
  Name: string;
  img_src: string;
}

export const Category_Show = async () => {
  const Data = await client.fetch(
    `*[_type =="product"][0..2]{ "imageurl": productImage.asset->url }`
  );

  const Cataglist: Props[] = [
    { Name: "Dining", img_src: Data[0].imageurl },
    { Name: "Living", img_src: Data[1].imageurl },
    { Name: "Bedroom", img_src: Data[2].imageurl },
  ];

  return (
    <section className="relative py-12 px-4 md:px-8">
      <h1
        className={`
          text-center font-bold text-[#333333] ${poppin.className}
          text-[24px] sm:text-[28px] md:text-[32px]
        `}
      >
        Browse The Range
      </h1>
      <p
        className={`
          text-center text-[#666] ${poppin.className}
          text-lg sm:text-xl mt-2
        `}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-5">
        {Cataglist.map((ele, index) => (
          <Link href={""} key={index} className="w-full sm:w-[381px]">
            <div className="grid gap-6 justify-items-center drop-shadow-lg">
              <div className="relative w-full h-[300px] sm:h-[480px]">
                <Image
                  src={ele.img_src}
                  alt={ele.Name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h1 className="text-center text-[#333] text-xl font-semibold">
                {ele.Name}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
