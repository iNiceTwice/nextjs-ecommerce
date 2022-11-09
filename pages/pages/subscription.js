import Intro from "../../components/Intro";
import Benefits from "../../components/Benefits";
import Dropdown from "../../components/Dropdown";
import Image from "next/image";
import Link from "next/link";
import ShopItem from "../../components/ShopItem";
import axios from "axios";
import { motion } from "framer-motion";

const Subscription = ({ products }) => {

    const withVariants = products.filter(product => product.price.length > 1 )
    const withoutVariants = products.filter(product => product.price.length === 1 )
    const pageTransition = {
        in:{
            opacity:1
        },
        out:{
            opacity:0
        }
    }

    return ( 
        <>
            <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
                <Intro
                    title="Wellness Made Easy"
                    text="All your favorite CBD products, delivered to your door with 20% monthly savings. Customize your delivery or cancel anytime."
                    buttonText="SUBSCRIBE"
                    buttonColor="secondary"
                    buttonUrl="/pages/subscription"
                    bgColor="bg-red-50"
                    img="https://cdn.shopify.com/s/files/1/1737/2201/files/Untitled_design_7_1400x.png?v=1613614110"
                />
                <section className="lg:mt-44 lg:px-16 xl:px-40">
                    <div className="bg-sky-100/70 text-slate-800/90 w-full h-fit py-10 lg:py-20 px-5 lg:px-20 xl:px-40">
                        <h2 className="text-3xl font-serif">Why Subscribe?</h2>
                        <ul className="mt-8">
                            <li className="flex flex-col lg:flex-row lg:items-center border-t border-slate-300 pt-2 mb-4 ">
                                <span className="flex items-center w-full">
                                    <span className="flex -ml-4 lg:-ml-0 lg:pr-5 lg:flex-grow-[0.2] lg:flex-shrink">
                                        <Image src="https://cdn.shopify.com/s/files/1/1737/2201/files/Leaf_rgb_orangex2_e8a555ee-8a3c-43e5-a9d0-975daf2f11e8_small.png?v=1613584118" width={65} height={65}  objectFit="contain" objectPosition="center" loading="lazy" />
                                    </span>
                                    <p className="font-medium lg:px-5 lg:flex-grow-[0.5] flex-shrink font-serif text-xl">20% off all orders</p>
                                </span>
                                <p className="w-full text-lg flex-grow flex-shrink">
                                   We&apos;ll reward your commitment to wellness with a 20% discount on all orders. 
                                </p>
                            </li>
                            <li className="flex flex-col lg:flex-row lg:items-center border-t border-slate-300 pt-2 mb-4 ">
                                <span className="flex items-center w-full">
                                    <span className="flex -ml-4 lg:-ml-0 lg:pr-5 lg:flex-grow-[0.2] lg:flex-shrink">
                                        <Image src="https://cdn.shopify.com/s/files/1/1737/2201/files/Cycle_rgb_orangex2_small.png?v=1613569550" width={65} height={65}  objectFit="contain" objectPosition="center" loading="lazy" />
                                    </span>
                                    <p className="font-medium lg:px-5 lg:flex-grow-[0.5] flex-shrink font-serif text-xl">Cancel or skip anytime</p>
                                </span>
                                <p className="w-full text-lg flex-grow flex-shrink">
                                   We make it easy to receive Populum on your schedule. You can cancel anytime.  
                                </p>
                            </li>
                            <li className="flex flex-col lg:flex-row lg:items-center border-t border-slate-300 pt-2 mb-4 ">
                                <span className="flex items-center w-full">
                                    <span className="flex -ml-4 lg:-ml-0 lg:pr-5 lg:flex-grow-[0.2] lg:flex-shrink">
                                        <Image src="https://cdn.shopify.com/s/files/1/1737/2201/files/Thirty_rgb_orangex2_9b767b53-6442-4462-b54f-ea511c5fd010_small.png?v=1613583968" width={65} height={65}  objectFit="contain" objectPosition="center" loading="lazy" />
                                    </span>
                                    <p className="font-medium lg:px-5 lg:flex-grow-[0.5] flex-shrink font-serif text-xl">Risk Free Trial</p>
                                </span>
                                <p className="w-full text-lg flex-grow flex-shrink">        
                                    First time trying Populum or CBD? Our subscription comes with a 30-day risk-free trial & 100% guarantee. 
                                </p>
                            </li>
                            <li className="flex flex-col lg:flex-row lg:items-center border-t border-slate-300 pt-2 mb-4 ">
                                <span className="flex items-center w-full">
                                    <span className="flex -ml-4 lg:-ml-0 lg:pr-5 lg:flex-grow-[0.2] lg:flex-shrink">
                                        <Image src="https://cdn.shopify.com/s/files/1/1737/2201/files/Wallet_rgb_orangex2_d2a8cc6b-955a-45cd-bb5a-d47fba3ede49_small.png?v=1613578195" width={65} height={65}  objectFit="contain" objectPosition="center" loading="lazy" />
                                    </span>
                                    <p className="font-medium lg:px-5 lg:flex-grow-[0.5] flex-shrink font-serif text-xl">Free US shipping</p>
                                </span>
                                <p className="w-full text-lg flex-grow flex-shrink">
                                   We ship every order to you free, at the cadence you want.  
                                </p>
                            </li>
                            <li className="flex flex-col lg:flex-row lg:items-center border-t border-slate-300 pt-2 mb-4 ">
                                <span className="flex items-center w-full">
                                    <span className="flex -ml-4 lg:-ml-0 lg:pr-5 lg:flex-grow-[0.2] lg:flex-shrink">
                                        <Image src="https://cdn.shopify.com/s/files/1/1737/2201/files/Leaf_rgb_orangex2_e8a555ee-8a3c-43e5-a9d0-975daf2f11e8_small.png?v=1613584118" width={65} height={65}  objectFit="contain" objectPosition="center" loading="lazy" />
                                    </span>
                                    <p className="font-medium lg:px-5 lg:flex-grow-[0.5] flex-shrink font-serif text-xl">Quality guaranteed</p>
                                </span>
                                <p className="w-full text-lg flex-grow flex-shrink">
                                   We triple test for quality & purity, and use a proprietary formulation to deliver the most effective CBD products on the market.   
                                </p>
                            </li>
                            <li className="flex flex-col lg:flex-row lg:items-center border-t border-slate-300 pt-2 mb-4 ">
                                <span className="flex items-center w-full">
                                    <span className="flex -ml-4 lg:-ml-0 lg:pr-5 lg:flex-grow-[0.2] lg:flex-shrink">
                                        <Image src="https://cdn.shopify.com/s/files/1/1737/2201/files/Parcel_rgb_orangex2_991c179c-21ed-4288-a0bd-66eca90330e9_small.png?v=1613578195" width={65} height={65}  objectFit="contain" objectPosition="center" loading="lazy" />
                                    </span>
                                    <p className="font-medium lg:px-5 lg:flex-grow-[0.5] flex-shrink font-serif text-xl">Exclusive rewards</p>
                                </span>
                                <p className="w-full text-lg flex-grow flex-shrink">   
                                  Your happiness is our priority which is why we&apos;ll send free products, gifts, and rewards to say thank you. 
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="mb-32">
                    <Benefits title="Who is it best for?" benefits={ benefitsItems } />
                </section>
                <section className="mb-32 lg:px-16 xl:px-40">
                    <hr/>
                    <h2 className="px-10 lg:px-32 xl:px-44 mt-28 text-2xl font-medium text-slate-800/90 font-serif text-center">Create your own subscription bundle. Choose as many products as you&apos;d like. The more you choose, the more you save!</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-x-6 gap-y-16 mt-32 w-full ">
                        {
                            withVariants.map((product)=>{
                               return product.price.map((variant,index)=>(
                                    <ShopItem 
                                        key={product.title + index}
                                        title={product.title}
                                        img={product.img[0]}
                                        subscription={true}
                                        concentration={product.price[index].size}
                                        price={ product.price[index].price }
                                    />
                                ))
                            }) 
                        }
                        {
                            withoutVariants.map((product,index)=>(
                                <ShopItem
                                    key={product.title + index}
                                    title={product.title}
                                    img={product.img[0]}
                                    subscription={true}
                                    concentration={product.price[0].size}
                                    price={ product.price[0].price }
                                />
                            ))
                        }
                    </div>
                </section>
                <section>
                    <div className="w-full h-fit py-36 bg-slate-200/70">
                        <div className="flex justify-center">
                            <div className="w-4/5 lg:w-3/5">
                                <h3 className="text-slate-800/95 font-serif text-3xl">Subscription Q&A</h3>
                                <Link href="/">
                                    <h4 className="w-fit cursor-pointer font-mono font-medium text-lg text-orange-600/80">Read full FAQ</h4>
                                </Link>
                                <Dropdown title="How does your subscription service work?">
                                    <p className="mt-5">
                                            Customers who use CBD on a regular basis can make it easier on themselves and subscribe to Populum. Subscribers save 20% on items they choose to have delivered, and we&apos;ll make sure your order is at your door every month. 
                                            <br/><br/>
                                            To sign up for a subscription, just seleted the products you&apos;d like to subscribe to and go to your cart to checkout.
                                        </p>
                                </Dropdown>
                                <Dropdown title="How do I manage my subscription?">
                                    <p className="mt-5">
                                        Managing your subscription is easy. You can change your delivery address, credit card information, skip, or adjust deliveries anytime you’d like. To make any changes to your subscription, follow the steps below:
                                        <br/><br/>
                                        <ul>
                                            <li>
                                                1. Register for an account or log in to your existing account <Link href="/account/login"><a className="text-orange-600/80 hover:text-slate-800">here</a></Link>.
                                            </li>
                                            <li>
                                                2. Click on “Manage Subscriptions”. 
                                            </li>
                                            <li>
                                                3. Visit “Subscription Details” to edit any of the following:
                                            </li>
                                            <br/>
                                            <li>
                                                - Next scheduled order date
                                            </li>
                                            <li>
                                                - Shipping address
                                            </li>
                                            <li>
                                                - Billing address
                                            </li>
                                            <li>
                                                - Change payment information
                                            </li>
                                            <li>
                                                - Cancel subscription
                                            </li>
                                        </ul>
                                    </p>
                                </Dropdown>
                                <Dropdown title="How often does a subscription renew?">
                                    <p className="mt-5">
                                        The default cadence for subscriptions is 30 days. However, you can customize how often you receive your bottle on your subscription portal <span className="italic">(i.e 45, 60, or even 55 days)</span>.
                                        <br/><br/>
                                        You will receive an notification that your subscription will renew 5 days prior to renewal. All notifications will be sent to the Populum account email address.
                                    </p>
                                </Dropdown>
                                <Dropdown title="How does the 30-day trial work?">
                                    <p className="mt-5">
                                        Our 30-day trial is available to every first-time buyer.
                                        <br/><br/>
                                        The trial period begins on the day you receive your package in the mail. If you are unsatisfied with our product within the 30-day trial period, you can send it back and request a full refund.We encourage you to try our products for the full 30 days to allow for your body to adapt, but we will accept the return at any time.
                                        <br/><br/>
                                        Trial periods are limited to first-time customers only; one product per customer. 
                                        <br/><br/>
                                        To initiate the refund process, please reach out to our Customer Experience team:
                                        <br/>
                                        Email: <a className="text-orange-600/80 hover:text-slate-800" href="mailto:support@populum.com">support@populum.com</a>
                                        <br/>
                                        Phone: (855) 872-2772
                                    </p>
                                </Dropdown>
                                <Dropdown title="What if something is wrong with my order or subscription?">
                                    <p className="mt-5">
                                        If you notice any problems or defects with the product when you receive it, we are happy to exchange or return it for no additional cost. Reach out to <a className="text-orange-600/80 hover:text-slate-800" href="mailto:support@populum.com">support@populum.com</a> for more information on replacements and returns for defective merchandise.
                                    </p>
                                </Dropdown>
                                <Dropdown title="How do I cancel my subscription?">
                                    <p className="  mt-5">
                                        You may cancel or modify your Populum subscriptions at any time in your <Link href="/account/profile"><a className="text-orange-600/80 hover:text-slate-800">Account Dashboard</a></Link> or by contacting Populum&apos;s <Link href="/pages/contact"><a className="text-orange-600/80 hover:text-slate-800">Customer Service</a></Link>.
                                    </p>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </section>
            </motion.div>
        </>
     );
}

