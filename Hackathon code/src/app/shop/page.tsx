


import {client} from "@/sanity/lib/client"
import Shopproducts from "../components/shopcompnents/product";


export default async function Shop( )
{
    const Data =await client.fetch(`*[_type == "product"]{
        _id,
        title,
        _type,
        price,
        description,
        dicountPercentage,
        isNew,
        tags,
        "slug":slug.current,
        "imageurl":productImage.asset->url
      }`);

    return(
        <div>

            
            <Shopproducts productList={Data} mainvalue={16}/>
            
         
        </div>
    )
} 