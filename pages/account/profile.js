import { useDispatch, useSelector } from "react-redux";

//konigit986@adroh.com

const Profile = () => {
    const dispatch = useDispatch()
    const user = useSelector( state => state.user )
    console.log(user)
    return ( 
        <>
            <div className="h-fit flex justify-center">
                <div className="py-32 text-center">
                    <h2 className="font-serif text-5xl">Welcome back, <span>{ user.name }!</span></h2>
                    <p className="font-medium text-black/75">{ user.email }</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 mt-16">
                        <div className="flex flex-col justify-end h-[35rem] bg-orange-600/80 text-white">
                            <i className="fa-solid fa-citrus"></i>
                            <h3 className="text-4xl font-serif mt-6">Subscription</h3>
                            <p className="font-medium mb-4 mt-16 px-8">Manage your subscriptions in one place. You can even add new ones.</p>
                            <i className="fa-solid fa-arrow-left mb-10"></i>
                        </div>
                        <div className="flex flex-col justify-end h-[35rem] bg-sky-200/90">
                            <i className="fa-solid fa-citrus"></i>
                            <h3 className="text-4xl font-serif mt-6">Refer-a-Friend</h3>
                            <p className="font-medium mb-4 mt-16 px-8">Refer a friend to us, and you'll both receive $10 off on your next order.</p>
                            <i className="fa-solid fa-arrow-left mb-10"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Profile;