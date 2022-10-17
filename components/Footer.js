import Link from "next/link"
import Logo from "./Logo"

const Footer = () => {
    return ( 
        <>
            <section className="flex justify-center flex-col lg:flex-row-reverse py-32 px-5 bg-slate-800">
                     <div className="mb-10 lg:ml-32 flex flex-col items-start lg:items-end gap-4">
                        <Logo color="fill-white"/>
                        <div className="w-full text-left lg:text-right flex justify-between flex-row lg:flex-col gap-4">
                            <div>
                                <p className="font-medium text-white/70">Populum,</p>
                                <p className="font-medium text-white/70">315 W Elliot Rd #107-430</p>
                                <p className="font-medium text-white/70">Tempe, AZ 85284</p>
                                <p className="font-medium text-white/70">United States</p>
                            </div>
                            <div>
                                <p className="font-medium text-white/70">Phone Support Hours:</p>
                                <p className="font-medium text-white/70">Mon - Fri 9:00 AM - 4:00 PM</p>
                                <p className="font-medium text-white/70">CST</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-20 xl:gap-32">
                        <div className="flex flex-col gap-y-2 mb-8">
                            <h4 className="font-serif text-2xl text-white mb-2">Shop</h4>
                            <Link href="/">
                                <a className="font-semibold text-white hover:text-orange-600/80 transition-colors">Gift sets</a>
                            </Link>
                            <Link href="/">
                                <a className="font-semibold text-white hover:text-orange-600/80 transition-colors">Hemp CBD Oil</a>
                            </Link>
                            <Link href="/">
                                <a className="font-semibold text-white hover:text-orange-600/80 transition-colors">Hemp CBD Capsules</a>
                            </Link>
                            <Link href="/">
                                <a className="font-semibold text-white hover:text-orange-600/80 transition-colors">Pet CBD Products</a>
                            </Link>
                            <Link href="/">
                                <a className="font-semibold text-white hover:text-orange-600/80 transition-colors">Hemp CBD Rub</a>
                            </Link>
                            <Link href="/">
                                <a className="font-semibold text-white hover:text-orange-600/80 transition-colors">Lavander + CBD Oil</a>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-y-2 mb-8">
                            <h4 className="font-serif text-2xl text-white mb-2">Learn</h4>
                            <Link href="/">
                                <a className="font-semibold text-white hover:text-orange-600/80 transition-colors">Why Populum</a>
                            </Link>
                            <Link href="/">
                                <a className="font-semibold text-white hover:text-orange-600/80 transition-colors">What is CBD Oil?</a>
                            </Link>
                            <Link href="/">
                                <a className="font-semibold text-white hover:text-orange-600/80 transition-colors">Wholesale</a>
                            </Link>
                            <Link href="/">
                                <a className="font-semibold text-white hover:text-orange-600/80 transition-colors">Veterans Program</a>
                            </Link>
                            <Link href="/">
                                <a className="font-semibold text-white hover:text-orange-600/80 transition-colors">Affiliate Program</a>
                            </Link>
                            <Link href="/">
                                <a className="font-semibold text-white hover:text-orange-600/80 transition-colors">Rescued Pets CBD Program</a>
                            </Link>
                            <Link href="/">
                                <a className="font-semibold text-white hover:text-orange-600/80 transition-colors">Lab Test Results</a>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-y-2 mb-8">
                            <h4 className="font-serif text-2xl text-white mb-2">Support</h4>
                            <Link href="/">
                                <a className="font-semibold text-white hover:text-orange-600/80 transition-colors">Reviews</a>
                            </Link>
                            <Link href="/">
                                <a className="font-semibold text-white hover:text-orange-600/80 transition-colors">30 Day Risk Free Trial</a>
                            </Link>
                            <Link href="/">
                                <a className="font-semibold text-white hover:text-orange-600/80 transition-colors">FAQs</a>
                            </Link>
                            <Link href="/">
                                <a className="font-semibold text-white hover:text-orange-600/80 transition-colors">Find Us</a>
                            </Link>
                            <Link href="/">
                                <a className="font-semibold text-white hover:text-orange-600/80 transition-colors">Terms & Conditions</a>
                            </Link>
                            <Link href="/">
                                <a className="font-semibold text-white hover:text-orange-600/80 transition-colors">Privacy</a>
                            </Link>
                            <Link href="/">
                                <a className="font-semibold text-white hover:text-orange-600/80 transition-colors">Accessibility</a>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-y-2 mb-8">
                            <h4 className="font-serif text-2xl text-white mb-2">Connect</h4>
                            <Link href="/">
                                <a className="font-semibold text-white hover:text-orange-600/80 transition-colors">Stories</a>
                            </Link>
                            <Link href="/">
                                <a className="font-semibold text-white hover:text-orange-600/80 transition-colors">Instagram</a>
                            </Link>
                            <Link href="/">
                                <a className="font-semibold text-white hover:text-orange-600/80 transition-colors">Twitter</a>
                            </Link>
                            <Link href="/">
                                <a className="font-semibold text-white hover:text-orange-600/80 transition-colors">Facebook</a>
                            </Link>
                            <Link href="/">
                                <a className="font-semibold text-white hover:text-orange-600/80 transition-colors">Youtube</a>
                            </Link>
                            <Link href="/">
                                <a className="font-semibold text-white hover:text-orange-600/80 transition-colors">Contact Us</a>
                            </Link>
                        </div>
                    </div>
              
            </section>
        </>
     );
}
 
export default Footer;