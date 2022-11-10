import Image from "next/image"
import { IoTrashOutline } from "react-icons/io5" 
import { useDispatch } from "react-redux"
import { incrementProduct, decrementProduct, removeProduct } from "../redux/actions/cartActions"

const CartItem = ({ product, quantity, index, checkout }) => {

    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(incrementProduct(index))
    }
    const handleDecrement = () => {
        if(quantity <= 1){
            dispatch(removeProduct(index))
        }else{
            dispatch(decrementProduct(index))
        }
    }
    const handleRemove = () => {
        dispatch(removeProduct(index))
    }
    
    return ( 
        <>
        {
            <div className="relative flex w-full h-fit mb-6">
                <Image alt={ product.title + product.size } src={ product.img } width={150} height={120} objectFit="cover" objectPosition="center"/>
                <div className="flex flex-col justify-between flex-grow ml-8">
                    {
                        product.purchase === "subscription" 
                        ?   <div className="pr-4">
                                <h4 className="text-slate-800 text-sm lg:text-lg mt-1">{ product.title } 20% Off - { product.size }</h4>
                                <p className="font-medium text-slate-800/80">Every 1 Months</p>
                            </div> 
                        :   <div className="pr-4">
                                <h4 className="text-slate-800 text-sm lg:text-lg mt-1">{ product.title } - { product.size }</h4>
                                <p className="font-medium text-slate-800/80">One-time purchase</p>
                            </div> 
                    }
                    {
                        !checkout &&
                        <div className="border rounded-sm flex w-fit items-center">
                            <button 
                                className="px-3 py-2 w-full hover:bg-slate-50"
                                onClick={ handleDecrement }
                            >
                                -
                            </button>
                            <p className="px-2 w-full text-center">{ quantity }</p>
                            <button 
                                className="px-3 py-2 w-full hover:bg-slate-50"
                                onClick={ handleIncrement }
                            >
                                +
                            </button>
                        </div>
                    }
                </div>
                {
                    checkout ?
                    <div className="h-full flex flex-col items-end justify-between">
                        <p>${ (product.price * quantity).toFixed(2) }</p>
                    </div>
                    :
                    <div className="h-full flex flex-col items-end justify-between">
                        <button onClick={ handleRemove }>
                            <IoTrashOutline className="text-orange-600" size={25}/>
                        </button>
                        <p>${ (product.price * quantity).toFixed(2) }</p>
                    </div>
                }
            </div>
        }
        </>
     );
}
 
export default CartItem;