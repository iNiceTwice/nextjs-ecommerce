import { IoCart, IoNotifications, IoMenu, IoClose, IoChevronDown } from "react-icons/io5"
import { userActions } from '../redux/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import useMediaQuery from "../utils/useMediaQuery";
import { useRouter } from 'next/router';
import CartItem from './CartItem';
import Image from "next/image"
import Link from "next/link"
import Logo from "./Logo"
import axios from "axios"

const ResponsiveMenu = ({ open }) => {

    return (
        <>
            <div className="bg-zinc-100 w-screen h-screen fixed top-14 z-40 overflow-auto">
               <div className='mt-20 pl-8'>
                    <ul className='flex flex-col gap-y-4 font-medium text-lg opacity-80 mb-20'>
                        <Link href='/shop/all'>
                            <a onClick={ open }>Shop</a>
                        </Link>
                        <Link href='/pages/subscription'>
                            <a onClick={ open }>Subscribe</a>
                        </Link>
                        <Link href='/pages/riskfreetrial'>
                            <a onClick={ open }>30 Day Trial</a>
                        </Link>
                        <li className='mt-2 text-sm'>
                            Support
                        </li>
                        <Link href='/pages/why'>
                            <a onClick={ open }>Why Populum</a>
                        </Link>
                        <Link href='/'>
                            <a>FAQ</a>
                        </Link>
                        <Link href='/'>
                            <a>Find Us</a>
                        </Link>
                        <Link href='/pages/contact'>
                            <a onClick={ open }>Contact</a>
                        </Link>
                        <a href='https://m.facebook.com/groups/PopulumCommunity' target="_blank" rel="noreferrer" onClick={ open }>FB Community</a>
                    </ul>
               </div>
            </div>
        </>
    )
}


