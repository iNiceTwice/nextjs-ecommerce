import Dropdown from "./Dropdown";
import Link from "next/link";

const FAQ = ({title, url}) => {
    return ( 
        <>
            <div className="w-full h-fit py-36 bg-slate-200/70">
                    <div className="flex justify-center">
                        <div className="w-4/5 lg:w-3/5">
                            <h3 className="text-slate-800/95 font-serif text-3xl">{title}</h3>
                            <Link href={url}>
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
        </>
    );
}
 
export default FAQ;