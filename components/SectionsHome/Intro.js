import Image from "next/image"

const Intro = () => {
    return ( 
        <>
            <section className="flex flex-col-reverse lg:flex-row h-full items-center mt-24 lg:mt-60">
                <div className="w-11/12 -mt-10 lg:-mt-0 lg:w-[46vw] h-full lg:h-[40vw] lg:ml-[3vw] lg:-mr-36 py-8 lg:py-0 relative z-10 bg-sky-50 ">
                    <div className="h-full px-7 lg:px-10 justify-center text-center flex flex-col items-center gap-y-5">
                    <h2 className=" text-3xl lg:text-4xl xl:text-6xl text-black/80 font-serif">Clean & Premium CBD</h2>
                    <p className="lg:text-xl font-medium text-black/70">We're on a mission to create high-quality, ethical, and honest CBD. Try us risk-free today.</p>
                    <button className="py-5 mt-3 font-medium w-40 bg-orange-600/80 hover:bg-slate-800 text-white">SHOP CBD</button>
                    </div>
                </div>
                <div className="relative lg:absolute right-0 w-full lg:w-[54vw] h-[67vw] lg:h-[48vw] lg:mr-[3vw]">
                    <Image src="https://cdn.shopify.com/s/files/1/1737/2201/files/populum-orange_1400x.webp?v=1662465868" objectFit="cover" layout="fill" />
                </div>
            </section>
        </>
     );
}
 
export default Intro;