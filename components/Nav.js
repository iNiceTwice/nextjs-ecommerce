import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../redux/actions/userActions';
import useMediaQuery from "../utils/useMediaQuery"
import { IoCart, IoNotifications, IoMenu, IoClose } from "react-icons/io5"
import Link from "next/link"
import Image from "next/image"
import axios from "axios"
import Logo from "./Logo"

const ResponsiveMenu = () => {
    return (
        <>
            <div className="bg-zinc-100 w-screen h-screen fixed top-12 z-30">
               <div className='mt-20 pl-8'>
                    <ul className='flex flex-col gap-y-4 font-medium text-lg opacity-80'>
                        <Link href='/shop/all'>
                            <a>Shop</a>
                        </Link>
                        <Link href='/pages/subscription'>
                            <a>Subscribe</a>
                        </Link>
                        <a href='/'>
                            30 Day Trial
                        </a>
                        <a href='/'>
                            Reviews
                        </a>
                    </ul>
               </div>
            </div>
        </>
    )
}


const Nav = () => {
    
    const [ showMenu, setShowMenu ] = useState(false)
    const [ isLogged, setIsLogged ] = useState(false)
    const [openCart, setOpenCart ] = useState(false)
    
    const matches = useMediaQuery('(min-width: 768px)')
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.cartItems)
    
    useEffect(()=>{
        
        if(!isLogged){
            axios.get("http://localhost:3000/api/auth")
            .then(data => {
                setIsLogged(data.data.auth)
                dispatch(userActions(data.data.payload))
            })
            .catch(err => console.log(err))
        }
        
    },[])
    
    
    const handleMenu = () => {
        if(!showMenu){
            setShowMenu(true)
        }else{
            setShowMenu(false)
        }
    }
    const handleCart = () => {
        if(!openCart){
            setOpenCart(true)
        }else{
            setOpenCart(false)
        }
    }
    //console.log(cartItems)

    return ( 
        <>
            <div className={`flex fixed top-0 w-full py-8 px-3 lg:px-20 justify-between bg-white z-50`}>
                <div className="flex gap-x-5">
                    <button onClick={ handleMenu } className="md:hidden flex" >
                        <IoMenu size="25"/>
                    </button>
                    <Logo/>
                    <div className="md:flex ml-5 gap-x-5 hidden ">
                        <Link href="/shop/all">
                            <a  className="text-black hover:text-orange-500 text-opacity-60 text-lg transition-colors">Shop</a>
                        </Link>
                        <Link href="/pages/subscription">
                            <a  className="text-black hover:text-orange-500 text-opacity-60 text-lg transition-colors">Subscribe</a>
                        </Link>
                        <a href="/" className="text-black hover:text-orange-500 text-opacity-60 text-lg transition-colors">30 Day Trial</a>
                        <a href="/" className="text-black hover:text-orange-500 text-opacity-60 text-lg transition-colors">Reviews</a>
                    </div>
                </div>
                <div className="flex gap-x-5">
                    <div className="lg:flex gap-x-2 hidden">
                        <p className="text-slate-900 text-opacity-60 text-lg italic">Call us:</p>
                        <span className="text-lg mr-2 text-orange-500">555-7777</span>
                    </div>
                    {
                        isLogged
                        ? <Link href="/account/profile">
                            <button className="text-slate-900 text-opacity-60 hover:text-orange-500 transition-colors text-lg">Account</button>
                        </Link>
                        : <Link href="/account/login">
                            <button className="text-slate-900 text-opacity-60 hover:text-orange-500 transition-colors text-lg">Login</button>
                        </Link>
                    }
                    <button>
                        <IoNotifications size="24" className="text-xl hover:text-orange-500 transition-colors"/>
                    </button>
                    <button className='flex' onClick={ handleCart }>
                        <IoCart size="25" className="text-xl hover:text-orange-500 transition-colors"/>
                        <span className='ml-2 text-lg'>{ cartItems.length }</span>
                    </button>
                </div>
            </div>
            { ( showMenu && !matches ) && <ResponsiveMenu/> }
            {
            openCart && 
                <>
                    {
                    cartItems.length === 0 ?     
                    <>
                        <div onClick={ handleCart } className='bg-gray-700 bg-opacity-20 fixed z-50 top-0 h-screen w-screen overflow-auto'>
                            <div onClick={ e => e.stopPropagation() } className="bg-white h-full w-full md:w-3/4 lg:w-1/2 fixed overflow-auto right-0 z-30">
                                <div className='p-6 h-full w-full flex flex-col'>
                                    <button onClick={ handleCart } className='absolute top-10 right-10 lg:right-20'><IoClose className='text-slate-800' size={25}/></button>
                                    <div className='text-center mt-16 lg:mt-28'>
                                        <h2 className='text-slate-800 text-2xl lg:text-4xl font-serif mb-2 lg:mb-4'>Your Cart is Empty!</h2>
                                        <p className='text-slate-800/60 lg:text-lg font-medium'>There's no comparison in quality, strength, and care.</p>
                                    </div>
                                    <div className='text-center p-10 grid grid-cols-1 lg:grid-cols-3 lg:mt-16'>
                                        <div>
                                            <Image 
                                                src="https://cdn.shopify.com/s/files/1/1737/2201/files/Thirty_rgb_orangex2_9b767b53-6442-4462-b54f-ea511c5fd010_500x500.png"
                                                height={90} width={90}     
                                            />
                                            <p className='text-black/80 font-serif text-2xl'>30 Days Risk Free</p>
                                            <p className='text-black/70 font-medium mt-3 text-lg'>Industry leading 100% quality guarantee.</p>
                                        </div>
                                        <div>
                                            <Image 
                                                src="https://cdn.shopify.com/s/files/1/1737/2201/files/Hexagon_rgb_orangex2_500x500.png?v=1613582144"
                                                height={90} width={90}     
                                            />
                                            <p className='text-black/80 font-serif text-2xl'>Shop Safely</p>
                                            <p className='text-black/70 font-medium mt-3 text-lg'>We're PCI compliant & fully encrypted.</p>
                                        </div>
                                        <div>
                                            <Image 
                                                src="https://cdn.shopify.com/s/files/1/1737/2201/files/Zen_orange_2x_964a9da3-e182-42da-9093-d9a57ec6d138_500x500.png?v=1613583730"
                                                height={90} width={90}     
                                            />
                                            <p className='text-black/80 font-serif text-2xl'>Personalized Support</p>
                                            <p className='text-black/70 font-medium mt-3 text-lg'>We're committed to your satisfaction.</p>
                                        </div>
                                    </div>
                                    <div className='h-full flex flex-col-reverse'>
                                        <button 
                                            onClick={ handleCart } 
                                            className=' py-4 w-full text-white font-medium hover:bg-slate-700 bg-slate-800'>
                                                CONTINUE SHOPPING
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div onClick={ handleCart } className='bg-gray-700 bg-opacity-20 fixed z-50 top-0 h-screen w-screen overflow-auto'>
                            <div onClick={ e => e.stopPropagation() } className="bg-white h-full w-full md:w-3/4 lg:w-1/2 fixed overflow-auto right-0 z-30">
                                <div className='p-6 h-full w-full flex flex-col'>
                                    <div className='py-8 border-b flex justify-between'>
                                        <div className='flex items-baseline'>
                                            <h2 className='text-slate-800 text-2xl lg:text-4xl font-serif'>Your Cart</h2>
                                            <p className='text-slate-800/80 ml-8 '>{ cartItems.length } Items</p>
                                        </div>
                                    <button onClick={ handleCart } className=''><IoClose className='text-slate-800' size={25}/></button>
                                    </div>
                                    
                                    <div className='h-full flex flex-col-reverse'>
                                        <button 
                                            onClick={ handleCart } 
                                            className=' py-4 w-full text-white font-medium hover:bg-slate-700 bg-slate-800'>
                                                CONTINUE SHOPPING
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    }
                </>
            }
        </>
     );
}

export default Nav;