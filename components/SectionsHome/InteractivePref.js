import Image from "next/image"
import { useState } from "react";

const InteractivePref = () => {

    const [ values, setValues ] = useState({
        first:"human",
        second:"experienced",
        third:"use it daily"
    })

    const [ showOptions, setShowOptions ] = useState({
        key:"",
        isOpen:false
    })

    const [ product, setProduct ] = useState({
        name:"Full-Spectrum Hemp CBD Oil",
        size:"500mg",
        mode:"Subscription"

    })

    const [ img, setImg ] = useState("https://cdn.shopify.com/s/files/1/1737/2201/files/best_for_me_photo_1400x.png?v=1613531241")
    const [ disabled, setDisabled ] = useState("")

    return ( 
        <>
            <section className=" h-[35rem] pb-10 xl:h-[50rem] flex mt-60 bg-sky-100/60">
                <div className="w-full flex flex-col md:flex-row">
                    <div className="mx-auto xl:ml-40 -mt-20 relative w-11/12 md:w-5/12 h-full">
                        <Image src={ img } layout="fill" objectPosition="center" objectFit="cover"/>
                    </div>
                    <div className="m-auto px-10 lg:px-2 xl:px-10 w-full md:w-6/12 lg:w-5/12 flex flex-col justify-center">
                        <p className="mt-10 lg:mt-0 tracking-wider font-semibold text-black/70">WHICH CBD PRODUCT IS BEST FOR ME?</p>
                        <div id="first" className="font-serif text-black/70">
                            <span className="text-2xl xl:text-4xl py-2 lg:py-5 mr-3 inline-flex">I am a</span>
                            <span className="cursor-pointer inline-flex flex-col">
                                <div
                                    onMouseEnter={() => setShowOptions({key:"first",isOpen:true})}  
                                    onMouseLeave={() => setShowOptions({key:"",isOpen:false})}  
                                    className="z-10 hover:-ml-4 hover:p-4 hover:border-transparent border-b-orange-600/80 border-b hover:bg-white"
                                >
                                    <div className="text-orange-600/80 text-2xl xl:text-4xl">
                                        {values.first}
                                    </div>
                                {
                                    (showOptions.key === "first" && showOptions.isOpen) &&
                                    <div className="absolute">
                                        <div 
                                            onClick={()=>{
                                                setValues({
                                                    ...values,
                                                    first:"human"
                                                })
                                                setProduct({
                                                    ...product,
                                                    name:"Full-Spectrum Hemp CBD Oil",
                                                    size:"500mg"
                                                })
                                                setImg("https://cdn.shopify.com/s/files/1/1737/2201/files/best_for_me_photo_1400x.png?v=1613531241")
                                                setDisabled("")
                                            }}
                                            className="-ml-4 py-1 hover:border-transparent border-b-orange-600/80 bg-white"
                                        >
                                            <p className="px-5 py-2 transition-colors hover:bg-red-100 text-2xl xl:text-4xl">
                                                human
                                            </p>
                                        </div>
                                        <div 
                                            onClick={()=>{
                                                setValues({
                                                    ...values,
                                                    first:"pet owner"
                                                })
                                                setProduct({
                                                    ...product,
                                                    name:"Zen Pets Calming Hemp Oil",
                                                    size:"100mg"
                                                })
                                                setImg("https://cdn.shopify.com/s/files/1/1737/2201/files/populum-pt1-129_1400x.png?v=1613531243")
                                                setDisabled("opacity-50 pointer-events-none")
                                            }}
                                            className="w-fit -ml-4 pb-3 hover:border-transparent border-b-orange-600/80 bg-white"
                                        >
                                            <p className="px-4 py-2 transition-colors hover:bg-red-100 text-2xl xl:text-4xl">
                                                pet owner
                                            </p>
                                        </div>
                                    </div>
                                }
                                </div>
                            </span>
                        </div>
                        <div id="second" className={`transition-opacity text-4xl font-serif text-black/70 ${disabled}`}>
                            <span className="py-2 lg:py-5 mr-3 inline-flex text-2xl xl:text-4xl">who has</span>
                            <span className="cursor-pointer inline-flex flex-col">
                                <div
                                    onMouseEnter={() => setShowOptions({key:"second",isOpen:true})}  
                                    onMouseLeave={() => setShowOptions({key:"",isOpen:false})}  
                                    className="mr-4 hover:mr-0 hover:-ml-4 hover:p-4 hover:border-transparent border-b-orange-600/80 border-b hover:bg-white"
                                >
                                    <div className="text-orange-600/80 text-2xl xl:text-4xl">
                                        {values.second}
                                    </div>
                                {
                                    (showOptions.key === "second" && showOptions.isOpen) &&
                                    <div className="absolute">
                                        <div 
                                            className="-ml-4 py-1 hover:border-transparent border-b-orange-600/80 bg-white"
                                            onClick={()=>{
                                                setValues({
                                                    ...values,
                                                    second:"experienced"
                                                })
                                                setProduct({
                                                    ...product,
                                                    name:"Full-Spectrum Hemp CBD Oil",
                                                    size:"500mg"
                                                })
                                            }}
                                        >
                                            <p className="px-4 py-2 transition-colors hover:bg-red-100 text-2xl xl:text-4xl">
                                                experienced
                                            </p>
                                        </div>
                                        <div 
                                            className="-ml-4 pb-3 hover:border-transparent border-b-orange-600/80 bg-white"
                                            onClick={()=>{
                                                setValues({
                                                    ...values,
                                                    second:"not used"
                                                })
                                                setProduct({
                                                    ...product,
                                                    name:"Full-Spectrum Hemp CBD Oil",
                                                    size:"250mg"
                                                })
                                            }}
                                        >
                                            <p className="px-4 py-2 transition-colors hover:bg-red-100 text-2xl xl:text-4xl">
                                                not used
                                            </p>
                                        </div>
                                    </div>
                                }
                                </div>
                            </span>
                            <span className="py-2 lg:py-5 inline-flex text-2xl xl:text-4xl">hemp oil,</span>
                        </div>
                        <div id="third" className="text-4xl font-serif text-black/70">
                            <span className="py-2 lg:py-5 mr-3 inline-flex text-2xl xl:text-4xl">and wants to</span>
                            <span className="cursor-pointer inline-flex flex-col">
                                <div
                                    onMouseEnter={() => setShowOptions({key:"third",isOpen:true})}  
                                    onMouseLeave={() => setShowOptions({key:"",isOpen:false})}  
                                    className="hover:-ml-4 hover:p-4 hover:border-transparent border-b-orange-600/80 border-b hover:bg-white"
                                >
                                    <div className="text-orange-600/80 text-2xl xl:text-4xl">
                                        {values.third}
                                    </div>
                                {
                                    (showOptions.key === "third" && showOptions.isOpen) &&
                                    <div className="absolute">
                                        <div 
                                            className="-ml-4 py-1 hover:border-transparent border-b-orange-600/80 bg-white"
                                            onClick={()=>{
                                                setValues({
                                                    ...values,
                                                    third:"use it daily"
                                                })
                                                setProduct({
                                                    ...product,
                                                    mode:"Subscription"
                                                })
                                            }}
                                        >
                                            <p className="px-4 py-2 transition-colors hover:bg-red-100 text-2xl xl:text-4xl">
                                                use it daily
                                            </p>
                                        </div>
                                        <div 
                                            className="-ml-4 pb-3 hover:border-transparent border-b-orange-600/80 bg-white"
                                            onClick={()=>{
                                                setValues({
                                                    ...values,
                                                    third:"try it"
                                                })
                                                setProduct({
                                                    ...product,
                                                    mode:"Once"
                                                })
                                            }}
                                        >
                                            <p className="px-4 py-2 transition-colors hover:bg-red-100 text-2xl xl:text-4xl">
                                                try it
                                            </p>
                                        </div>
                                    </div>
                                }
                                </div>
                            </span>
                        </div>
                        <div className="mt-4 w-full flex justify-between border-black/20 py-4 border-t border-b">
                            <div>
                                <p className="text-black/75 font-medium">{product.name}</p>
                                <p>{product.size} / {product.mode}</p>                
                            </div>
                            <button className="font-medium hover:text-slate-800/80 text-orange-600/80 transition-colors">Add To Cart</button>
                         </div>
                        <button className="hover:bg-slate-800 hover:text-white mt-6 border border-black w-full md:w-2/5 py-4">LEARN MORE</button>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default InteractivePref;