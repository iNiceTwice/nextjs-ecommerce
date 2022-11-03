import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/router'
import { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5"
import Dropdown from "../../components/Dropdown"
import ShopItem from "../../components/ShopItem"
import { motion } from "framer-motion";
import axios from "axios"

const Shop = ({ products }) => {

    const [ count, setCount ] = useState(0)
    const pageTransition = {
        in:{
            opacity:1
        },
        out:{
            opacity:0
        }
    }  
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
            <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
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
                                    subscription={false}
                                    price={ product.price[0].price }
                                />
                            )) 
                            : selectedCategory?.map((product)=>(
                                <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
                                    <ShopItem 
                                        key={product._id}
                                        title={product.title}
                                        img={product.img[0]}
                                        url={product.url}
                                        rating={product.rating}
                                        subscription={false}
                                        price={ product.price[0].price }
                                    />
                                </motion.div>
                            ))
                        }
                    </div>
                    <div className="w-full h-fit py-36 bg-slate-200/70">
                        <div className="flex justify-center">
                            <div className="w-4/5 lg:w-3/5">
                                <h3 className="text-slate-800/95 font-serif text-3xl">CBD Products FAQ</h3>
                                <Link href="/">
                                    <h4 className="w-fit cursor-pointer font-mono font-medium text-lg text-orange-600/80">Read full FAQ</h4>
                                </Link>
                                <Dropdown title="Why buy CBD products with Populum?">
                                    <p className="mt-5">
                                            Populum was founded in 2016 with the single-minded goal to make the health benefits of the hemp plant available for everyone in a way that is approachable, easy to understand, and trustworthy.
                                            <br/><br/>
                                            100% of our hemp CBD is grown in Colorado using organic farming practices.
                                            <br/><br/>
                                            All our <Link href="/shop/all"><a className="text-orange-600/80 hover:text-slate-800">CBD products</a></Link> are backed by an industry-leading 100% guarantee. We offer a very transparent <Link href="/shop/all"><a className="text-orange-600/80 hover:text-slate-800">30-day money-back risk free trial</a></Link>.
                                            <br/><br/>
                                            We're also proud to have offer the best customer service in the industry, backed by 950+ verified customer reviews.
                                        </p>
                                </Dropdown>
                                <Dropdown title="Which product is right for me?">
                                    <p className="mt-5">
                                        We recommend first asking yourself why you're interested in taking CBD. Is it to improve your wellbeing and to supplement your endocannabinoid system? Or is it for your skin or muscles?
                                        <br/><br/>
                                        Our team is also more than happy to answer any questions, so please <span className="text-orange-600/80 hover:text-slate-800">email us</span> or call us (855-872-2772)!
                                        <br/><br/>
                                        Overall, lot of reputable clinical publications have published their findings on the effects and benefits of CBD in the past couple years. We highly recommend that you also do your own research to learn more about the effects of CBD oil prior to your purchase.
                                    </p>
                                </Dropdown>
                                <Dropdown title="What's the highest concentration / strongest CBD oil for sale?">
                                    <p className="mt-5">
                                    Our 2000mg CBD Tincture is our highest concentration product.
                                    </p>
                                </Dropdown>
                                <Dropdown title="What type of CBD extract does Populum use?">
                                    <p className="mt-5">
                                        We are strong believers in the benefits of full-spectrum hemp extracts in offering an entourage effect, meaning that the restorative benefits of the whole plant are greater than the sum of its parts. Our full-spectrum hemp CBD is purely extracted and minimally refined to leave most of the hemp extract intact. At Populum, we only provide full-spectrum CBD products because we are proponents of using every part of the hemp plant, rather than isolating a single chemical compound.
                                        <br/><br/>
                                        All our extracts also include a unique profile of rarer cannabinoids, such as CBC, CBN, or CBG, and terpenes, such as Limonene.
                                    </p>
                                </Dropdown>
                                <Dropdown title="Which concentration should I take?">
                                    <p className="mt-5">
                                        While there's no scientifically proven dosing regimen, you should approach hemp CBD oil step by step.
                                        <br/><br/>
                                        Start at a smaller dosage, but gradually increase the concentration until you find what works best for you. If you're new to CBD, we encourage you to use the first month to build up a routine that best fits your schedule.
                                        <br/><br/>
                                        For our tinctures, please review <a className="text-orange-600/80 hover:text-slate-800" target="_blank" href="https://cdn.shopify.com/s/files/1/1737/2201/files/How_to_Use_Populum_Tincture.pdf?3301">this infographic</a> that shows the breakdown of dosage.
                                    </p>
                                </Dropdown>
                                <Dropdown title="Why should I buy a CBD Set?">
                                    <p className="  mt-5">
                                        Our CBD Sets are perfect for power users or to gift to your loved ones. We offer 4 different bundles:
                                        <br/><br/>    
                                        <span className="font-medium text-slate-800">1. Advanced Wellness Set:</span> Perfect for experienced CBD users, this CBD set allows you to save up to $93 from MSRP.
                                        <br/><br/>
                                        <span className="font-medium text-slate-800">2. Evening Routine Set:</span> With a mixture of topical and oral application of CBD, this is the perfect kit to build a night time routine before going to bed. You can save up to $47 from MSRP with the bundle.
                                        <br/><br/>
                                        <span className="font-medium text-slate-800">3. Beginner Set:</span> This offers a bit of everything - from our oral tincture, topical, to even a pet tincture. A perfect starting point for those new to CBD! You can save up to $35 from MSRP. 
                                        <br/><br/>
                                        <span className="font-medium text-slate-800">4. Pet Lovers CBD:</span> Specifically designed to improve the wellbeing of your furry friends. Popular among customers who administer CBD regularly to their pets. You can save up to $31 from MSRP.
                                    </p>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
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