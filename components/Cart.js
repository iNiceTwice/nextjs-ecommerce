import React from 'react';
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { cartToggle } from '../redux/actions/cartActions';

const Cart = () => {

    const dispatch = useDispatch()

    const handleCart = () => {
        dispatch(cartToggle(false))
    }   

    return ( 
        <>
            <div onClick={handleCart} className='bg-gray-700 bg-opacity-20 w-screen h-screen z-30'>
                <div onClick={ e => e.stopPropagation() }className="bg-white h-full w-full md:w-3/4 lg:w-1/2 absolute right-0 z-30">
                    <div className='p-6 h-full w-full flex flex-col'>
                        <button onClick={ handleCart } className='absolute top-10 right-10 lg:right-20'><i className="fa-lg fa-solid fa-xmark"></i></button>
                        <div className='text-center mt-16  lg:mt-28'>
                            <h2 className='text-slate-800 text-2xl lg:text-4xl font-serif mb-2 lg:mb-4'>Your Cart is Empty!</h2>
                            <p className='text-slate-800/60 lg:text-lg font-medium'>There's no comparison in quality, strength, and care.</p>
                        </div>
                        <div className='text-center p-10 grid grid-cols-1 lg:grid-cols-3 lg:mt-16'>
                            <div>
                                <Image 
                                    src="https://cdn.shopify.com/s/files/1/1737/2201/files/Thirty_rgb_orangex2_9b767b53-6442-4462-b54f-ea511c5fd010_500x500.png"
                                    height={90} width={90}     
                                />
                                <p className='text-black/70 font-serif text-2xl'>30 Days Risk Free</p>
                                <p className='text-slate-800/90 font-medium mt-3 text-lg'>Industry leading 100% quality guarantee.</p>
                            </div>
                            <div>
                                <Image 
                                    src="https://cdn.shopify.com/s/files/1/1737/2201/files/Hexagon_rgb_orangex2_500x500.png?v=1613582144"
                                    height={90} width={90}     
                                />
                                <p className='text-black/70 font-serif text-2xl'>Shop Safely</p>
                                <p className='text-slate-800/90 font-medium mt-3 text-lg'>We're PCI compliant & fully encrypted.</p>
                            </div>
                            <div>
                                <Image 
                                    src="https://cdn.shopify.com/s/files/1/1737/2201/files/Zen_orange_2x_964a9da3-e182-42da-9093-d9a57ec6d138_500x500.png?v=1613583730"
                                    height={90} width={90}     
                                />
                                <p className='text-black/70 font-serif text-2xl'>Personalized Support</p>
                                <p className='text-slate-800/90 font-medium mt-3 text-lg'>We're committed to your satisfaction.</p>
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
     );
}
 
export default Cart;