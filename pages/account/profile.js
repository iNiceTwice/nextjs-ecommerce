import { FacebookShareButton, FacebookMessengerShareButton, EmailShareButton } from "react-share"
import { IoArrowBack, IoFlowerOutline, IoMailOutline } from "react-icons/io5"
import { RiFacebookFill, RiMessengerFill, RiLink } from "react-icons/ri"
import { useDispatch, useSelector } from "react-redux";
import { VscSmiley } from "react-icons/vsc"
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify"
import Image from "next/image"
import Link from "next/link"

const Profile = ({ host }) => {
    
    const dispatch = useDispatch()
    const user = useSelector( state => state.user )
    const [ showModal, setShowModal ] = useState(false)

    const pageTransition = {
        in:{
            opacity:1
        },
        out:{
            opacity:0
        }
    }

    const notify = () => toast.success("Copied to clipboard!",{
        position: "bottom-right"
    })    

    return ( 
        <>
            <motion.div initial="out" animate="in" exit="out" variants={ pageTransition }>
                {
                    showModal &&
                    <div onClick={ () => setShowModal(false) } className="fixed z-10 flex justify-center items-center w-full h-screen bg-gray-700/30">
                        <motion.div initial="out" animate="in" exit="out" variants={ pageTransition }>
                            <div onClick={ e => e.stopPropagation() } className="bg-white w-full lg:w-[60rem] h-[35rem] flex flex-col lg:flex-row">
                                <div className="flex flex-col w-full lg:w-5/12 text-slate-800">
                                    <div className="bg-gray-100 w-full px-6 py-3">
                                        REFER FRIENDS TO POPULUM
                                    </div>
                                    <div className="w-full mt-10 px-6">
                                        <h2 className="font-bold text-4xl mb-4">GIVE $10, GET $10</h2>
                                        <p>
                                            Send a $10 coupon to your friends, and when they purchase, you&apos;ll get $10 off too!
                                        </p>
                                        <div className="flex flex-col gap-y-2 w-full mt-4">
                                            <EmailShareButton subject="Come to Populum and get the best CBD products!" url={ host }>
                                                <button className="flex w-full justify-center items-center py-3 text-sm text-white font-medium bg-orange-600/80 hover:bg-orange-600/90">
                                                    <IoMailOutline className="mr-2" size={25}/>
                                                    Share via Email
                                                </button>
                                            </EmailShareButton>
                                            <FacebookShareButton url={ host }>
                                                <button className="flex w-full justify-center items-center py-3 text-sm text-white font-medium bg-[#3b5998] hover:bg-[#385590]">
                                                    <RiFacebookFill className="mr-2" size={25}/>
                                                    Share on Facebook
                                                </button>
                                            </FacebookShareButton>
                                            <FacebookMessengerShareButton url={ host }>
                                                <button className="flex w-full justify-center items-center py-3 text-sm text-white font-medium bg-[#0084ff] hover:bg-[#007df2]">
                                                    <RiMessengerFill className="mr-2" size={25}/>
                                                    Send as Message
                                                </button>
                                            </FacebookMessengerShareButton>
                                            <button 
                                                onClick={() => {
                                                    navigator.clipboard.writeText( host )
                                                    notify()
                                                }} 
                                                className="flex w-full justify-center items-center py-3 text-sm text-white font-medium bg-slate-800/90 hover:bg-slate-800"
                                            >
                                                <RiLink className="mr-2" size={25}/>
                                                Share by Link
                                            </button>
                                            <p className="text-slate-800/40 text-center text-xs mt-8 px-[12%]">
                                                By clicking &quot;Send Email&quot; and accepting this offer, you agree to the Terms of Service and Privacy Policy.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative hidden lg:block w-7/12 h-full">
                                    <Image src="https://cdn.shopify.com/s/files/1/1737/2201/files/populum-orange_1400x.webp?v=1662465868" layout="fill" objectFit="cover" alt="company logo" objectPosition="center" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                }
                <div className="h-fit flex justify-center">
                    <div className="py-32 text-center">
                        <h2 className="font-serif text-3xl lg:text-5xl">Welcome back, <span>{ user.name }!</span></h2>
                        <p className="font-medium text-slate-800/90">{ user.email }</p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 px-5 gap-8 mt-16">
                            <Link href="/account/subscriptions">
                                <div className="flex flex-col justify-end h-[30rem] lg:h-[35rem] cursor-pointer bg-orange-600/80 text-white hover:scale-[0.99]">
                                    <div className="flex w-full justify-center">
                                        <IoFlowerOutline size="75"/>
                                    </div>
                                    <h3 className="text-4xl font-serif mt-6">Subscriptions</h3>
                                    <p className="font-medium mb-4 mt-16 px-8">Manage your subscriptions in one place. You can even add new ones.</p>
                                    <div className="w-full justify-center items-center flex pb-10">
                                        <IoArrowBack size="25"/>
                                    </div>
                                </div>
                            </Link>
                            <button onClick={ () => setShowModal(true) }>
                                <div className="flex flex-col text-slate-800 justify-end h-[30rem] lg:h-[35rem] bg-sky-100 hover:scale-[0.99]">
                                    <div className="flex w-full justify-center">
                                        <VscSmiley size="75"/>
                                    </div>
                                    <h3 className="text-4xl font-serif mt-6">Refer-a-Friend</h3>
                                    <p className="font-medium mb-4 mt-16 px-8">Refer a friend to us, and you&apos;ll both receive $10 off on your next order.</p>
                                    <div className="w-full justify-center flex pb-10">
                                        <IoArrowBack size="25"/>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export const getServerSideProps = () => {
    const url = process.env.HOST

    return {
        props:{
            host:url
        }
    }
}

export default Profile;