import axios from "axios";
import { useState } from "react"
import { motion, useScroll } from "framer-motion";
import { useRouter } from "next/router"
import Image from "next/image"
import { IoCloseSharp } from "react-icons/io5"
import { toast } from "react-toastify"
import Intro from "../../components/Intro"

const ManageSubscriptions = ({ user, host }) => {

    const [ subId, setSubId ] = useState("")
    const [ modal, setModal ] = useState(false)
    const router = useRouter()
    const bundles = user.subscriptions.reduce((dict, data) => {
        if (!dict[data.bundle_id]) dict[data.bundle_id] = []; dict[data.bundle_id].push(data);
        return dict;
    }, {});
    const bundleKeys = Object.keys(bundles)
    const pageTransition = {
        in:{
            opacity:1
        },
        out:{
            opacity:0
        }
    }

    const notify = () => toast.success("Subscription cancelled.",{
        position: "bottom-right"
    })

    const refreshData = () => {
        router.replace(router.asPath)
    }

    const handleCancelSub = async () => {
        const res = await axios.delete(`${host}/api/user/subscriptions/${subId}`)
        if(res.status < 300){
            setModal(false)
            refreshData()
            notify()
        }
    }

    return (
        <>
            {
                modal && 
                <>
                    <div onClick={() => setModal(false)} className="fixed flex items-center justify-center z-30 w-screen h-screen bg-black/30">
                        <motion.div initial="out" animate="in" exit="out" variants={ pageTransition }>
                            <div onClick={(e) => e.stopPropagation()} className="flex flex-col w-96 h-52 rounded-sm bg-white">
                                <div className="h-full items-center flex">
                                    <h3 className="text-center w-full text-slate-800/90 font-medium text-lg">Cancel subscription?</h3>
                                </div>
                                <div className="flex justify-center w-full">
                                    <button className="rounded-bl-sm py-3 w-full bg-orange-600/80 text-white font-medium" onClick={ handleCancelSub }>Yes</button>
                                    <button className="rounded-br-sm py-3 w-full bg-slate-800 text-white font-medium" onClick={() => setModal(false)}>No</button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            }
            <motion.div initial="out" animate="in" exit="out" variants={ pageTransition }>
                {
                user.subscriptions.length === 0 ?
                <section className="pb-32">
                    <Intro
                        title="Not subscribed yet?"
                        text="All your favorite CBD products, delivered to your door with 20% monthly savings. Customize your delivery or cancel anytime."
                        buttonText="SUBSCRIBE"
                        buttonUrl="/pages/subscription"
                        buttonColor="secondary"
                        bgColor="bg-red-50"
                        img="https://cdn.shopify.com/s/files/1/1737/2201/files/Untitled_design_7_1400x.png?v=1613614110"
                    />
                </section>
                :
                <section className="w-full px-10 lg:px-40 py-28">
                    <div className="w-full lg:w-11/12 py-20 bg-sky-50">
                        <h2 className="font-serif text-center w-full text-2xl text-slate-800/90 lg:text-4xl">Your Subscriptions</h2>
                    </div>
                    <div className="mt-16 w-full lg:w-11/12 flex flex-col gap-y-4">
                        {
                            bundleKeys.map((bundleKey, i)=>(
                                <div key={ bundleKey + i } className="border text-slate-800/90 flex flex-col flex-wrap">
                                    <div className="w-full bg-slate-800 flex justify-between">
                                        <h2 className="ml-6 py-2 text-lg text-white">Subscription Bundle #{ i + 1 }</h2>
                                        <button onClick={() => {
                                            setModal(true)
                                            setSubId(bundleKey)
                                        }}>
                                            <IoCloseSharp className="text-white hover:text-red-500 transition-colors mr-4" size={25} />
                                        </button>
                                    </div>
                                    <div className="w-full p-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
                                    {
                                        bundles[bundleKey].map((bundle,i)=>(
                                            <div key={ bundleKey + i }>
                                                <div className="relative h-[10rem]">
                                                    <Image layout="fill" objectFit="cover" objectPosition="center" src={ bundle.item.img }/>
                                                </div>
                                                <div className="mt-2">
                                                    <h4 className="font-medium text-sm">{ bundle.item.title } - { bundle.item.size } x{ bundle.quantity }</h4>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    </div>
                                </div>
                            ))
                        }   
                    </div>
                </section>
                }
            </motion.div>
        </>
    );
}

export const getServerSideProps = async (context) => {
    
    const url = process.env.HOST
    const response = await axios.get(`${url}/api/user/find`,{
        withCredentials:true,
        headers:{
            Cookie:context.req.cookies.token
        }
    })
    
    return {
        props:{
            user: response.data,
            host:url
        }
    }
}

export default ManageSubscriptions;