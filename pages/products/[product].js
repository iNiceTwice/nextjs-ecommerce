import axios from "axios"
import Image from "next/image";
import Link from "next/link"
import { useEffect, useState } from "react";
import { toast } from "react-toastify"
import { IoMdGift } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { addProduct, incrementProduct } from "../../redux/actions/cartActions";
import Stars from "../../components/RatingStars";

const Product = ({ params }) => {
    
    const pageTransition = {
        in:{
            opacity:1
        },
        out:{
            opacity:0
        }
    }
    const dispatch = useDispatch()
    const [ product, setProduct ] = useState()
    const [ priceIndex, setPriceIndex ] = useState(0)
    const [ purchase, setPurchase ] = useState("subscription")
    const [ imgCount, setImgCount ] = useState(0)
    const [ modal, setModal ] = useState(false)
    const cartItems = useSelector(state => state.cart.cartItems)
    const itemIndex = 0
    
    const notify = () => toast.success("Product added to cart",{
        position: "bottom-right"
    })

    const handleClick = () => {
        if(imgCount < product?.img.length -1){
            setImgCount(imgCount => imgCount + 1)
        }else{
            setImgCount(0)
        }
    }

    const handleAddToCart = ()  => {

        let cartItem = {
            item: {
                title:product?.title,
                img:product?.img[0],
                price: purchase === "subscription" && product?.price[priceIndex].price > 10 ? product?.price[priceIndex].price - product?.price[priceIndex].price *0.20 : product?.price[priceIndex].price, 
                size:product?.price[priceIndex].size,
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

    useEffect(() => {
        axios.get(`/api/products/${params}`)
        .then(data => setProduct(data.data))
        .catch(err => console.log(err))
    },[params])
    
    console.log(product)
    return ( 
        <>
            <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
                {
                    modal &&
                    <div className="overflow-auto fixed z-50 top-0 w-full h-screen text-slate-800/90 bg-slate-700 flex flex-col items-center lg:justify-center">
                        <div className="flex w-full flex-row-reverse">
                            <button title="Close modal" onClick={() => setModal(false)} className="m-4">
                                <IoCloseSharp className="text-white hover:text-orange-600" size={40}/>
                            </button>
                        </div>
                        <div className="bg-white p-8 lg:p-16 w-11/12 lg:w-[50vw] h-fit flex flex-col gap-y-4">
                            <h2 className="text-2xl lg:text-3xl font-serif mb-2 lg:mb-4">How It Works</h2>
                            <p><span className="font-semibold">20% off forever.</span> For a limited time, if you opt-in to our monthly subscription program you will receive 20% off all future orders. This rate will be locked in forever and will never increase.</p>
                            <p><span className="font-semibold" >Stop at anytime.</span> We make it simple for you to cancel your subscription or put it on hold for a month or two. All you have to do is <Link href="/account/login"><a className="text-orange-600/80 hover:text-slate-800/90 transition-colors cursor-pointer">log-in</a></Link> to your account or give us a call.</p>
                            <p><span className="font-semibold" >Still have questions?</span> If you are starting your hemp CBD journey, you may have a lot of questions. Populum has a customer experience team that know the ins-and-outs of hemp CBD and can answer any question you may have. All you have to do is give us a call at (855) 872-2772 or send us an <a href="mailto:support@populum.com" className="text-orange-600/80 hover:text-slate-800/90 transition-colors cursor-pointer">email</a>.</p>
                            <button className="bg-slate-800 text-white w-fit px-10 py-4 text-sm" onClick={() => setModal(false)}>THANKS!</button>
                        </div>
                    </div>
                }
                <div className="flex w-full h-[80rem] mt-20 lg:mt-0 lg:py-32">
                    <div className="flex flex-col lg:flex-row w-full h-full">
                        <div id="IMG" onClick={ handleClick } className="relative group w-full lg:w-1/2 h-full cursor-pointer right-0 lg:-right-10 xl:-right-16">
                            <div className="relative z-10 w-full h-full">
                                <Image alt={ product?.title } src={ product?.img[imgCount] } priority layout="fill" objectFit="cover" objectPosition="center"/>
                            </div>
                            <div className="absolute hidden lg:block bg-red-400/60 w-full h-full top-0 group-hover:rotate-3 transition-all"></div>
                            <div className="absolute hidden lg:block bg-red-400/50 w-full h-full top-0 group-hover:-rotate-3 transition-all"></div>
                        </div>
                        <div id="ORD" className="relative left-0 lg:-left-10 xl:-left-16 m-auto h-fit w-[95%] lg:w-1/2 flex items-center">
                            <div className=" z-20 bg-white w-full -mt-12 lg:-mt-0 lg:h-[83%]">
                                <div className="w-full py-2 px-4 font-medium text-white text-center bg-slate-800">Try for 30 days & love it or send it back — no questions asked.</div>
                                <div className="flex flex-col py-12 px-[5%] lg:px-[10%] w-full h-full">
                                    <Stars filled={ product?.rating } />
                                    <h2 className="mt-4 text-3xl lg:text-4xl font-serif text-slate-800/90">{product?.title}</h2>
                                    <p className="mt-6 text-slate-800/90 font-medium">{product?.description}</p>
                                    <ul className="mt-6 text-slate-800 flex flex-col gap-1">
                                        {
                                            product?.bonuses?.map((bonus)=>(
                                                <li key={ bonus }>- { bonus }</li>
                                            ))
                                        }
                                    </ul>
                                    <div>
                                        <p className="mt-6 text-sm text-slate-800/90 font-medium">Purcharse</p>
                                        <div className="flex flex-col mt-2 gap-y-2">
                                            <button 
                                                title="Purchase subscription"
                                                onClick={ () => setPurchase("subscription") } 
                                                className={`flex justify-between items-center p-5 rounded border group ${ purchase === "subscription" && "border-orange-600/80" }`}
                                            >
                                                <div className="flex justify-start items-center">
                                                    <div className={`w-5 h-5 mr-4 border-2 rounded-full ${ purchase === "subscription" ? "border-orange-600/80" : "border-gray-400" }`}></div>
                                                    <div className="text-start">
                                                        <p className="font-medium text-slate-800">Get Monthly & Save 20%</p>
                                                        <p>
                                                            Skip or cancel your subscription at any time. <button onClick={() => setModal(true)} className="hover:text-orange-600/80 underline">(?)</button>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col lg:flex-row">
                                                    <p className="-mt-2 line-through font-medium text-slate-800/30">${ product?.price[priceIndex]?.price }</p>
                                                    {
                                                        product?.price?.price > 10 &&
                                                        <p className="text-xl font-medium text-slate-800">${ (product?.price[priceIndex]?.price - product?.price[priceIndex]?.price*0.20).toFixed(2).toLocaleString() }</p>
                                                    }
                                                </div>
                                            </button>
                                            <button 
                                                title="Purchase once"
                                                onClick={ () => setPurchase("once") } 
                                                className={`flex justify-between items-center rounded p-5 border group ${ purchase === "once" && "border-orange-600/80"}` }
                                            >
                                                <div className="flex justify-start items-center">
                                                    <div className={ `w-5 h-5 mr-4 border-2 rounded-full ${ purchase === "once" ? "border-orange-600/80" : "border-gray-400" }` }></div>
                                                    <div className="text-start">
                                                        <p className="font-medium text-lg text-slate-800">Get Once</p>
                                                    </div>
                                                </div>
                                                <p className="text-xl font-medium text-slate-800">${ product?.price[priceIndex]?.price?.toFixed(2).toLocaleString() }</p>
                                            </button>
                                            {   
                                                product?.price?.price < 10 &&
                                                <div className="flex items-center bg-slate-100 justify-between p-5">
                                                    <p className="font-medium">Just Pay For Shipping</p>
                                                    <p className="text-xl font-medium text-slate-800">${ product?.price[priceIndex]?.price.toFixed(2).toLocaleString() }</p>
                                                </div>
                                            }
                                            {
                                                product?.price[0]?.size &&
                                                <>
                                                    <p className="mt-6 text-sm text-slate-800/90 font-medium">Concentration</p>
                                                    <div className={`grid ${product?.price?.length > 3 ? "grid-cols-4" : `grid-cols-${product?.price?.length}`} gap-x-2`}>
                                                        {
                                                            product?.price.map((item,index)=>(
                                                                <button 
                                                                    key={item.size}
                                                                    onClick={()=> setPriceIndex(index)} 
                                                                    className={`py-5 font-medium text-slate-800 rounded ${ priceIndex === index ? "border-orange-600/80 bg-orange-500/20 border" : "hover:border hover:border-slate-400 bg-slate-100 " }`}
                                                                >{ item.size }</button>
                                                            ))
                                                        }
                                                    </div> 
                                                </>       
                                            }
                                            <button 
                                                onClick={()=>{
                                                    handleAddToCart()
                                                    notify()
                                                }} 
                                                className="mt-4 py-4 w-full font-medium transition-colors text-white bg-orange-600/80 hover:bg-slate-800">ADD TO CART</button>
                                            {   
                                                product?.price[0]?.price > 10 &&
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
            </motion.div>
        </>
     );
}

export const getServerSideProps = context => {
    return {
        props:{
            params:context.params.product
        }
    }
}

export default Product;