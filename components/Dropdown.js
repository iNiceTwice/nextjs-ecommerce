import { Children, useState } from "react"
import { PlusCircle, MinusCircle } from "react-feather"

const Dropdown = ({ children, title }) => {
    const [ open, setOpen ] = useState(false)
    
    const handleClickDropdown = (e) => {
        if(open){
            setOpen(false)
        }else{
            setOpen(true)
        }
    }
    return ( 
        <>
            <button onClick={(e)=>handleClickDropdown(e)} className="w-full text-left py-5 border-b border-slate-800/20 group hover:border-orange-600/80 transition-colors">
            <div className=" flex justify-between">
                <h5 className="font-serif text-xl text-slate-800/95 group-hover:text-orange-600/80 transition-colors">{ title }</h5>
                <div className="flex items-center">
                    {
                        open
                        ? <MinusCircle className="ml-4 text-slate-800/60 group-hover:text-orange-600/80 transition-colors" strokeWidth={0.7} size={25}/> 
                        : <PlusCircle className="ml-4 text-slate-800/60 group-hover:text-orange-600/80 transition-colors" strokeWidth={0.7} size={25}/>
                    }
                </div>
            </div>
            { open && children}
            </button>
        </>
     );
}
 
export default Dropdown;