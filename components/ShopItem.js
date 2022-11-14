import Image from "next/image"
import Link from "next/link"
import Stars from "./RatingStars";
import { useState, memo } from "react"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from "react-redux";
import { addProduct, incrementProduct } from "../redux/actions/cartActions";

const ShopItem = ({ id, title, rating, price, img, totalRatings, url, concentration, subscription }) => {

    const itemIndex = 0
    const dispatch = useDispatch()
    const cartItems  = useSelector(state => state.cart.cartItems) 
    
    const notify = () => toast.success("Product added to cart",{
        position: "bottom-right"
    })

    const handleSubscription = ()  => {
        let cartItem = {
            item: {
                title,
                img,
                price: price > 10 ? (price - price*0.20).toFixed(2).toLocaleString() : price, 
                size:concentration,
                purchase:"subscription" 
            },
            quantity:1
        }

        let itemExist = cartItems.find((item, index) => {
            if(JSON.stringify(item.item) === JSON.stringify(cartItem.item)){
                itemIndex = index
                return item
            }
        })
      
        if(cartItems.length !== 0){
            if(!itemExist){
                dispatch(addProduct(cartItem))
                
            } else {
                dispatch(incrementProduct(itemIndex))
            }
        } else {
            dispatch(addProduct(cartItem))
        }
    }

    return ( 
        <>
            <div>
                <div className="relative h-96 md:h-[20rem] lg:h-[28rem] w-full min-w-2xl">
                    <Image alt={ title } src={ img } layout="fill" objectFit="cover" objectPosition="center" loading="lazy"/>
                </div>
                {
                    subscription 
                    ?   <button 
                            className="transition-colors w-full py-5 bg-orange-600/80 hover:bg-slate-800 text-white font-semibold"
                            onClick={() => {
                                handleSubscription()
                                notify()
                            }}
                        >
                            SUBSCRIBE
                        </button>
                    :  <Link href={ `/products/${url}` }>
                            <button className="transition-colors w-full py-5 bg-orange-600/80 hover:bg-slate-800 text-white font-semibold">SHOP NOW</button>
                        </Link> 
                }
                
                <div className="h-20">
                    {
                        subscription
                        ?   <>
                                <h5 
                                    className="mt-3 text-slate-800/90 text-lg font-bold"
                                >
                                    { title } { concentration && `- ${ concentration }` }
                                </h5>
                                <p className="mt-1 font-medium text-slate-800/80">
                                    Subscription ${ price > 10 ? (price - price*0.20).toFixed(2).toLocaleString() : price }
                                </p>
                                {
                                    price > 10
                                    ?   <p className="line-through text-slate-800/80">
                                            Was ${ price.toFixed(2).toLocaleString() }
                                        </p>
                                    :   <p className="text-slate-800/80">
                                            Just Pay For Shipping! 
                                        </p>
                                
                                }
                            </>
                        :   <>
                                <h5 className="mt-3 text-slate-800/90 text-lg font-bold">{ title }</h5>
                                <div className="mt-1">
                                    <Stars filled={ rating } />
                                </div>
                                <p className="mt-1 text-slate-800/90">
                                    Starting at ${ price > 10 ? (price - price*0.20).toFixed(2).toLocaleString() : price }
                                </p>
                            </>
                    }
                </div>
            </div>
        </>
     );
}
 
export default memo(ShopItem);