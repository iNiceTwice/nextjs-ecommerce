import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from "../utils/useMediaQuery"
import { cartToggle } from '../redux/actions/cartActions';
import Cart from "./Cart"
import Logo from "./Logo"


const ResponsiveMenu = () => {
    return (
        <>
            <div className="bg-zinc-100 w-screen h-screen fixed z-50">
               <div className='mt-16 pl-8'>
                    <ul className='flex flex-col gap-y-4 font-medium text-lg opacity-80'>
                        <a href='/'>
                            <li>Shop</li>
                        </a>
                        <a href='/'>
                            <li>Subscribe</li>
                        </a>
                        <a href='/'>
                            <li>30 Day Trial</li>
                        </a>
                        <a href='/'>
                            <li>Reviews</li>
                        </a>
                    </ul>
               </div>
            </div>
        </>
    )
}

const Nav = () => {
    
    const [ showMenu, setShowMenu ] = useState(false)
    
    const isCartOpen = useSelector(state => state.cart.isOpen)
    const matches = useMediaQuery('(min-width: 768px)')
    const dispatch = useDispatch()

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
            <div className="flex fixed top-0 w-full py-8 px-3 lg:px-20  justify-between bg-white z-20">
                <div className="flex gap-x-5">
                    <button onClick={handleMenu} className="md:hidden flex" >
                        <i className="text-lg fa-solid fa-bars"></i>
                    </button>
                    <Logo/>
                    <div className="md:flex ml-5 gap-x-5 hidden ">
                        <a href="/" className="text-black hover:text-orange-500 text-opacity-60 text-lg transition-colors">Shop</a>
                        <a href="/" className="text-black hover:text-orange-500 text-opacity-60 text-lg transition-colors">Subscribe</a>
                        <a href="/" className="text-black hover:text-orange-500 text-opacity-60 text-lg transition-colors">30 Day Trial</a>
                        <a href="/" className="text-black hover:text-orange-500 text-opacity-60 text-lg transition-colors">Reviews</a>
                    </div>
                </div>
                <div className="flex gap-x-5">
                    <div className="lg:flex gap-x-2 hidden">
                        <p className="text-black text-opacity-60 text-lg italic">Call us:</p>
                        <span className="text-lg mr-2 text-orange-500">555-7777</span>
                    </div>
                    <button className="text-black text-opacity-60 hover:text-orange-500 transition-colors text-lg" >Login</button>
                    <button>
                        <i className="text-xl hover:text-orange-500 transition-colors fa-solid fa-bell"></i>
                    </button>
                    <button onClick={handleCart}>
                        <i className="text-xl hover:text-orange-500 transition-colors fa-solid fa-cart-shopping">
                            <span className="mx-2">0</span>
                        </i>
                    </button>
                </div>
            </div>
            { ( showMenu && !matches ) && <ResponsiveMenu/> }
            { isCartOpen && <Cart/> }
        </>
     );
}


 
export default Nav;