import Link from "next/link"

const Register = () => {
    return ( 
        <>
            <div className="flex justify-center w-full h-fit bg-red-100/70">
                <div className=" w-11/12 lg:w-1/2 xl:w-1/3 my-32 h-fit bg-white border py-16 px-10 lg:px-16 border-red-200">
                    <h3 className="text-4xl text-center font-serif text-black/75 mb-2">Register</h3>
                    <p className="text-center text-black/75 text-lg" >Returning Customer? <Link href="/account/login"><a className="font-medium text-orange-600/80">Login</a></Link>.</p>
                    <form className="flex flex-col justify-center gap-3 mt-10">
                        
                        <label className="font-medium text-slate-800/90" htmlFor="name">First Name</label>
                        <input id="name" className="h-10 outline-none border-b border-b-black/40 focus:border-b-orange-600/80"/>
                        <label className="font-medium text-slate-800/90" htmlFor="name">Last Name</label>
                        <input id="surname" className="h-10 outline-none border-b border-b-black/40 focus:border-b-orange-600/80"/>
                        <label className="font-medium text-slate-800/90" htmlFor="name">Email <span className="text-orange-500">*</span></label>
                        <input id="email" required type="email" className="h-10 outline-none border-b border-b-black/40 focus:border-b-orange-600/80"/>
                        <label className="font-medium text-slate-800/90" htmlFor="name">Password <span className="text-orange-500">*</span></label>
                        <input id="password" required className="h-10 outline-none border-b border-b-black/40 focus:border-b-orange-600/80"/>
                        <div className="inline-flex items-center">
                            <input id="checkbox" type="checkbox" className="form-check-input h-5 w-5 border border-slate-800/70 checked:border-none rounded-sm checked:bg-orange-600/80 cursor-pointer appearance-none" />
                            <label className="ml-4 form-check-label inline-block text-gray-800" htmlFor="checkbox">
                                Subscribe To Our Newsletter?
                            </label>
                        </div>
                        <button type="submit" className="mt-4 text-white bg-orange-600/80 py-4 transition-colors hover:bg-slate-800">SIGN UP</button>
                    </form>
                </div>
            </div>
        </>
     );
}
 
export default Register;