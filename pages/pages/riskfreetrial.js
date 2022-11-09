import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import Stars from "../../components/RatingStars"
import Dropdown from "../../components/Dropdown"

const Trial = () => {

    const pageTransition = {
        in:{
            opacity:1
        },
        out:{
            opacity:0
        }
    }    
    const [ width, setWidth ] = useState(0)
    const carousel = useRef()

    useEffect(()=>{
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    },[])

    return ( 
        <>
            <motion.div initial="out" animate="in" exit="out" variants={ pageTransition }>
                <div className="w-full mt-24">
                    <div className="relative w-full lg:w-11/12 mx-auto h-[30rem] lg:h-[40rem]">
                        <Image 
                            src="https://cdn.shopify.com/s/files/1/1737/2201/files/Try_Populum_Risk_Free_1700x.jpg?v=1613585612"
                            layout="fill"
                            priority
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </div>
                    <section className="relative -mt-32 z-10 lg:px-16 xl:px-40">
                        <div className="bg-sky-50 text-slate-800/90 w-full h-fit py-10 lg:py-20 px-5 lg:px-20 xl:px-40">
                            <h2 className="text-3xl font-serif">How our 30 day CBD risk-free trial works</h2>
                            <ul className="mt-8">
                                <li className="flex flex-col lg:flex-row lg:items-center border-t border-slate-300 pt-2 mb-4 ">
                                    <span className="flex items-center w-full">
                                        <spam className="flex -ml-4 lg:-ml-0 lg:pr-5 lg:flex-grow-[0.2] lg:flex-shrink">
                                            <Image src="https://cdn.shopify.com/s/files/1/1737/2201/files/Leaf_rgb_orangex2_e8a555ee-8a3c-43e5-a9d0-975daf2f11e8_small.png?v=1613584118" width={65} height={65}  objectFit="contain" objectPosition="center" loading="lazy" />
                                        </spam>
                                        <p className="font-medium lg:px-5 lg:flex-grow-[0.5] flex-shrink font-serif text-xl">Place an order</p>
                                    </span>
                                    <p className="w-full text-lg flex-grow flex-shrink">  
                                        Buy any <Link href="/"><a className="transition-colors cursor-pointer text-orange-600 hover:text-slate-800">Populum</a></Link> product, and we&apos;ll ship it out to you right away. Our 30 day risk-free trial is available to every first-time buyer. 
                                    </p>
                                </li>
                                <li className="flex flex-col lg:flex-row lg:items-center border-t border-slate-300 pt-2 mb-4 ">
                                    <span className="flex items-center w-full">
                                        <spam className="flex -ml-4 lg:-ml-0 lg:pr-5 lg:flex-grow-[0.2] lg:flex-shrink">
                                            <Image src="https://cdn.shopify.com/s/files/1/1737/2201/files/Thirty_rgb_orangex2_9b767b53-6442-4462-b54f-ea511c5fd010_small.png?v=1613583968" width={65} height={65}  objectFit="contain" objectPosition="center" loading="lazy" />
                                        </spam>
                                        <p className="font-medium lg:px-5 lg:flex-grow-[0.5] flex-shrink font-serif text-xl">Try for 30 days</p>
                                    </span>
                                    <p className="w-full text-lg flex-grow flex-shrink">        
                                        The trial period begins on the day you receive your package in the mail, and you are eligible for the next 30 days. 
                                    </p>
                                </li>
                                <li className="flex flex-col lg:flex-row lg:items-center border-t border-slate-300 pt-2 mb-4 ">
                                    <span className="flex items-center w-full">
                                        <spam className="flex -ml-4 lg:-ml-0 lg:pr-5 lg:flex-grow-[0.2] lg:flex-shrink">
                                            <Image src="https://cdn.shopify.com/s/files/1/1737/2201/files/Cycle_rgb_orangex2_small.png?v=1613569550" width={65} height={65}  objectFit="contain" objectPosition="center" loading="lazy" />
                                        </spam>
                                        <p className="font-medium lg:px-5 lg:flex-grow-[0.5] flex-shrink font-serif text-xl">Option to return</p>
                                    </span>
                                    <p className="w-full text-lg flex-grow flex-shrink">
                                    If you are unsatisfied with our product for any reason within those 30 days, please reach out to us via phone, email, or chat to initiate the return. Hassle-free and no questions asked.  
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className="mt-32 mb-32 px-5 lg:px-16 xl:px-40 text-slate-800/90">
                        <h2 className="mb-2 text-4xl font-serif">What our customers are saying</h2>
                        <a className="cursor-pointer text-lg font-medium font-mono text-orange-600 hover:text-slate-800 transition-colors">
                            Read All Reviews
                        </a>
                        <motion.div 
                            ref={ carousel } 
                            whileTap={{ cursor:"grabbing" }}
                            className="cursor-grab overflow-hidden w-full"
                        >
                            <motion.div 
                                className="flex mt-20 gap-x-28"
                                dragConstraints={{ right:0, left:-width }}
                                drag="x"
                            >
                                <motion.div className="flex flex-col gap-y-3 border-t py-8 h-full w-[25rem] min-w-[25rem] lg:w-[35rem] lg:min-w-[35rem] text-slate-800/90"> 
                                    <h2 className="font-serif text-2xl ">David H.</h2>
                                    <Stars filled={5}/>
                                    <p className="font-medium">Who else offers a 30 Day Trial? The answer is no one else does. Not all supplements work for everyone, so allowing a trial period is a good business practice. I contacted Populum to inquire about taking advantage of the trial period. I was pleasantly surprised at the ease with which they honored the request. They simply confirmed my information the sent me a prepaid shipping label. I gave Populum five stars for honoring their promise to refund the cost if it didn&apos;t work. A rare practice these days!</p>
                                </motion.div>
                                <motion.div className="flex flex-col gap-y-3 border-t py-8 h-full w-[25rem] min-w-[25rem] lg:w-[35rem] lg:min-w-[35rem] text-slate-800/90"> 
                                    <h2 className="font-serif text-2xl ">Sofie S.</h2>
                                    <Stars filled={5}/>
                                    <p className="font-medium">I did some research on alternative treatments and came across Populum. I was skeptical at first but figured I had nothing left to lose. I did the 30 day trial and am so glad I did! After the first week, I already noticed a huge improvement.</p>
                                </motion.div>
                                <motion.div className="flex flex-col gap-y-3 border-t py-8 h-full w-[25rem] min-w-[25rem] lg:w-[35rem] lg:min-w-[35rem] text-slate-800/90"> 
                                    <h2 className="font-serif text-2xl ">Alex T.</h2>
                                    <Stars filled={5}/>
                                    <p className="font-medium">Not all supplements work for everyone, so allowing a trial period is a good business practice. Not having had any relief of symptoms after three weeks, I contacted Populum to inquire about taking advantage of the trial period. I was pleasantly surprised at the ease with which they honored the request.</p>
                                </motion.div>
                                <motion.div className="flex flex-col gap-y-3 border-t py-8 h-full w-[25rem] min-w-[25rem] lg:w-[35rem] lg:min-w-[35rem] text-slate-800/90"> 
                                    <h2 className="font-serif text-2xl ">Margie M.</h2>
                                    <Stars filled={5}/>
                                    <p className="font-medium">I love my full spectrum oil. It tastes great and seems to kick in faster than the gel caps I was using form another company. I have waited to join the subscription feature until I knew if I liked the product and the dosage. I love it, and I&apos;m sold!!!</p>
                                </motion.div>
                                <motion.div className="flex flex-col gap-y-3 border-t py-8 h-full w-[25rem] min-w-[25rem] lg:w-[35rem] lg:min-w-[35rem] text-slate-800/90"> 
                                    <h2 className="font-serif text-2xl ">Jane S.</h2>
                                    <Stars filled={5}/>
                                    <p className="font-medium">I&apos;ve been using Populum Hemp Oil with CBD for about 3 weeks. I like the company, as well as the product. The packaging is attractive and substantial, there&apos;s a 30-day return policy (which I did not use), the on-line chat line is rapid and helpful, and you can talk to a real person, if needed. I feel generally better than I have in a long time.</p>
                                </motion.div>
                                <motion.div className="flex flex-col gap-y-3 border-t py-8 h-full w-[25rem] min-w-[25rem] lg:w-[35rem] lg:min-w-[35rem] text-slate-800/90"> 
                                    <h2 className="font-serif text-2xl ">Cloe R.</h2>
                                    <Stars filled={5}/>
                                    <p className="font-medium">I purchased the 250mg bundle mainly because my husband and dog were having some issues. I decided to join him in taking it so he would actually take it. I had no real expectations but I really really was surprised!</p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </section>
                    <section>
                        <div className="w-full h-fit py-36 bg-slate-200/70">
                            <div className="flex justify-center">
                                <div className="w-4/5 lg:w-3/5">
                                    <h3 className="text-slate-800/95 font-serif text-4xl">Frequently Asked Questions</h3>
                                    <Link href="/">
                                        <h4 className="mt-1 mb-6 w-fit cursor-pointer font-mono font-medium text-lg text-orange-600/80">Read full FAQ</h4>
                                    </Link>
                                    <Dropdown title="Why do I need a 30-day trial?">
                                        <p className="mt-5">
                                                Not all bodies are the same. CBD oil is still a new product for most people, and first-timers will have no idea whether or not CBD oil can give them their desired results. We also know that our customers are putting a lot of faith in us. Our goal is to deliver on that faith through quality products, and we want to give you the chance to test that out before making a decision. 
                                                <br/><br/>
                                                One of the main tennants of Populum is that we&apos;re here to help people access and discover CBD without any strings attached. That&apos;s where the 30-day trial comes in. If you don&apos;t like it, you can return it - no questions asked
                                            </p>
                                    </Dropdown>
                                    <Dropdown title="How do I return my order?">
                                        <p className="mt-5">
                                            To make a return during your 30-day trial, send an email to <a href="mailto:support@populum.com" className="text-orange-600 hover:text-slate-800 transition-colors cursor-pointer">support@populum.com</a>.
                                            <br/><br/>
                                            A customer experience representative will reach out to you within 1 to 2 business days with instructions on how to proceed with the return. Once the return process is complete, a full refund will made to your original form of payment.                                     
                                            <br/><br/>
                                            Refunds may take 5 to 7 business days to post to your bank or credit card.                                     
                                        </p>
                                    </Dropdown>
                                    <Dropdown title="What if I want to try multiple products?">
                                        <p className="mt-5">
                                            The 30-day trial applies to only one product per customer. If this is your first time trying CBD, we suggest ordering one product to try first before exploring more. If you do choose to order multiple, only one product will be eligible for a refund at the end of your trial period.
                                        </p>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </motion.div>
        </>
     );
}
 
export default Trial;