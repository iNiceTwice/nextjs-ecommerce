import { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { motion } from "framer-motion"
import { useFormik } from "formik"
import { toast } from "react-toastify"
import * as yup from "yup"
import axios from "axios"

const SignupSchema = yup.object().shape({
    name: yup.string().min(2,"At least 2 characters.").max(12,"Max 12 characters.").required("This field is required."),
    email:yup.string().email("Invalid Email.").required("This field is required."),
    password: yup.string().min(6,"At least 6 characters.").max(20,"Max 20 characters.").required("This field is required.")
})

const Register = () => {

    const router = useRouter()
    const [ emailInUse, setEmailInUse ] = useState(false)
    const pageTransition = {
        in:{
            opacity:1
        },
        out:{
            opacity:0
        }
    }
    const notify = () => toast.success("Account created.",{
        position: "bottom-right"
    })          
    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues:{
        name:"",
        email:"",
        password:""
    },
    onSubmit:(values)=>{
        axios.post("/api/user/create",{
            name:values.name,
            email:values.email,
            password:values.password
        }).then(data=>{
            notify() 
            router.push("/account/login") 
        }).catch(err=>{
            console.log(err)
            if(err.response.status === 409){
                setEmailInUse(true)
            }
        })
    },
    validationSchema: SignupSchema
    })
    return ( 
        <>
            <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
                <div className="flex justify-center w-full h-fit py-32 lg:py-48 bg-red-100/70">
                    <div className=" w-11/12 lg:w-1/2 xl:w-1/3 h-fit bg-white border py-16 px-10 lg:px-16 border-red-200">
                        <h3 className="text-4xl text-center font-serif text-black/75 mb-2">Register</h3>
                        <p className="text-center text-black/75" >Returning Customer? <Link href="/account/login"><a className="font-medium text-orange-600/80">Login</a></Link>.</p>
                        <form onSubmit={ handleSubmit } className="flex flex-col justify-center gap-3 mt-10">
                            { emailInUse && <span className="text-orange-600">This email is already in use.</span> }
                            <label className="-mb-3 font-medium text-slate-800/90" htmlFor="name">First Name <span className="text-orange-500">*</span></label>
                            <input 
                                className="h-10 outline-none border-b border-b-black/40 focus:border-b-orange-600/80"
                                onChange={ handleChange } 
                                id="name" 
                                name="name" 
                                value={ values.name } 
                            />
                            { touched.name && Boolean(errors.name) && <span className="text-orange-600">{ errors.name }</span> }
                            <label className="-mb-3 font-medium text-slate-800/90" htmlFor="name">Email <span className="text-orange-500">*</span></label>
                            <input 
                                className="h-10 outline-none border-b border-b-black/40 focus:border-b-orange-600/80"
                                onChange={ handleChange } 
                                id="email"
                                type="email" 
                                name="email" 
                                value={ values.email } 
                            />
                            { touched.email && Boolean(errors.email) && <span className="text-orange-600">{ errors.email }</span> }
                            <label className="-mb-3 font-medium text-slate-800/90" htmlFor="name">Password <span className="text-orange-500">*</span></label>
                            <input 
                                className="h-10 outline-none border-b border-b-black/40 focus:border-b-orange-600/80"
                                onChange={ handleChange } 
                                type="password"
                                id="password" name="password" 
                                value={ values.password } 
                            />
                            { touched.password && Boolean(errors.password) && <span className="text-orange-600">{ errors.password }</span> }
                            <div className="inline-flex items-center mt-4">
                                <input id="checkbox" type="checkbox" className="form-check-input h-5 w-5 border border-slate-800/70 checked:border-none rounded-sm checked:bg-orange-600/80 cursor-pointer appearance-none" />
                                <label className="ml-4 form-check-label inline-block text-gray-800" htmlFor="checkbox">
                                    Subscribe To Our Newsletter?
                                </label>
                            </div>
                            <button type="submit" className="mt-4 text-white bg-orange-600/80 py-4 transition-colors hover:bg-slate-800">SIGN UP</button>
                        </form>
                    </div>
                </div>
            </motion.div>
        </>
     );
}

export default Register;