export const getStaticProps = async context => {
    const url = process.env.HOST
    const response = await axios.get(`${url}/api/products/all`)

    return {
        props:{
            products:response.data
        }
    }
}

const benefitsItems = [
    {
        text:"Experienced CBDers",
        img:"https://cdn.shopify.com/s/files/1/1737/2201/files/Waves_rgb_orangex2_small.png?v=1613584121"
    },
    {
        text:"Multi-user homes",
        img:"https://cdn.shopify.com/s/files/1/1737/2201/files/Sparkle_rgb_orangex2_cd84931a-12b7-426f-9b77-28d335cd3614_small.png?v=1613583968"
    },
    {
        text:"Power users",
        img:"https://cdn.shopify.com/s/files/1/1737/2201/files/Zen_orange_2x_50fc408f-fcfd-43a9-b777-95e1c9cd5068_small.png?v=1613583968"
    },
    {
        text:"Busy professionals",
        img:"https://cdn.shopify.com/s/files/1/1737/2201/files/Lightening_rgb_orangex2_small.png?v=1613584121"
    },
    {
        text:"Money-savers",
        img:"https://cdn.shopify.com/s/files/1/1737/2201/files/Wallet_rgb_orangex2_d2a8cc6b-955a-45cd-bb5a-d47fba3ede49_small.png?v=1613578195"
    },
    {
        text:"Busy parents",
        img:"https://cdn.shopify.com/s/files/1/1737/2201/files/Wellness_rgb_orangex2_small.png?v=1613578195"
    },
]
 
export default Subscription;