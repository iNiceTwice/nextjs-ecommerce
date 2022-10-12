import Image from "next/image"

const Featured = () => {
    return ( 
        <>
            <section className=" border-t mt-20 lg:mt-44 mx-6 lg:mx-20 xl:mx-40">
                <h4 className="font-bold text-sm text-center mb-10 mt-20 tracking-wider text-black/60">FEATURED IN</h4>
                <div className="h-full grid grid-cols-1 md:grid-cols-4">
                    <div className="px-4 py-6 flex flex-col items-center">
                        <Image 
                            src="https://cdn.shopify.com/s/files/1/1737/2201/files/Town_and_Country_v2_500x.png?v=1613596180"
                            height={50} width={400} objectFit="contain"    
                        />
                        <p className="mt-4 text-center font-bold text-black/40 text-sm">
                            "The Best Luxury CBD Products That Money Can Buy."
                        </p>
                    </div>
                    <div className="px-4 py-6 flex flex-col items-center">
                        <Image 
                            src="https://cdn.shopify.com/s/files/1/1737/2201/files/forbes_500x_65f2eb2f-7008-4101-b269-223c07e386ff_500x.png?v=1613570166"
                            height={50} width={400} objectFit="contain"    
                        />
                        <p className="mt-4 text-center font-bold text-black/40 text-sm">
                            "The Most Calming CBD Products For Self-Care."
                        </p>
                    </div>
                    <div className="px-4 py-6 flex flex-col items-center">
                        <Image 
                            src="https://cdn.shopify.com/s/files/1/1737/2201/files/Artboard_1_500x.png?v=1613536776"
                            height={50} width={400} objectFit="contain"    
                        />
                        <p className="mt-4 text-center font-bold text-black/40 text-sm">
                            "Best CBD Skin-Care Products to Try."
                        </p>
                    </div>
                    <div className="px-4 py-6 flex flex-col items-center">
                        <Image 
                            src="https://cdn.shopify.com/s/files/1/1737/2201/files/asa-logo-horizontal-web_500x.png?v=1613617924"
                            height={50} width={400} objectFit="contain"    
                        />
                        <p className="mt-4 text-center font-bold text-black/40 text-sm">
                            "They stand by their products through a 100% satisfaction guarantee."
                        </p>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Featured;