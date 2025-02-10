export interface Product{
    _id:string,
    title:string,
    _type:string,
    price:number,
    description:string,
    dicountPercentage:number,
    isNew:boolean,
    tags:string[],
    slug:string,
    imageurl:string,
}

export interface Producttype {
    _type: 'product'; // Ye hamesha "product" hi hoga
    description: string;
    isNew: boolean;
    tags: string[];
    imageurl: string;
    _id: string;
    title: string;
    price: number;
    dicountPercentage: number;
    slug: string;
    Quantity: number;
    Size: string;
    select_color: string;
  }
