import Image from "next/image"
import Link from "next/link"
import Stars from "./RatingStars";
import { useState } from "react"
const ShopItem = ({ id, title, rating, price, img, totalRatings, url, commentary }) => {

    const [ showCommentary, setShowCommentary] = useState(false)

    return ( 
        <>
            <div 
                onMouseOver={()=>setShowCommentary(true)} 
                onMouseLeave={()=>setShowCommentary(false)}
            >
                <div className="relative h-96 md:h-52 lg:h-96 w-full min-w-2xl">
                    <Image src={ img } layout="fill" objectFit="cover" objectPosition="center"/>
                </div>
                <Link href={ url }>
                    <button className="transition-colors w-full py-5 bg-orange-600/80 hover:bg-slate-800 text-white font-semibold">SHOP NOW</button>
                </Link>
                <div className="h-20">
                    <h5 className="mt-3 text-black/75 text-lg font-bold">{ title }</h5>
                    <div className="mt-1">
                        <Stars filled={ rating } />
                    </div>
                    <p className="mt-1 text-black/80">
                        Starting at ${ price }
                    </p>
                    {
                      showCommentary && 
                      <p className="mt-1 italic text-black/70 font-medium">{ commentary }</p>  
                    }
                </div>
            </div>
        </>
     );
}
 
export default ShopItem;