const Nav = ({ refresh }) => {
    
    const [ navPos, setNavPos ] = useState("top")
    const [ showMenu, setShowMenu ] = useState(false)
    const [ isLogged, setIsLogged ] = useState(false)
    const [ openCart, setOpenCart ] = useState(false)
    const [ openSupMenu, setOpenSupMenu ] = useState(false)
    const [ imgSuppMenu, setImgSuppMenu ] = useState("https://cdn.shopify.com/s/files/1/1737/2201/files/populum-orange_1400x.webp?v=1662465868")

    const router = useRouter()
    const matches = useMediaQuery('(min-width: 768px)')
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state?.cart?.cartItems)
    const user = useSelector(state => state.user)
    const totalItems = 0
    const totalPrice = 0

    cartItems.map((item)=>{
        totalItems = item.quantity + totalItems
        totalPrice = totalPrice + item.quantity * item.item.price
    })

    const handleScroll = () => {
        if(window.scrollY >= 60){
            setNavPos("bellow")
        }else{
            setNavPos("top")
        }
    }    

    const handleLogout = () => {
        axios.delete("http://ecommerse-clone.vercel.app/api/auth")
            .then(() => {
                router.push("/")
                dispatch(userActions())
                setIsLogged(false)
            })
            .catch((err)=> console.log(err))
    }

    useEffect(()=>{  
        if(!isLogged){
            axios.get("http://ecommerse-clone.vercel.app/api/auth")
            .then(data => {
                setIsLogged(data.data.auth)
                dispatch(userActions(data.data.payload))
            })
            .catch(err => console.log(err))
        }
        window.addEventListener("scroll", handleScroll)
    },[refresh, isLogged, dispatch])

    return ( 
        <>
            <div 
                className={`flex fixed top-0 w-full py-8 px-3 lg:px-20 justify-between z-50 transition-all ${navPos === "top" ? "bg-transparent" : "bg-white border-b"}`}
            >
                <div className="flex gap-x-5">
                    <button onClick={ () => setShowMenu(showMenu => !showMenu) } aria-label="menu" className="md:hidden flex" >
                        <IoMenu className='text-slate-800/90' size="25"/>
                    </button>
                    <Logo/>
                    <div className="md:flex ml-5 gap-x-5 hidden ">
                        <Link href="/shop/all">
                            <a  className="text-black hover:text-orange-600 text-opacity-60 text-lg transition-colors">Shop</a>
                        </Link>
                        <Link href="/pages/subscription">
                            <a  className="text-black hover:text-orange-600 text-opacity-60 text-lg transition-colors">Subscribe</a>
                        </Link>
                        <Link href="/pages/riskfreetrial">
                             <a className="text-black hover:text-orange-600 text-opacity-60 text-lg transition-colors">30 Day Trial</a>
                        </Link>
                        <div onMouseEnter={ () => setOpenSupMenu(openSupMenu => !openSupMenu) }>
                            <span className="cursor-pointer flex items-center text-black hover:text-orange-600 text-opacity-60 text-lg transition-colors">
                                Support
                                <IoChevronDown className='ml-1' size={15}/>
                            </span>
                        </div>
                            { openSupMenu &&
                                <div
                                    className='bg-white border absolute ml-28 shadow-md mt-10 flex w-96 rounded-sm h-fit' 
                                    onMouseLeave={ () => setOpenSupMenu(openSupMenu => !openSupMenu) }
                                >
                                    <div className='bg-white border-t border-l p-1 -top-[5px] right-[49%] ml-2 absolute z-10 rotate-45'></div>
                                    <ul className='w-1/2 p-2 text-slate-800/90'>
                                        <Link href="/pages/why">
                                            <li  
                                                onMouseEnter={() => setImgSuppMenu("https://cdn.shopify.com/s/files/1/1737/2201/files/populum-orange_1400x.webp?v=1662465868")}
                                                className='w-fill p-1 rounded-sm hover:bg-sky-50 font-medium hover:text-orange-600 cursor-pointer'
                                            >
                                                Why Populum
                                            </li>
                                        </Link>
                                        <Link href="/">
                                            <li  
                                                onMouseEnter={() => setImgSuppMenu("https://cdn.shopify.com/s/files/1/1737/2201/files/FAQ_feature_300x.jpg?v=17136995942384895455")}
                                                className='w-fill p-1 rounded-sm hover:bg-sky-50 font-medium hover:text-orange-600 cursor-pointer'
                                            >
                                                FAQ
                                            </li>
                                        </Link>
                                        <Link href="/">
                                            <li  
                                                onMouseEnter={() => setImgSuppMenu("https://cdn.shopify.com/s/files/1/1737/2201/files/Stockist_feature_300x.jpg?v=13790474890464213931")}
                                                className='w-fill p-1 rounded-sm hover:bg-sky-50 font-medium hover:text-orange-600 cursor-pointer'
                                            >
                                                    Find Us
                                            </li>
                                        </Link>
                                        <Link href="/pages/contact">
                                            <li  
                                                onMouseEnter={() => setImgSuppMenu("https://cdn.shopify.com/s/files/1/1737/2201/files/Contact_us_feature_300x.jpg?v=12766680276813393902")}
                                                className='w-fill p-1 rounded-sm hover:bg-sky-50 font-medium hover:text-orange-600 cursor-pointer'
                                            >
                                                Contact
                                            </li>
                                        </Link>
                                            <li 
                                                onMouseEnter={() => setImgSuppMenu("https://cdn.shopify.com/s/files/1/1737/2201/files/Blog_feature_300x.jpg?v=14733919935349041970")}
                                                className='w-fill p-1 rounded-sm hover:bg-sky-50 font-medium hover:text-orange-600 cursor-pointer'
                                            >
                                                <a target="_blank" rel="noreferrer" href='https://www.facebook.com/groups/PopulumCommunity'>
                                                    FB Community
                                                </a>
                                            </li>
                                    </ul>
                                    <div className='relative w-1/2'>
                                        <Image 
                                            alt=""
                                            src={ imgSuppMenu }
                                            loading="lazy"
                                            layout="fill" 
                                            objectFit='cover' 
                                            objectPosition="center"
                                        />
                                    </div>
                                </div>
                            }
                    </div>
                </div>
                <div className="flex gap-x-5">
                    <div className="lg:flex gap-x-2 hidden">
                        <p className="text-slate-900 text-opacity-60 text-lg italic">Call us:</p>
                        <span className="text-lg mr-2 text-orange-600">555-7777</span>
                    </div>
                        {
                            !isLogged &&
                            <Link href="/account/login">
                                <button className="text-slate-900 text-opacity-60 hover:text-orange-600 transition-colors text-lg">Login</button>
                            </Link>
                        }
                        {
                            isLogged && router.pathname !== "/account/profile" &&
                            <Link href="/account/profile">
                                <button className="text-slate-900 text-opacity-60 hover:text-orange-600 transition-colors text-lg">Account</button>
                            </Link>
                        }    
                        {
                            isLogged && router.pathname === "/account/profile" &&
                            <button onClick={ handleLogout } className="text-slate-900 text-opacity-60 hover:text-orange-600 transition-colors text-lg">Logout</button>
                        }
                    <button title="notifications">
                        <IoNotifications size="22" className="text-slate-800/90 text-xl hover:text-orange-600 transition-colors"/>
                    </button>
                    <button aria-label="shopping-cart" className='flex' onClick={ () => setOpenCart(openCart => !openCart) }>
                        <IoCart size="25" className="text-xl text-slate-800/90 hover:text-orange-600 transition-colors"/>
                        <span className='ml-2 text-lg'>{ totalItems }</span>
                    </button>
                </div>
            </div>
            { ( showMenu && !matches ) && <ResponsiveMenu open={ () => setShowMenu(showMenu => !showMenu) }/> }
            {
            openCart && 
                <>
                    {
                    cartItems.length === 0 ?     
                    <>
                        <div onClick={ () => setOpenCart(openCart => !openCart) } className='bg-gray-700/20 fixed z-50 top-0 h-screen w-screen overflow-auto'>
                            <div onClick={ e => e.stopPropagation() } className="bg-white h-full w-full md:w-3/4 lg:w-1/2 fixed overflow-auto right-0 z-30">
                                <div className='p-6 h-full w-full flex flex-col'>
                                    <button onClick={ () => setOpenCart(openCart => !openCart) } className='absolute top-10 right-10 lg:right-20'><IoClose className='text-slate-800/90' size={25}/></button>
                                    <div className='text-center mt-16 lg:mt-28'>
                                        <h2 className='text-slate-800 text-2xl lg:text-4xl font-serif mb-2 lg:mb-4'>Your Cart is Empty!</h2>
                                        <p className='text-slate-800/60 lg:text-lg font-medium'>There&apos;s no comparison in quality, strength, and care.</p>
                                    </div>
                                    <div className='text-center p-10 grid grid-cols-1 lg:grid-cols-3 lg:mt-16'>
                                        <div>
                                            <Image
                                                alt='' 
                                                src="https://cdn.shopify.com/s/files/1/1737/2201/files/Thirty_rgb_orangex2_9b767b53-6442-4462-b54f-ea511c5fd010_500x500.png"
                                                height={90} width={90}     
                                            />
                                            <p className='text-black/80 font-serif text-2xl'>30 Days Risk Free</p>
                                            <p className='text-black/70 font-medium mt-3 text-lg'>Industry leading 100% quality guarantee.</p>
                                        </div>
                                        <div>
                                            <Image
                                                alt="" 
                                                src="https://cdn.shopify.com/s/files/1/1737/2201/files/Hexagon_rgb_orangex2_500x500.png?v=1613582144"
                                                height={90} width={90}     
                                            />
                                            <p className='text-black/80 font-serif text-2xl'>Shop Safely</p>
                                            <p className='text-black/70 font-medium mt-3 text-lg'>We&apos;re PCI compliant & fully encrypted.</p>
                                        </div>
                                        <div>
                                            <Image 
                                                alt=""
                                                src="https://cdn.shopify.com/s/files/1/1737/2201/files/Zen_orange_2x_964a9da3-e182-42da-9093-d9a57ec6d138_500x500.png?v=1613583730"
                                                height={90} width={90}     
                                            />
                                            <p className='text-black/80 font-serif text-2xl'>Personalized Support</p>
                                            <p className='text-black/70 font-medium mt-3 text-lg'>We&apos;re committed to your satisfaction.</p>
                                        </div>
                                    </div>
                                    <div className='h-full flex flex-col-reverse'>
                                        <button 
                                            onClick={ () => setOpenCart(openCart => !openCart) } 
                                            className=' py-4 w-full text-white font-medium hover:bg-slate-700 bg-slate-800 transition-colors'>
                                                CONTINUE SHOPPING
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div onClick={ () => setOpenCart(openCart => !openCart) } className='bg-gray-700 bg-opacity-20 fixed z-50 top-0 h-screen w-screen overflow-auto'>
                            <div onClick={ e => e.stopPropagation() } className="bg-white h-full w-full md:w-3/4 lg:w-1/2 fixed overflow-auto right-0 z-30">
                                <div className='pt-2 pb-4 px-10 h-full w-full flex flex-col'>
                                    <div className='py-8 border-b mb-6 flex justify-between'>
                                        <div className='flex items-baseline'>
                                            <h2 className='text-slate-800 text-2xl lg:text-4xl font-serif'>Your Cart</h2>
                                            <p className='text-slate-800/80 ml-8 '>{ totalItems } Items</p>
                                        </div>
                                        <button onClick={ () => setOpenCart(openCart => !openCart) } className=''><IoClose className='text-slate-800/90' size={25}/></button>
                                    </div>
                                    <div className='flex flex-col'>
                                        {
                                            cartItems.map( (item,index) => (
                                                <CartItem 
                                                    key={ item.item.title + index } 
                                                    quantity={ item.quantity } 
                                                    index={ index }
                                                    product={ item.item }
                                                />
                                            ))
                                        }
                                    </div>
                                    <div className='h-full flex flex-col-reverse'>
                                        <button 
                                            onClick={ () => setOpenCart(openCart => !openCart) } 
                                            className=' py-4 mt-2 w-full text-slate-800 hover:text-white font-medium border border-slate-800 hover:bg-slate-800 transition-colors'>
                                                CONTINUE SHOPPING
                                        </button>
                                        <Link href="/shop/checkout">
                                            <button 
                                                onClick={ () => setOpenCart(openCart => !openCart) }
                                                className=' py-4 w-full text-white font-medium bg-orange-600/80 hover:bg-slate-800 transition-colors'>
                                                    CHECKOUT - ${ totalPrice.toFixed(2) }
                                            </button>
                                        </Link>
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