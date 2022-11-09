import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link"
import { useFormik } from "formik"
import { object, shape, string, email, required } from "yup"
import axios from "axios"


const SignupSchema = object().shape({
    email:string().email("Invalid Email.").required("This field is required."),
    password: string().required("This field is required.")
})

const Login = ({ host }) => {

    const router = useRouter()
    const [ passChange, setPassChange ] = useState(false)
    const [ badCredentials, setBadCredentials ] = useState(false)
    const pageTransition = {
        in:{
            opacity:1
        },
        out:{
            opacity:0
        }
    }    
    const { values, errors, touched, handleChange, handleSubmit } = useFormik({    
    initialValues:{
        email:"",
        password:""
    },
    onSubmit:(values)=>{
        axios.post(`${host}/api/auth`,{
            email:values.email,
            password:values.password
        }).then(data=>{ 
           router.push("/account/profile") 
        }).catch(err=>{
            console.log(err)
            if(err.response.status === 401){
                setBadCredentials(true)
            }
        })
    },
    validationSchema: SignupSchema
    })

    return ( 
        <>
            <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
                {
                    passChange 
                    ?   <div className="flex justify-center w-full h-fit py-32 lg:py-48 bg-red-100/70">
                            <div className=" w-11/12 lg:w-1/2 xl:w-1/3 my-auto h-fit bg-white border py-16 px-10 lg:px-16 border-red-200">
                                <h3 className="text-4xl text-center font-serif text-black/75 mb-2">Reset Password</h3>
                                <p className="text-center text-black/75" >We will send you an email to reset your password, or <a onClick={()=>setPassChange(false)} className="cursor-pointer font-medium text-orange-600/80">Login Here</a>.</p>
                                <form onSubmit={ handleSubmit } className="flex flex-col justify-center gap-3 mt-10">
                                    <label className="-mb-3 font-medium text-slate-800/90" htmlFor="name">Email</label>
                                    <input
                                        className="h-10 outline-none border-b border-b-black/40 focus:border-b-orange-600/80"
                                        onChange={ handleChange } 
                                        value={values.email} 
                                        id="email" 
                                        name="email" 
                                        type="email" 
                                    />
                                    { touched.email && Boolean(errors.email) && <span className="text-orange-600">{ errors.email }</span> }
                                    <button type="submit" className="mt-4 text-white hover:bg-orange-600/80 py-4 transition-colors bg-slate-800">SUBMIT</button>
                                    <a onClick={()=>setPassChange(false)} className="text-center text-sm font-medium cursor-pointer text-slate-800/80 hover:text-orange-600/80 transition-colors">Cancel</a>
                                </form>
                            </div>
                        </div>
                    :   <div className="flex justify-center w-full h-fit py-32 lg:py-48 bg-red-100/70">
                            <div className=" w-11/12 lg:w-1/2 xl:w-1/3 my-auto h-fit bg-white border py-16 px-10 lg:px-14 border-red-200">
                                <h3 className="text-4xl text-center font-serif text-black/75 mb-2">Login</h3>
                                <p className="text-center text-black/75" >Welcome back! If you do not have an account you can <Link href="/account/register"><a className="font-medium text-orange-600/80">Sign up</a></Link>.</p>
                                <form onSubmit={ handleSubmit } className="flex flex-col justify-center gap-3 mt-10">
                                    { badCredentials && <span className="text-orange-600">Invalid credentials.</span> }
                                    <label className="-mb-3 font-medium text-slate-800/90" htmlFor="name">Email</label>
                                    <input 
                                        className="h-10 outline-none border-b border-b-black/40 focus:border-b-orange-600/80"
                                        onChange={ handleChange } 
                                        value={ values.email } 
                                        id="email" 
                                        type="email" 
                                        name="email" 
                                    />
                                    { touched.email && Boolean(errors.email) && <span className="text-orange-600">{ errors.email }</span> }
                                    <label className="-mb-3 font-medium text-slate-800/90" htmlFor="name">Password</label>
                                    <input 
                                        className="h-10 outline-none border-b border-b-black/40 focus:border-b-orange-600/80"
                                        onChange={ handleChange } 
                                        value={ values.password } 
                                        id="password" 
                                        name="password"
                                        type="password"
                                    />
                                    { touched.password && Boolean(errors.password) && <span className="text-orange-600">{ errors.password }</span> }
                                    <button type="submit" className="mt-4 text-white hover:bg-orange-600/80 py-4 transition-colors bg-slate-800">LOGIN</button>
                                    <a onClick={()=>setPassChange(true)} className="text-center text-sm font-medium cursor-pointer text-slate-800/80 hover:text-orange-600/80 transition-colors">Forgot your password?</a>
                                </form>
                            </div>
                        </div>
                }
            </motion.div>
        </>
     );
}

export const getServerSideProps = context =>{

    const url = process.env.HOST

    return {
        props:{
            host:url
        }
    }
}
 
export default Login;