import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useRouter } from "next/router"
import Link from "next/link"
import CartItem from "../../components/CartItem";
import Logo from "../../components/Logo";
import axios from "axios"
import { motion } from "framer-motion";
import { removeProducts } from "../../redux/actions/cartActions";

const Checkout = ({ apiUrl, purchaseStatus }) => {
    
    const pageTransition = {
        in:{
            opacity:1
        },
        out:{
            opacity:0
        }
    }    
    const router = useRouter()
    const [ shippingData, setShippingData ] = useState({
        email:"",
        firstName:"",
        lastName:"",
        id:"",
        address:"",
        zip:"",
        phone:""
    })
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.cartItems)
    const purchaseOnce = cartItems.filter(product => product.item.purchase === "once")
    const purchaseSub = cartItems.filter(product => product.item.purchase === "subscription")
    const totalPriceOnce = 0
    const totalPriceSub = 0

    purchaseOnce.map((item)=>{
        totalPriceOnce = totalPriceOnce + item.quantity * item.item.price
    })
    purchaseSub.map((item)=>{
        totalPriceSub = totalPriceSub + item.quantity * item.item.price
    })

    const handleOnePurchase = async () => {
        try {
            axios.post(`${apiUrl}/api/payments/one-purchase`, {
                products:purchaseOnce,
                payerData:shippingData
            }).then(data => {
                    const paymentURL = data.data
                    router.push(paymentURL)
            })
        }catch(err){
            console.log(err)
        } 
    }
    const handleSubscription = async () => {
        try{
            axios.post(`${apiUrl}/api/payments/subscription`, {
                products:purchaseSub,
                payerData:shippingData
            }).then(data => {
                    const paymentURL = data.data
                    router.push(paymentURL)
            })
        }catch(err){
            console.log(err)
        }    
    }
    
    useEffect(()=>{
        if(purchaseStatus.status === "approved" ){
            if(purchaseStatus.external_reference === "once"){
                dispatch(removeProducts("once"))
            }
        }else if(purchaseStatus.preapproval_id){
            cartItems.map((item,index)=>{
                if(item.item.purchase === "subscription"){
                    dispatch(removeProducts("subscription"))
                }
            })    
        }
    },[])

    return ( 
        <>
            <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>  
                <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 py-32 px-5 lg:px-32">
                    <div className="w-full h-fit border p-10">
                        <div>
                            <Logo/>
                        </div>
                        <form className="text-slate-800/90 text-sm">
                            <h3 className="text-lg my-4">Customer & shipping information</h3>
                            <div className="w-full border rounded-md flex items-center">
                                <div className="w-2/3 lg:w-1/3 ml-4">
                                    Email
                                </div>
                                <input onChange={(e)=>setShippingData({...shippingData,email:e.target.value})} className="p-3 w-full outline-none" placeholder="Email" type="text"/>
                            </div>
                            <h3 className="text-sm my-4">SHIPPING ADDRESS</h3>
                            <div className="w-full border rounded-t-md flex items-center">
                                <div className="w-2/3 lg:w-1/3 ml-4">
                                    First Name
                                </div>
                                <input onChange={(e)=>setShippingData({...shippingData,firstName:e.target.value})} className="p-3 w-full outline-none" placeholder="First Name" type="text"/>
                            </div>
                            <div className="w-full border-b border-l border-r flex items-center">
                                <div className="w-2/3 lg:w-1/3 ml-4">
                                    Last Name
                                </div>
                                <input onChange={(e)=>setShippingData({...shippingData,lastName:e.target.value})} className="p-3 w-full outline-none" placeholder="Last Name" type="text"/>
                            </div>
                            <div className="w-full border-b border-l border-r flex items-center">
                                <div className="w-2/3 lg:w-1/3 ml-4">
                                    ID
                                </div>
                                <input onChange={(e)=>setShippingData({...shippingData,id:e.target.value})} className="p-3 w-full outline-none" placeholder="ID" type="text"/>
                            </div>
                            <div className="w-full border-b border-l border-r flex items-center">
                                <div className="w-2/3 lg:w-1/3 ml-4">
                                    Address
                                </div>
                                <input onChange={(e)=>setShippingData({...shippingData,address:e.target.value})} className="p-3 w-full outline-none" placeholder="Address" type="text"/>
                            </div>
                            <div className="w-full border-b border-l border-r flex items-center">
                                <div className="w-2/3 lg:w-1/3 ml-4">
                                    ZIP code
                                </div>
                                <input onChange={(e)=>setShippingData({...shippingData,zip:e.target.value})} className="p-3 w-full outline-none" placeholder="ZIP code" type="text"/>
                            </div>
                            <div className="w-full border-b border-l border-r rounded-b-md flex items-center">
                                <div className="w-2/3 lg:w-1/3 ml-4">
                                    Phone
                                </div>
                                <div className="bg-slate-100 h-11 px-4 flex items-center">
                                    11
                                </div>
                                <input onChange={(e)=>setShippingData({...shippingData,phone:e.target.value})} className="p-3 w-full outline-none" placeholder="Phone" type="text"/>
                            </div>
                        </form>
                    </div>
                    <div className="w-full mx-auto p-10 bg-slate-100 border">
                        <h1 className="text-slate-800/90 font-serif text-3xl">Order summary</h1>
                        <hr className="my-4"/>
                        {
                            purchaseOnce.length > 0 &&
                            <>
                                <h2 className="text-slate-800/90 font-serif text-xl mb-2">Products</h2>
                                {
                                    purchaseOnce.map((item, index)=>(
                                        <CartItem 
                                            key={ item.item.title + item.item.size + item.item.purchase} 
                                            quantity={ item.quantity } 
                                            index={ index }
                                            checkout={ true }
                                            product={ item.item }
                                        />     
                                    ))
                                }
                                <hr className="my-4"/>
                                <div className="font-semibold flex justify-between text-slate-800/90">
                                    <h3>Total</h3>
                                    <p>${ totalPriceOnce.toFixed(2) }</p>
                                </div>
                                <button 
                                    type="submit"
                                    onClick={handleOnePurchase}
                                    className="mt-6 py-4 w-full bg-orange-600/80 hover:bg-slate-800 font-medium text-white transition-colors"
                                >
                                    CONTINUE
                                </button>
                            </>
                        }
                        {
                            purchaseSub.length > 0 &&
                            <div className="mt-10">
                                <hr className="my-4"/>
                                <h2 className="text-slate-800/90 font-serif text-xl mb-2">Subscriptions</h2>
                                {  
                                    purchaseSub.map((item, index)=>(                               
                                        <CartItem 
                                            key={ item.item.title + item.item.size + item.item.purchase } 
                                            quantity={ item.quantity } 
                                            index={ index }
                                            checkout={ true }
                                            product={ item.item }
                                        />
                                    ))
                                }
                                <hr className="my-4"/>
                                <div className="font-semibold flex justify-between text-slate-800/90">
                                    <h3>Total</h3>
                                    <p>${ totalPriceSub.toFixed(2) }</p>
                                </div>
                                <button 
                                    onClick={handleSubscription}
                                    className="mt-6 py-4 w-full bg-orange-600/80 hover:bg-slate-800 font-medium text-white transition-colors"
                                >
                                    CONTINUE
                                </button>
                            </div>
                        }
                        {
                            !purchaseSub.length  && !purchaseOnce.length &&
                            <>
                                <div className="mt-16 w-full h-full flex flex-col items-center">
                                    <h3 className="text-3xl my-4 font-serif text-slate-800/90">Your Cart is empty!</h3>
                                    <Link href="/shop/all">
                                        <button className="py-4 px-10 bg-slate-800 hover:bg-orange-600/80 font-medium text-white">
                                            SHOP
                                        </button>
                                    </Link>
                                </div>
                            </>
                        }  
                    </div>
                </section>
            </motion.div>
        </>
     );
}
 
export const getServerSideProps = (context) => {
    const url = process.env.API_HOST
    console.log(context.query)
    return {
        props:{
            apiUrl: url,
            purchaseStatus:context.query
        }
    }
}

export default Checkout;