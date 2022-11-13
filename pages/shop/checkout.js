import { removeProducts } from "../../redux/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../components/CartItem";
import { useState, useEffect } from "react";
import Logo from "../../components/Logo";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import Link from "next/link";
import * as yup from "yup";
import axios from "axios";

const shippingSchema = yup.object().shape({
    firstName: yup.string().min(2,"At least 2 characters.").max(12,"Max 12 characters.").required("This field is required."),
    lastName: yup.string().min(2,"At least 2 characters.").max(12,"Max 12 characters.").required("This field is required."),
    email:yup.string().email("Invalid Email.").required("This field is required."),
    id:yup.number().typeError("Only numbers allowed").min(8,"At least 8 characters.").required("This field is required."),
    address:yup.string().required("This field is required."),
    zip:yup.number().typeError("Only numbers allowed").min(4,"At least 4 characters.").required("This field is required."),
    phone:yup.number().typeError("Only numbers allowed").min(8,"At least 8 characters.").required("This field is required."),
})

const Checkout = ({ preapproval, mpToken, query }) => {
    
    const pageTransition = {
        in:{
            opacity:1
        },
        out:{
            opacity:0
        }
    }    
    const router = useRouter()
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.cartItems)
    const purchaseOnce = cartItems.filter(product => product.item.purchase === "once")
    const purchaseSub = cartItems.filter(product => product.item.purchase === "subscription")
    const [ submitAction, setSubmitAction ] = useState("")

    let totalPriceOnce = 0
    let totalPriceSub = 0

    purchaseOnce.map((item)=>{
        totalPriceOnce = totalPriceOnce + item.quantity * item.item.price
    })
    purchaseSub.map((item)=>{
        totalPriceSub = totalPriceSub + item.quantity * item.item.price
    })
  
    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues:{
        email:"",
        firstName:"",
        lastName:"",
        id:"",
        address:"",
        zip:"",
        phone:""
    },
    onSubmit:(values)=>{
        if(submitAction === "once"){
            try {
                axios.post("/api/payments/one-purchase", {
                    products:purchaseOnce,
                    payerData:values
                }).then(data => {
                        const paymentURL = data.data
                        router.push(paymentURL)
                })
            }catch(err){
                console.log(err)
            }   
        }else{
            try{
                axios.post("/api/payments/subscription", {
                    totalCost:totalPriceSub,
                    payerData:values
                }).then(data => {
                        const paymentURL = data.data
                        router.push(paymentURL)
                })
            }catch(err){
                console.log(err)
            }    
        }
    },
    validationSchema: shippingSchema
    })
    
    const addSubscription = (paymentResponse) => {
        if(paymentResponse.status === "approved" && paymentResponse.external_reference === "once" ){
            dispatch(removeProducts("once"))
        }else if(paymentResponse.status === "authorized" && paymentResponse.external_reference === "subscription"){
            const subsWithId = purchaseSub.map(sub=>{
                return {
                    bundle_id:preapproval,
                    item:sub.item,
                    quantity:sub.quantity
                }
            }) 
            if(purchaseSub.length !== 0){
                try {
                    axios.put("/api/user/subscriptions/add", subsWithId)
                        .then(data=> {
                            dispatch(removeProducts("subscription"))
                        })
                } catch (error) {
                    console.log(error)
                }   
            }
        }
    }

    useEffect(()=>{
        if(preapproval){
            axios.get(`https://api.mercadopago.com/preapproval/${preapproval}`,{
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${mpToken}` 
                }
            }).then(data =>{
                if(data.data){
                    addSubscription(data.data)
                }else{
                    addSubscription(query)
                }
            }).catch(err => console.log(err))
        }
    },[addSubscription, query])

    return ( 
        <>
            <motion.div initial="out" animate="in" exit="out" variants={ pageTransition }>  
                <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 py-32 px-5 lg:px-32">
                    <div className="w-full h-fit border p-10">
                        <div>
                            <Logo/>
                        </div>
                        <form className="text-slate-800/90 text-sm">
                            <h3 className="text-lg my-4">Customer & shipping information</h3>
                            <div className="w-full border rounded-md flex flex-col justify-center">
                                <div className="flex items-center">
                                    <div className="w-2/3 lg:w-1/3 ml-4">
                                        Email
                                    </div>
                                    <input 
                                        className="p-3 w-full outline-none" 
                                        onChange={ handleChange } 
                                        id="email" 
                                        name="email" 
                                        value={ values.email }                                     
                                        placeholder="Email" 
                                        type="email"
                                    />
                                </div>
                                { touched.email && Boolean(errors.email) && <span className="ml-4 py-2 text-orange-600 w-full">{ errors.email }</span> }
                            </div>
                            <h3 className="text-sm my-4">SHIPPING ADDRESS</h3>
                            <div className="w-full border rounded-t-md flex flex-col justify-center">
                                <div className="flex items-center">
                                    <div className="w-2/3 lg:w-1/3 ml-4">
                                        First Name
                                    </div>
                                    <input 
                                        onChange={ handleChange } 
                                        id="firstName" 
                                        name="firstName" 
                                        value={ values.firstName }  
                                        className="p-3 w-full outline-none"
                                        placeholder="First Name" 
                                        type="text"
                                    />
                                </div>
                                { touched.firstName && Boolean(errors.firstName) && <span className="ml-4 py-2 text-orange-600 w-full">{ errors.firstName }</span> }                               
                            </div>
                            <div className="w-full border-b border-l border-r flex flex-col justify-center">
                                <div className="flex items-center">
                                    <div className="w-2/3 lg:w-1/3 ml-4">
                                        Last Name
                                    </div>
                                    <input 
                                        className="p-3 w-full outline-none"
                                        onChange={ handleChange } 
                                        id="lastName" 
                                        name="lastName" 
                                        value={ values.lastName }                                     
                                        placeholder="Last Name" 
                                        type="text"
                                    />
                                </div>
                                { touched.lastName && Boolean(errors.lastName) && <span className="ml-4 py-2 text-orange-600 w-full">{ errors.lastName }</span> }                                
                            </div>
                            <div className="w-full border-b border-l border-r flex flex-col justify-center">
                                <div className="flex items-center">
                                    <div className="w-2/3 lg:w-1/3 ml-4">
                                        ID
                                    </div>
                                    <input 
                                        onChange={ handleChange } 
                                        id="id" 
                                        name="id" 
                                        value={ values.id }                                 
                                        className="p-3 w-full outline-none" 
                                        placeholder="ID" 
                                        type="text"
                                    />
                                </div>
                                { touched.id && Boolean(errors.id) && <span className="ml-4 py-2 text-orange-600 w-full">{ errors.id }</span> }                                
                            </div>
                            <div className="w-full border-b border-l border-r flex flex-col justify-center">
                                <div className="flex items-center">
                                    <div className="w-2/3 lg:w-1/3 ml-4">
                                        Address
                                    </div>
                                    <input 
                                        onChange={ handleChange } 
                                        id="address" 
                                        name="address" 
                                        value={ values.address }                             
                                        className="p-3 w-full outline-none" 
                                        placeholder="Address" 
                                        type="text"
                                    />
                                </div>
                                { touched.address && Boolean(errors.address) && <span className="ml-4 py-2 text-orange-600 w-full">{ errors.address }</span> }                                
                            </div>
                            <div className="w-full border-b border-l border-r flex flex-col justify-center">
                                <div className="flex items-center">
                                    <div className="w-2/3 lg:w-1/3 ml-4">
                                        ZIP code
                                    </div>
                                    <input 
                                        onChange={ handleChange } 
                                        id="zip" 
                                        name="zip" 
                                        value={ values.zip } 
                                        className="p-3 w-full outline-none" 
                                        placeholder="ZIP code"
                                        type="text"
                                    />
                                </div>
                                { touched.zip && Boolean(errors.zip) && <span className="ml-4 py-2 text-orange-600 w-full">{ errors.zip }</span> }                                
                            </div>
                            <div className="w-full border-b border-l border-r rounded-b-md flex flex-col justify-center">
                                <div className="flex items-center">
                                    <div className="w-2/3 lg:w-1/3 ml-4">
                                        Phone
                                    </div>
                                    <div className="bg-slate-100 h-11 px-4 flex items-center">
                                        11
                                    </div>
                                    <input
                                        onChange={ handleChange } 
                                        id="phone" 
                                        name="phone" 
                                        value={ values.phone } 
                                        className="p-3 w-full outline-none"
                                        placeholder="Phone" 
                                        type="text"
                                    />
                                </div>
                                { touched.phone && Boolean(errors.phone) && <span className="ml-4 py-2 text-orange-600 w-full">{ errors.phone }</span> }                                
                            </div>
                        </form>
                    </div>
                    <div className="w-full mx-auto p-10 bg-slate-100 border">
                        <h1 className="text-slate-800/90 font-serif text-3xl">Order summary</h1>
                        <hr className="my-4"/>
                        {
                            purchaseOnce.length > 0 &&
                            <form>
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
                                    onClick={(e)=> {
                                        e.preventDefault()
                                        setSubmitAction("once")
                                        handleSubmit()
                                    }}
                                    className="mt-6 py-4 w-full bg-orange-600/80 hover:bg-slate-800 font-medium text-white transition-colors"
                                >
                                    CONTINUE
                                </button>
                            </form>
                        }
                        {
                            purchaseSub.length > 0 &&
                            <form className="mt-10">
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
                                    type="submit"
                                    onClick={(e)=> {
                                        e.preventDefault()
                                        setSubmitAction("subscription")
                                        handleSubmit()
                                    }}
                                    className="mt-6 py-4 w-full bg-orange-600/80 hover:bg-slate-800 font-medium text-white transition-colors"
                                >
                                    CONTINUE
                                </button>
                            </form>
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
 
export const getServerSideProps = async (context) => {
    const MP_TOKEN = process.env.MP_TOKEN
    
    return {
        props:{
            mpToken: MP_TOKEN,
            query: context.query,
            preapproval:context.query.preapproval_id ? context.query.preapproval_id : null
        }
    }
}

export default Checkout;