import { useDispatch, useSelector } from "react-redux";
import { IoArrowBack, IoPersonAdd } from "react-icons/io5"
import { GiOrange } from "react-icons/gi"
import { motion } from "framer-motion";

//konigit986@adroh.com

const Profile = () => {
    const dispatch = useDispatch()
    const user = useSelector( state => state.user )
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
                <div className="h-fit flex justify-center">
                    <div className="py-32 text-center">
                        <h2 className="font-serif text-5xl">Welcome back, <span>{ user.name }!</span></h2>
                        <p className="font-medium text-black/75">{ user.email }</p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 mt-16">
                            <div className="flex flex-col justify-end h-[35rem] bg-orange-600/80 text-white">
                                <div className="flex w-full justify-center">
                                    <GiOrange size="100"/>
                                </div>
                                <h3 className="text-4xl font-serif mt-6">Subscription</h3>
                                <p className="font-medium mb-4 mt-16 px-8">Manage your subscriptions in one place. You can even add new ones.</p>
                                <div className="w-full justify-center items-center flex pb-10">
                                    <IoArrowBack size="25"/>
                                </div>
                            </div>
                            <div className="flex flex-col text-slate-800 justify-end h-[35rem] bg-sky-200/90">
                                <div className="flex w-full justify-center">
                                    <IoPersonAdd size="100"/>
                                </div>
                                <h3 className="text-4xl font-serif mt-6">Refer-a-Friend</h3>
                                <p className="font-medium mb-4 mt-16 px-8">Refer a friend to us, and you'll both receive $10 off on your next order.</p>
                                <div className="w-full justify-center flex pb-10">
                                    <IoArrowBack size="25"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
 
export default Profile;