import Image from "next/image"

const Benefits = () => {
    return ( 
        <>
            <section className="flex justify-center items-center flex-col mt-32 lg:mt-20 text-center">
                <div className="max-w-5xl px-10 lg:px-9 ">
                    <h2 className="text-black/70 font-serif text-2xl lg:text-3xl xl:text-4xl">Our CBD is award-winning and triple-tested for quality. Try for 30 days & love it or send it back—no questions asked.</h2>
                    <ul className="grid gap-x-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center lg:flex-row w-full mt-14">
                        <li className="p-2 border-t flex items-center">
                            <Image src="https://cdn.shopify.com/s/files/1/1737/2201/files/flag_small.png?v=1613531243" height={70} width={70}/>   
                            <p className="font-medium text-black/80">Made in the USA</p>
                        </li>
                        <li className="p-2 border-t flex items-center">
                            <Image src="https://cdn.shopify.com/s/files/1/1737/2201/files/lightning_small.png?v=1613531242" height={70} width={70}/>   
                            <p className="font-medium text-black/80">Full-Spectrum Extracts</p>
                        </li>
                        <li className="p-2 border-t flex items-center">
                            <Image src="https://cdn.shopify.com/s/files/1/1737/2201/files/thirty_small.png?v=1613531242" height={70} width={70}/>   
                            <p className="font-medium text-black/80">30-Day Risk-Free Trial</p>
                        </li>
                        <li className="p-2 border-t flex items-center">
                            <Image src="https://cdn.shopify.com/s/files/1/1737/2201/files/medal_small.png?v=1613531242" height={70} width={70}/>   
                            <p className="font-medium text-black/80">Science Driven</p>
                        </li>
                        <li className="p-2 border-t flex items-center">
                            <Image src="https://cdn.shopify.com/s/files/1/1737/2201/files/beaker_small.png?v=1613531242" height={70} width={70}/>   
                            <p className="font-medium text-black/80">Triple-Tested</p>
                        </li>
                        <li className="p-2 border-t flex items-center">
                            <Image src="https://cdn.shopify.com/s/files/1/1737/2201/files/leaf_small.png?v=1613531242" height={70} width={70}/>   
                            <p className="font-medium text-black/80">Vegan & Non-GMO</p>
                        </li>
                    </ul>
                    <div className="flex gap-4 mt-10 flex-col lg:flex-row w-full md:max-w-xl mx-auto">
                        <button className="transition-colors w-full py-4 font-medium bg-slate-800 hover:bg-orange-500 text-white/90">SHOP CBD BESTSELLERS</button>
                        <button className="transition-colors w-full py-4 hover:bg-slate-800 border border-black text-black/90 hover:text-white">READ REVIEWS</button>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Benefits;    