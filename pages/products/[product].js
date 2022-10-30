import axios from "axios"
import Image from "next/image";
import { useState } from "react";
import { IoMdGift } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, incrementProduct } from "../../redux/actions/cartActions";
import Stars from "../../components/RatingStars";

const Product = ({ product }) => {

    const dispatch = useDispatch()
    const [ priceIndex, setPriceIndex ] = useState(0)
    const [ purchase, setPurchase ] = useState("subscription")
    const [ imgCount, setImgCount ] = useState(0)
    const cartItems = useSelector(state => state.cart.cartItems)
    const itemIndex = 0

    const handleClick = () => {
        if(imgCount < product[0].img.length -1){
            setImgCount(imgCount => imgCount + 1)
        }else{
            setImgCount(0)
        }
    }

    const handleAddToCart = ()  => {
        let cartItem = {
            item: {
                title:product[0].title,
                img:product[0].img[0],
                price: purchase === "subscription" && product[0].price[priceIndex].price > 10 ? product[0].price[priceIndex].price - product[0].price[priceIndex].price *0.20 : product[0].price[priceIndex].price, 
                size:product[0].price[priceIndex].size,
                purchase 
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
            <div className="flex w-full h-[80rem] mt-20 lg:mt-0 lg:py-32">
                <div className="flex flex-col lg:flex-row w-full h-full">
                    <div id="IMG" onClick={ handleClick } className="relative group w-full lg:w-1/2 h-full cursor-pointer right-0 lg:-right-10 xl:-right-16">
                        <div className="relative z-30 w-full h-full">
                            <Image src={ product[0].img[imgCount] } priority layout="fill" objectFit="cover" objectPosition="center"/>
                        </div>
                        <div className="absolute hidden lg:block bg-red-400/60 w-full h-full top-0 group-hover:rotate-3 transition-all"></div>
                        <div className="absolute hidden lg:block bg-red-400/50 w-full h-full top-0 group-hover:-rotate-3 transition-all"></div>
                    </div>
                    <div id="ORD" className="relative left-0 lg:-left-10 xl:-left-16 mx-auto w-[95%] lg:w-1/2 flex items-center">
                        <div className=" z-40 bg-white w-full -mt-12 lg:-mt-0 lg:h-[83%]">
                            <div className="w-full py-2 px-4 font-medium text-white text-center bg-slate-800">Try for 30 days & love it or send it back — no questions asked.</div>
                            <div className="flex flex-col py-12 px-[5%] lg:px-[10%] w-full h-full">
                                <Stars filled={ product[0].rating } />
                                <h2 className="mt-4 text-3xl lg:text-4xl font-serif text-slate-800/90">{product[0].title}</h2>
                                <p className="mt-6 text-slate-800/90 font-medium">{product[0].description}</p>
                                <ul className="mt-6 text-slate-800 flex flex-col gap-1">
                                    {
                                        product[0].bonuses.map((bonus)=>(
                                            <li key={ bonus }>- { bonus }</li>
                                        ))
                                    }
                                </ul>
                                <div>
                                    <p className="mt-6 text-sm text-slate-800/90 font-medium">Purcharse</p>
                                    <div className="flex flex-col mt-2 gap-y-2">
                                        <button 
                                            onClick={ () => setPurchase("subscription") } 
                                            className={`flex justify-between items-center p-5 rounded border group ${ purchase === "subscription" && "border-orange-600/80" }`}
                                        >
                                            <div className="flex justify-start items-center">
                                                <div className={`w-5 h-5 mr-4 border-2 rounded-full ${ purchase === "subscription" ? "border-orange-600/80" : "border-gray-400" }`}></div>
                                                <div className="text-start">
                                                    <p className="font-medium text-slate-800">Get Monthly & Save 20%</p>
                                                    <p>
                                                        Skip or cancel your subscription at any time. <a className="hover:text-orange-600/80">(?)</a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col lg:flex-row">
                                                <p className="-mt-2 line-through font-medium text-slate-800/30">${ product[0].price[priceIndex].price }</p>
                                                {
                                                    product[0].price[0].price > 10 &&
                                                    <p className="text-xl font-medium text-slate-800">${ (product[0].price[priceIndex].price - product[0].price[priceIndex].price*0.20).toFixed(2).toLocaleString() }</p>
                                                }
                                            </div>
                                        </button>
                                        <button 
                                            onClick={ () => setPurchase("once") } 
                                            className={`flex justify-between items-center rounded p-5 border group ${ purchase === "once" && "border-orange-600/80"}` }
                                        >
                                            <div className="flex justify-start items-center">
                                                <div className={ `w-5 h-5 mr-4 border-2 rounded-full ${ purchase === "once" ? "border-orange-600/80" : "border-gray-400" }` }></div>
                                                <div className="text-start">
                                                    <p className="font-medium text-lg text-slate-800">Get Once</p>
                                                </div>
                                            </div>
                                            <p className="text-xl font-medium text-slate-800">${ product[0].price[priceIndex].price.toFixed(2).toLocaleString() }</p>
                                        </button>
                                        {   
                                            product[0].price[0].price < 10 &&
                                            <div className="flex items-center bg-slate-100 justify-between p-5">
                                                <p className="font-medium">Just Pay For Shipping</p>
                                                <p className="text-xl font-medium text-slate-800">${ product[0].price[priceIndex].price.toFixed(2).toLocaleString() }</p>
                                            </div>
                                        }
                                        {
                                            product[0].price[0].size ?
                                            <>
                                                <p className="mt-6 text-sm text-slate-800/90 font-medium">Concentration</p>
                                                <div className={`flex w-1/${product[0].price.length} gap-x-2`}>
                                                    {
                                                        product[0].price.map((item,index)=>(
                                                            <button 
                                                                key={item.size}
                                                                onClick={()=> setPriceIndex(index)} 
                                                                className={`py-5 w-full font-medium text-slate-800 border rounded ${ priceIndex === index && "border-orange-600/80 bg-orange-500/20" }`}
                                                            >{ item.size }</button>
                                                        ))
                                                    }
                                                </div> 
                                            </> : null      
                                        }
                                        <button onClick={handleAddToCart} className="mt-4 py-4 w-full font-medium transition-colors text-white bg-orange-600/80 hover:bg-slate-800">ADD TO CART</button>
                                        {   
                                            product[0].price[0].price > 10 &&
                                            <div className="flex items-center">
                                                <IoMdGift size="20" className="-mb-1 text-slate-800/90"/>
                                                <p className="mt-2 ml-2 text-sm text-slate-800/80 font-medium">Free shipping on all orders!</p>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export const getServerSideProps = async (context) => {
    
    const API_HOST = process.env.API_HOST
    const product = await axios.get(`${API_HOST}/api/products/${context.params.product}`)
    return {
        props:{
            product: product.data
        }
    }
}

export default Product;