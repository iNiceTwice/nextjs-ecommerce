import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/router'
import { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5"
import ShopItem from "../../components/ShopItem"
import FAQ from "../../components/FAQ";
import axios from "axios"

const Shop = ({ products }) => {

    const [ count, setCount ] = useState(0)
    
    const router = useRouter()
    const current = router.query.category
    const selectedCategory = products.filter(product => product.category === current )

    const handleClickSlider = (num) => {
        if(count === 0 && num < 0){
            setCount(2)
        }else if( count === 2 && num > 0){
            setCount(0)
        }else{
            setCount(count => count + num)
        }
    }

    return ( 
        <>
            <div className="w-full flex flex-col items-end pt-28">
                <div className="h-fit w-full md:w-fit md:mt-16 md:pl-12 absolute md:fixed left-0">
                    <ul className="h-48 flex md:flex-col justify-around font-mono font-medium text-lg text-slate-800/80">
                        <li>
                            <Link href="/shop/all">
                                <a className={current === "all" ? "border-b border-orange-600/80 text-orange-600/80 w-fit" : "hover:border-b border-slate-800/80 w-fit"}>
                                    All Products
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop/supplements">
                                <a className={current === "supplements" ? "border-b border-orange-600/80 text-orange-600/80 w-fit" : "hover:border-b border-slate-800/80 w-fit"}>Supplements</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop/skin">
                                <a className={current === "skin" ? "border-b border-orange-600/80 text-orange-600/80 w-fit" : "hover:border-b border-slate-800/80 w-fit"}>Skin</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop/pets">
                                <a className={current === "pets" ? "border-b border-orange-600/80 text-orange-600/80 w-fit" : "hover:border-b border-slate-800/80 w-fit"}>Pets</a>
                            </Link>
                        </li>
                    </ul>
                </div>   
                {   
                current === "all" &&
                    <>
                        <div className="relative flex flex-col items-center w-full md:w-4/6 lg:w-2/3 h-[18rem] md:h-[35rem] lg:h-[40rem] mr-0 md:mr-10 lg:mr-[13vw] mt-16">
                            <Image className="z-10" src={ slider[count].img } layout="fill" loading="lazy" objectFit="cover" objectPosition="center"/>
                            <div className="p-6 lg:p-8 w-11/12 mx-auto lg:w-[34rem] absolute bottom-0 lg:right-0 bg-red-50 z-20 -mb-40 lg:-mb-12 lg:-mr-12">
                                <h3 className="text-center lg:text-left font-serif text-2xl text-black/80 mb-3">{ slider[count].title }</h3>
                                <p className="text-center lg:text-justify font-medium text-black/80">{ slider[count].description }</p>
                                <div className="flex justify-center lg:justify-start">
                                    <button className="py-5 px-10 mt-8 font-medium bg-orange-600/80 hover:bg-slate-800/90 transition-colors text-white">SHOP</button>
                                </div>
                            </div>
                            <div className="flex justify-between w-full px-4 absolute top-1/2 z-20">
                                <button onClick={() => handleClickSlider(1)}>
                                    <IoChevronBack size="30" className="text-gray-700 hover:text-white transition-colors"/>
                                </button>
                                <button onClick={() => handleClickSlider(1)}>
                                    <IoChevronForward size="30" className="text-gray-700 hover:text-white transition-colors"/>
                                </button>
                            </div>
                            <div className="absolute left-0 h-20 w-20 lg:h-28 lg:w-28 z-20 ml-4 lg:-ml-7 -mt-7">
                                <Image src={ slider[count].imgCorner } objectFit="cover" layout="fill"/>
                            </div>
                        </div>
                    </>
                }
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 w-full md:w-4/6 lg:w-2/3 mr-0 md:mr-10 lg:mr-[13vw] px-5 lg:px-0 mb-16 mt-${current === "all" ? "60" : "16"}`}>
                    {
                        current === "all"
                        ? products?.map((product)=>(
                            <ShopItem 
                                key={product._id}
                                title={product.title}
                                img={product.img[0]}
                                url={product.url}
                                rating={product.rating}
                                price={product.price[0].price > 10 ? (product.price[0].price - product.price[0].price*0.20).toFixed(2).toLocaleString() : product.price[0].price }
                            />
                        )) 
                        : selectedCategory?.map((product)=>(
                             <ShopItem 
                                key={product._id}
                                title={product.title}
                                img={product.img[0]}
                                url={product.url}
                                rating={product.rating}
                                price={product.price[0].price > 10 ? (product.price[0].price - product.price[0].price*0.20).toFixed(2).toLocaleString() : product.price[0].price }
                            />
                        ))


                    }
                </div>
                <FAQ title="CBD Products FAQ" url="/"/>
            </div>
        </>
     );
}

export const getServerSideProps = async (context) => {
    
    const API_HOST = process.env.API_HOST
    const products = await axios.get(`${API_HOST}/api/products/all`)
    
    return {
        props:{
            products: products.data
        }
    }
}

const slider = [
    {
        img:"https://cdn.shopify.com/s/files/1/1737/2201/files/Index_Page_Images_55286256-4cd1-4485-a7fe-4d79210d8669_1300x.jpg?v=1621525680",
        imgCorner:"https://cdn.shopify.com/s/files/1/1737/2201/t/21/assets/featured.png?v=139405907626271541721661911238",
        title:"Full-Spectrum CBD Oil",
        description:"The best tasting CBD out there. Try today for 30-days risk-free."
    },
    {
        img:"https://cdn.shopify.com/s/files/1/1737/2201/files/final_cold_rub_mdw_1300x.jpg?v=1621525522",
        imgCorner:"https://cdn.shopify.com/s/files/1/1737/2201/t/21/assets/limited-edition.png?v=18680322310922494781661911253",
        title:"Cold Therapy Hemp Rub",
        description:"Sore muscles and summer aches? Just pay $3 for shipping to try our CBD Cold Rub."
    },
    {
        img:"https://cdn.shopify.com/s/files/1/1737/2201/files/Index_Page_Images_1300x.jpg?v=1621525173",
        imgCorner:"https://cdn.shopify.com/s/files/1/1737/2201/t/21/assets/sale.png?v=152661525501752001751630806362",
        title:"What CBD is best for me?",
        description:"We'll tell you! And bonus—save 25% with purchases of $200."
    }
]

export default Shop;