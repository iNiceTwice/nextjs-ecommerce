import { useState } from "react";
import Link from "next/link"

const Login = () => {

    const [ passChange, setPassChange ] = useState(false)

    return ( 
        <>
        {
            passChange 
            ?   <div className="flex justify-center w-full h-fit bg-red-100/70">
                    <div className=" w-11/12 lg:w-1/2 xl:w-1/3 my-32 h-fit bg-white border py-16 px-10 lg:px-16 border-red-200">
                        <h3 className="text-4xl text-center font-serif text-black/75 mb-2">Reset Password</h3>
                        <p className="text-center text-black/75" >We will send you an email to reset your password, or <Link href="/account/login"><a className="font-medium text-orange-600/80">Login Here</a></Link>.</p>
                        <form className="flex flex-col justify-center gap-3 mt-10">
                            <label className="font-medium text-slate-800/90" htmlFor="name">Email</label>
                            <input id="email" required type="email" className="h-10 outline-none border-b border-b-black/40 focus:border-b-orange-600/80"/>
                            <button type="submit" className="mt-4 text-white hover:bg-orange-600/80 py-4 transition-colors bg-slate-800">SUBMIT</button>
                            <a onClick={()=>setPassChange(false)} className="text-center text-sm font-medium cursor-pointer text-slate-800/80 hover:text-orange-600/80 transition-colors">Cancel</a>
                        </form>
                    </div>
                </div>
            :   <div className="flex justify-center w-full h-fit bg-red-100/70">
                    <div className=" w-11/12 lg:w-1/2 xl:w-1/3 my-32 h-fit bg-white border py-16 px-10 lg:px-16 border-red-200">
                        <h3 className="text-4xl text-center font-serif text-black/75 mb-2">Login</h3>
                        <p className="text-center text-black/75" >Welcome back! If you do not have an account you can <Link href="/account/register"><a className="font-medium text-orange-600/80">Sign up</a></Link>.</p>
                        <form className="flex flex-col justify-center gap-3 mt-10">
                            <label className="font-medium text-slate-800/90" htmlFor="name">Email</label>
                            <input id="email" required type="email" className="h-10 outline-none border-b border-b-black/40 focus:border-b-orange-600/80"/>
                            <label className="font-medium text-slate-800/90" htmlFor="name">Password</label>
                            <input id="password" required className="h-10 outline-none border-b border-b-black/40 focus:border-b-orange-600/80"/>
                            <button type="submit" className="mt-4 text-white hover:bg-orange-600/80 py-4 transition-colors bg-slate-800">LOGIN</button>
                            <a onClick={()=>setPassChange(true)} className="text-center text-sm font-medium cursor-pointer text-slate-800/80 hover:text-orange-600/80 transition-colors">Forgot your password?</a>
                        </form>
                    </div>
                </div>
        }
        </>
     );
}
 
export default Login;