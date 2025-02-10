import { Product } from "@/app/components/types/Product"



export default function AddtoCart(product:Product,Quantity?:number,Size?:string,select_color?:string)
{
    const cart = JSON.parse(localStorage.getItem('cart') || '{}');
    // let Size_value:string="";
   
    // if(cart.Size!=Size && cart.Size!=undefined)
    // {
    //          Size_value = cart.Size + " " + Size +":" + String(Quantity) ;
    // }else{
    //     Size_value = Size + ":" + String(Quantity);
    // }



    if(cart[product.title])
    {
        cart[product.title]={
            ...cart[product.title],
            Quantity:cart[product.title].Quantity + Quantity,
            
            
        }
    }else 
    cart[product.title]={...product,Quantity,Size,select_color};

    console.log(cart)
    localStorage.setItem("cart",JSON.stringify(cart))

    

}