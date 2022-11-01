import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import Dropdown from "../../components/Dropdown"
import { IoPlaySharp ,IoCloseSharp } from "react-icons/io5"
import { motion } from "framer-motion"
import Table from "../../components/Table"

const whyPopulum = () => {

    const [ showVideo, setShowVideo ] = useState(false)
    const [ readMore, setReadMore ] = useState(true)
    const [ width, setWidth ] = useState(0)
    const carousel = useRef()

    useEffect(()=>{
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    },[])

    return ( 
        <>
            <section className="w-full mt-16 bg-red-200/40 pb-16 min-h-screen">
                <div className="pt-32"></div>
                <div className=" relative w-full lg:w-11/12 mx-auto h-[20rem] lg:h-[35rem] group">
                    <Image
                        src="https://cdn.shopify.com/s/files/1/1737/2201/files/Why_Populum_Feature_option_3_1700x.jpg?v=1616685531"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        priority
                    />
                    <div className="w-full h-full flex items-center justify-center">
                        <button
                            onClick={() => setShowVideo(true)}  
                            className="group-hover:scale-125 z-10 transition-all shadow-md bg-white p-5 rounded-full">
                            <IoPlaySharp className="text-slate-300" size={20} />
                        </button>
                    </div>
                </div>
                <div className="w-full text-center px-10 lg:px-52">
                    <h3 className="mt-20 font-serif text-2xl lg:text-4xl text-slate-800/90">At Populum we believe in great experiences. That's why we rigourously focus on product quality and transparency, happiness, and your well-being.</h3>
                </div>
                {
                    showVideo &&
                    <div className="fixed z-50 top-0 w-full h-screen bg-slate-700 flex items-center justify-center">
                        <button className="absolute top-10 right-10" onClick={() => setShowVideo(false)}>
                            <IoCloseSharp className="text-white hover:text-orange-600" size={40}/>
                        </button>
                        <iframe className="aspect-video w-full lg:w-7/12 h-auto" id="youtube-4034" frameBorder="0" allowFullScreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="Player for How Populum is Revolutionizing the CBD Industry" width="640" height="320" src="https://www.youtube-nocookie.com/embed/LJJNMZZ0C9I?autoplay=0&amp;controls=0&amp;disablekb=1&amp;playsinline=1&amp;cc_load_policy=0&amp;cc_lang_pref=auto&amp;widget_referrer=https%3A%2F%2Fpopulum.com%2Fpages%2Fwhy&amp;noCookie=true&amp;rel=0&amp;showinfo=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fpopulum.com&amp;widgetid=1" data-gtm-yt-inspected-6="true"></iframe>
                    </div>
                }
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-16 lg:py-32 px-8 lg:px-20 xl:px-52 mx-auto h-fit">
                <div>
                    <p className="text-lg text-slate-800/90">We believe you deserve better, and we're here to change the landscape of modern self-care. Populum is a collective of premium full spectrum CBD products designed to be a part of your daily wellness ritual.</p>
                    <div className="flex flex-col md:flex-row w-full gap-4 mt-8">
                         <Link href="/shop/all">
                            <button className="py-5 px-9 transition-colors font-medium bg-slate-800 hover:bg-orange-600/80 text-white">SHOP NOW</button>
                        </Link>
                        <button className=" py-5 px-9 transition-colors border border-slate-800 hover:text-white hover:bg-slate-800">READ REVIEWS</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 h-fit">
                    <div className="flex h-fit items-center py-2 border-t">
                        <Image src="https://cdn.shopify.com/s/files/1/1737/2201/files/flag_small.png?v=1613531243" loading="lazy" objectFit="contain" objectPosition="center" height={60} width={60}/>
                        <p className="text-lg text-slate-900/90">Made in the USA</p>
                    </div>
                    <div className="flex h-fit items-center py-2 border-t">
                        <Image src="https://cdn.shopify.com/s/files/1/1737/2201/files/snow_copy_small.png?v=1613531242" loading="lazy" objectFit="contain" objectPosition="center" height={60} width={60}/>
                        <p className="text-lg text-slate-900/90">Full-spectrum</p>
                    </div>
                    <div className="flex h-fit items-center py-2 border-t border-b">
                        <Image src="https://cdn.shopify.com/s/files/1/1737/2201/files/lightning_small.png?v=1613531242" loading="lazy" objectFit="contain" objectPosition="center" height={60} width={60}/>
                        <p className="text-lg text-slate-900/90">Max potency</p>
                    </div>
                    <div className="flex h-fit items-center py-2 md:border-t border-b">
                        <Image src="https://cdn.shopify.com/s/files/1/1737/2201/files/beaker_small.png?v=1613531242" loading="lazy" objectFit="contain" objectPosition="center" height={60} width={60}/>
                        <p className="text-lg text-slate-900/90">Thoroughly tested</p>
                    </div>
                </div>
            </section>
            <section className="flex flex-col lg:flex-row w-full gap-y-4">
                <div className="relative w-full h-[35rem] lg:h-[55rem] lg:w-1/2">
                    <Image src="https://cdn.shopify.com/s/files/1/1737/2201/files/populum-why_1400x.jpg?v=1656654819" layout="fill" objectFit="cover" objectPosition="center"/>
                </div>
                <div className={`relative px-8 lg:px-16 xl:px-32 w-full lg:w-1/2 text-slate-800/90 overflow-x-hidden ${readMore ? "overflow-y-hidden h-[40rem]" : "h-fit"}`}>
                    <p className="font-bold text-slate-800/80 mb-4 text-sm">OUR STORY</p>
                    <h2 className="font-serif text-4xl">Hi, I'm Greg Parker.</h2>
                    <p className="text-lg mt-4">
                        Growing up in South Korea, I was raised in a family that embraced the healing power of plants for everyday medicine. We used natural herbs to soothe and repair the skin, body, and mind. I had many health issues as a child and pure plant-based remedies proved to be the most effective treatment. As I grew older and my passion for plant-based supplements deepened, I discovered hemp CBD. The more I learned about CBD, the more passionate I felt about championing its benefits and making it accessible to everyone. Inspired, I launched <Link href="/"><a className="cursor-pointer text-orange-600 hover:text-slate-800/90">Populum</a></Link> in 2016. 
                        <br/><br/>
                        At the time, the CBD landscape was overcrowded and rampant with misinformation, exaggerated claims, and a lack of regulation. Naturally, I saw how harmful this was to the reputation of a plant that was already historically stigmatized. Through Populum, I was on a mission to educate people about CBD, create the highest quality products available, and, most importantly, establish a higher standard for the industry.
                        <br/><br/>
                        “Ad Populum” translates to “for the people” in Latin. When I began Populum, I set out to create a brand that truly is for the people it serves. This value continues to be a driving force for us and is reflected in the <a className="cursor-pointer text-orange-600 hover:text-slate-800/90">hundreds of reviews</a> from loyal customers who have tried and continue to use our hemp CBD. It's reflected in the strict quality assurance standards that we adhere to. It's reflected in the person-to-person connection that our team has with our community. Today, we've served more than 25,000 customers, with that number growing every day. I am so proud of the brand we've built, the people we've helped, and look forward to continuing our mission.
                    </p>
                    <br/>
                    <div className={`${readMore && "bg-gradient-to-t from-white to-white/70"} w-full h-16 absolute z-10 bottom-0 flex flex-col-reverse items-start`}>
                        {
                            readMore ? 
                            <button 
                                onClick={()=>setReadMore(false)}
                                className="w-full text-start bg-white transition-colors text-orange-600/80 hover:text-slate-800 font-medium text-lg"
                            >
                                Read More
                            </button>
                            : 
                            <button 
                                onClick={()=>setReadMore(true)}
                                className="w-full text-start bg-white transition-colors text-orange-600/80 hover:text-slate-800 font-medium text-lg"
                            >
                                Read Less
                            </button> 
                        }
                    </div>
                </div>
            </section>
            <section className="mt-32 px-5 lg:px-16 xl:px-40 text-slate-800/90">
                <p className="font-bold text-slate-800/80 mb-4 text-sm text-center">OUR PROCESS</p>
                <h2 className="mb-2 text-2xl lg:text-4xl font-serif text-center">How our CBD is Made</h2>
                <motion.div 
                    ref={ carousel } 
                    whileTap={{ cursor:"grabbing" }}
                    className="cursor-grab overflow-hidden w-full"
                >
                    <motion.div 
                        className="flex mt-10 lg:mt-20"
                        dragConstraints={{ right:0, left:-width }}
                        drag="x"
                    >
                        <motion.div className="flex flex-col border-r border-l pl-12 p-8 h-full w-[25rem] min-w-[25rem] lg:w-[30rem] lg:min-w-[30rem] text-slate-800/90">
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-medium text-2xl mb-2 text-orange-600/80 font-serif">01</p>
                                    <h2 className="font-serif text-2xl ">Planted</h2>
                                </div>
                                <div>
                                    <Image loading="lazy" src="https://cdn.shopify.com/s/files/1/1737/2201/files/Planted_icon_4211e4a9-a9b7-4bd3-bb46-46b8b8ad9203_small.png?v=1616686499" height={100} width={100}/>
                                </div>
                            
                            </div>
                            <p className="font-medium">We plant our hemp on our Colorado farm during the spring.</p>
                        </motion.div>
                        <motion.div className="flex flex-col border-r pl-12 p-8 h-full w-[25rem] min-w-[25rem] lg:w-[30rem] lg:min-w-[30rem] text-slate-800/90">
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-medium text-2xl mb-2 text-orange-600/80 font-serif">02</p>
                                    <h2 className="font-serif text-2xl ">Harvested</h2>
                                </div>
                                <div>
                                    <Image loading="lazy" src="https://cdn.shopify.com/s/files/1/1737/2201/files/Harvested_icon_b202451c-b693-452f-aeff-3d275fc2c7d3_small.png?v=1616686703" height={100} width={100}/>
                                </div>
                            
                            </div>
                            <p className="font-medium">The hemp is harvested in the fall, where it's then cured and air dried.</p>
                        </motion.div>
                        <motion.div className="flex flex-col border-r pl-12 p-8 h-full w-[25rem] min-w-[25rem] lg:w-[30rem] lg:min-w-[30rem] text-slate-800/90">
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-medium text-2xl mb-2 text-orange-600/80 font-serif">03</p>
                                    <h2 className="font-serif text-2xl ">1st Lab Test Completed</h2>
                                </div>
                                <div>
                                    <Image loading="lazy" src="https://cdn.shopify.com/s/files/1/1737/2201/files/Labtested_icon_31981d9a-97ea-480b-b21a-6b1d78c19d6a_small.png?v=1616686703" height={100} width={100}/>
                                </div>
                            
                            </div>
                            <p className="font-medium">After harvest, we do our first lab test for pesticides, heavy metals, and cannabinoid potency.</p>
                        </motion.div>
                        <motion.div className="flex flex-col border-r pl-12 p-8 h-full w-[25rem] min-w-[25rem] lg:w-[30rem] lg:min-w-[30rem] text-slate-800/90">
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-medium text-2xl mb-2 text-orange-600/80 font-serif">04</p>
                                    <h2 className="font-serif text-2xl ">Extracted</h2>
                                </div>
                                <div>
                                    <Image loading="lazy" src="https://cdn.shopify.com/s/files/1/1737/2201/files/Extracted_icon_3f7fcd6e-163b-46f9-86d4-7164893aeec2_small.png?v=1616686703" height={100} width={100}/>
                                </div>
                            
                            </div>
                            <p className="font-medium">Our proprietary technology isolates and removes any unwanted compounds, while creating the maximum potency for a full-spectrum extract.</p>
                        </motion.div>
                        <motion.div className="flex flex-col border-r pl-12 p-8 h-full w-[25rem] min-w-[25rem] lg:w-[30rem] lg:min-w-[30rem] text-slate-800/90">
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-medium text-2xl mb-2 text-orange-600/80 font-serif">05</p>
                                    <h2 className="font-serif text-2xl ">Formulated</h2>
                                </div>
                                <div>
                                    <Image loading="lazy" src="https://cdn.shopify.com/s/files/1/1737/2201/files/Formulated_icon_362c4623-84b5-4a79-8e60-896ed7edf731_small.png?v=1616686703" height={100} width={100}/>
                                </div>
                            
                            </div>
                            <p className="font-medium">The extraction is sent to our CGMP certified facility, where it's formulated with other natural ingredients.</p>
                        </motion.div>
                        <motion.div className="flex flex-col border-r pl-12 p-8 h-full w-[25rem] min-w-[25rem] lg:w-[30rem] lg:min-w-[30rem] text-slate-800/90">
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-medium text-2xl mb-2 text-orange-600/80 font-serif">06</p>
                                    <h2 className="font-serif text-2xl ">2nd Lab Test Completed</h2>
                                </div>
                                <div>
                                    <Image loading="lazy" src="https://cdn.shopify.com/s/files/1/1737/2201/files/Labtested_icon_31981d9a-97ea-480b-b21a-6b1d78c19d6a_small.png?v=1616686703" height={100} width={100}/>
                                </div>
                            
                            </div>
                            <p className="font-medium">The formulated oil is sent to a third party lab to test for potency,  microbials & pesticides.</p>
                        </motion.div>
                        <motion.div className="flex flex-col border-r pl-12 p-8 h-full w-[25rem] min-w-[25rem] lg:w-[30rem] lg:min-w-[30rem] text-slate-800/90">
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-medium text-2xl mb-2 text-orange-600/80 font-serif">07</p>
                                    <h2 className="font-serif text-2xl ">Packaged</h2>
                                </div>
                                <div>
                                    <Image loading="lazy" src="https://cdn.shopify.com/s/files/1/1737/2201/files/Packaged_icon_bba6c1af-df97-47fd-8b53-8e364980a2ab_small.png?v=1616686703" height={100} width={100}/>
                                </div>
                            
                            </div>
                            <p className="font-medium">Solutions are bottled with care & packaged to be shipped to customers.</p>
                        </motion.div>
                        <motion.div className="flex flex-col border-r pl-12 p-8 h-full w-[25rem] min-w-[25rem] lg:w-[30rem] lg:min-w-[30rem] text-slate-800/90">
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-medium text-2xl mb-2 text-orange-600/80 font-serif">08</p>
                                    <h2 className="font-serif text-2xl ">3rd Lab Test Completed</h2>
                                </div>
                                <div>
                                    <Image loading="lazy" src="https://cdn.shopify.com/s/files/1/1737/2201/files/Labtested_icon_31981d9a-97ea-480b-b21a-6b1d78c19d6a_small.png?v=1616686703" height={100} width={100}/>
                                </div>
                            
                            </div>
                            <p className="font-medium">We send the final product to a third-party lab to do thorough testing for purity and accuracy.</p>
                        </motion.div>
                        <motion.div className="flex flex-col border-r border-l pl-12 p-8 h-full w-[25rem] min-w-[25rem] lg:w-[30rem] lg:min-w-[30rem] text-slate-800/90">
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-medium text-2xl mb-2 text-orange-600/80 font-serif">09</p>
                                    <h2 className="font-serif text-2xl ">Lab Results Certified</h2>
                                </div>
                                <div>
                                    <Image loading="lazy" src="https://cdn.shopify.com/s/files/1/1737/2201/files/Certified_icon_f3405208-2afd-4406-b5b8-d35ea405a037_small.png?v=1616686703" height={100} width={100}/>
                                </div>
                            
                            </div>
                            <p className="font-medium">We certify the lab results to ensure our products contain the labeled amount of CBD, and show no traces of heavy metals, pesticides or residual solvents. This is our CBD concentration promise.</p>
                        </motion.div>
                        <motion.div className="flex flex-col border-r border-l pl-12 p-8 h-full w-[25rem] min-w-[25rem] lg:w-[30rem] lg:min-w-[30rem] text-slate-800/90">
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-medium text-2xl mb-2 text-orange-600/80 font-serif">10</p>
                                    <h2 className="font-serif text-2xl ">Delivered</h2>
                                </div>
                                <div>
                                    <Image loading="lazy" src="https://cdn.shopify.com/s/files/1/1737/2201/files/Delivered_icon_155a079b-36f7-450c-b961-0502cc77d60a_small.png?v=1616686703" height={100} width={100}/>
                                </div>
                            
                            </div>
                            <p className="font-medium">We make sure every package is handled with care, includes the third-party lab results, and delivered right to the customer's door.</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <div className="flex flex-col md:flex-row w-full items-center justify-center gap-4 mt-8">
                    <Link href="/shop/all">
                        <button className="py-5 px-9 w-full md:w-fit transition-colors font-medium bg-slate-800 hover:bg-orange-600/80 text-white">SHOP NOW</button>
                    </Link>
                    <button className="py-5 px-9 w-full md:w-fit transition-colors border border-slate-800 hover:text-white hover:bg-slate-800">LEARN MORE</button>
                </div>
            </section>
                <section className="w-full flex my-32 flex-col-reverse lg:flex-row gap-y-4">
                    <div className="w-full lg:w-1/2 px-10 lg:px-40 text-slate-800/90">
                        <p className="text-slate-800/80 font-bold my-4 text-sm">OUR VALUES</p>
                        <Dropdown title="We use clean ingredients.">
                            <p className="text-lg mt-4">
                                We keep our products clean and simple because we believe in the pure benefits of hemp CBD. Our commitment to clean means following ethical and cGMP certified practices. Our products are vegan, cruelty-free, paraben-free, non-GMO. To back it up, we lead the industry by triple testing our products. And we send the third-party lab results in every shipment to certify our CBD concentration promise.
                            </p>
                        </Dropdown>
                        <Dropdown title="We guarantee our CBD concentration.">
                            <p className="text-lg mt-4">
                                According to an FDA report, more than 50% of CBD companies surveyed sold products that were mislabeled, containing either more or less CBD than advertised. As full-spectrum CBD oil is formulated using 100% naturally derived extracts, it is impossible to make the CBD potency exactly the same for each batch. At Populum, we guarantee we're always delivering on the labeled potency, while staying within a deviation of up to 10% more CBD than what is labeled. This is our CBD concentration promise.
                            </p>
                        </Dropdown>
                        <Dropdown title="We believe in the facts.">
                            <p className="text-lg mt-4">
                                There are all kinds of stories in the market, and it's difficult as a consumer to sort through fact versus fiction when it comes to navigating CBD. We started in 2016, making us one of the oldest companies in the CBD industry. We use our experience not only to provide you with trustworthy products, but also with factual education about CBD. Transparency is at the core of everything we do, so you can trust that we'll never issue false or exaggerated claims.
                            </p>
                        </Dropdown>
                        <Dropdown title="We lead with cutting-edge science.">
                            <p className="text-lg mt-4">
                                There's so much more to CBD than just “CBD.” The hemp plant is made up of 100s of compounds. We work with leading chemists and scientists using proprietary technology to create the most effective form of full-spectrum CBD on the market. So in addition to CBD, you also get a healthy mix of CBC, CBG, CBN and terpenes in every bottle.
                            </p>
                        </Dropdown>
                        <Dropdown title="We are dedicated to our customers.">
                            <p className="text-lg mt-4">
                                “Populum” translates to “for the people'' in Latin, so our goal is to always put our customers' needs first. At Populum, we embody this phrase, and it is (hopefully) apparent through our interactions with you. From the CEO to our interns, everyone at Populum is part of our customer service team (or a.k.a. “CBD Concierge”). And while we can surely answer any question you have about CBD, we are also friendly people who genuinely care and that you can reach out to just to say “hi.”
                            </p>
                        </Dropdown>
                        <Dropdown title="We believe in the power of community.">
                            <p className="text-lg mt-4">
                                We believe in the power of the communities we create and serve. We are passionate about creating programs rooted in wellness that support those who need it most, like our Rescued Pets Program or our Veterans Program. Supporting our local communities through volunteer work and partnering with small local businesses is what makes us feel good each day, and we want our customers to feel good knowing their purchase supports this too.
                            </p>
                        </Dropdown>
                    </div>
                    <div className="relative w-full lg:w-1/2 h-[35rem] lg:h-[45rem]">
                        <Image 
                            src="https://cdn.shopify.com/s/files/1/1737/2201/files/Populum-Values_707x.png?v=1616686409"
                            layout="fill"
                            loading="lazy"
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </div>
                </section>
                <section className="bg-sky-50 mt-32 lg:p-32 w-full h-fit flex lg:flex-row flex-col gap-y-8 text-slate-800/90">
                    <div className="relative w-full h-[25rem] lg:h-[35rem] lg:-mt-52">
                        <Image 
                            src="https://cdn.shopify.com/s/files/1/1737/2201/files/Populum-Apartment--2823_1400x.png?v=1613531243"
                            layout="fill"
                            loading="lazy"
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </div>
                    <div className="w-full h-full my-auto p-[10vw] lg:p-0 lg:pl-[10vw] gap-y-4 flex flex-col justify-center">
                        <p className="text-slate-800/80 font-bold text-sm">COMPARISON CHART</p>
                        <h2 className="text-2xl lg:text-4xl font-serif">There's no comparison in quality, strength, and care.</h2>
                        <p className="text-lg">
                            There are all kinds of stories in the CBD market, but we are here with a promise to you that our ingredients are safe, tested, natural, and clean - with strong, full-spectrum concentrations. What's more, we make ourselves available to you. We have representatives standing by in case you want to chat, email, or speak to a human. We want you to be happy, and we'll help you through the experience. And if you aren't satisfied after we've given you time to give it a real, honest try, we'll take it back. That's a promise. We're not hiding anything, and you shouldn't have to settle for less.
                        </p>
                        <a className="font-mono text-lg text-orange-600/80 hover:text-slate-800/90 transition-colors cursor-pointer">View our comparison chart</a>
                    </div>
                </section>
                <section className="w-full py-32 px-2 lg:px-32">
                    <Table/>
                </section>
        </>
     );
}


export default whyPopulum;