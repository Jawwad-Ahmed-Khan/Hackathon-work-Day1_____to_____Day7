import { client } from "@/sanity/lib/client";
import Barline from "./productcomponent/bar";
import ProductCard from "./productcomponent/DescriptionProduct";

// Notice the change here: params is typed as a Promise that resolves to an object with slug.
export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Await params to get the actual object.
  const { slug } = await params;

  const Data = await client.fetch(
    `*[_type == "product" && slug.current == "${slug}"]
      {
        _id,
        title,
        _type,
        price,
        dicountPercentage,
        description,
        isNew,
        tags,
        "slug": slug.current,
        "imageurl": productImage.asset->url
      }`
  );

  // Optional: Check if the product exists.
  if (!Data || Data.length === 0) {
    return <div>Product not found</div>;
  }

  let Desc: string = Data[0].description;
  // Trim the description up to "Key Features:" if found.
  Desc = Desc.substring(0, Desc.indexOf("Key Features:"));

  return (
    <div>
      <Barline title={Data[0].title} />
      <ProductCard product={Data[0]} />

      <div className="border-t border-gray-300">
        <div className="mt-12 text-2xl font-medium flex items-start justify-center">
          <p>Description</p>
        </div>
        <div className="mt-[37px] mx-[5%] text-justify">{Desc}</div>
      </div>
    </div>
  );
}
