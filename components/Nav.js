import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartToggle } from '../redux/actions/cartActions';
import { userActions } from '../redux/actions/userActions';
import useMediaQuery from "../utils/useMediaQuery"
import { IoCart, IoNotifications, IoMenu } from "react-icons/io5"
import Link from "next/link"
import axios from "axios"
import Cart from "./Cart"
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
                        <a href='/'>
                            Subscribe
                        </a>
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

    const isCartOpen = useSelector(state => state.cart.isOpen)
    const matches = useMediaQuery('(min-width: 768px)')
    const dispatch = useDispatch()
    
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
        if(!isCartOpen){
            dispatch(cartToggle(true))
        }else{
            dispatch(cartToggle(false))
        }
    }

    return ( 
        <>
            <div className={`flex fixed top-0 w-full py-8 px-3 lg:px-20 justify-between bg-white z-50`}>
                <div className="flex gap-x-5">
                    <button onClick={handleMenu} className="md:hidden flex" >
                        <IoMenu size="25"/>
                    </button>
                    <Logo/>
                    <div className="md:flex ml-5 gap-x-5 hidden ">
                        <Link href="/shop/all">
                            <a  className="text-black hover:text-orange-500 text-opacity-60 text-lg transition-colors">Shop</a>
                        </Link>
                        <a href="/" className="text-black hover:text-orange-500 text-opacity-60 text-lg transition-colors">Subscribe</a>
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
                    <button className='flex' onClick={handleCart}>
                        <IoCart size="25" className="text-xl hover:text-orange-500 transition-colors"/>
                        <span className='ml-2 text-lg'>0</span>
                    </button>
                </div>
            </div>
            { ( showMenu && !matches ) && <ResponsiveMenu/> }
            { isCartOpen && <Cart/> }
        </>
     );
}

export default Nav;