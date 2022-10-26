import { Children, useState } from "react"
import { PlusCircle, MinusCircle } from "react-feather"
const Dropdown = ({children, title}) => {
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
            <button onClick={(e)=>handleClickDropdown(e)} className="w-full text-left py-5 border-b border-slate-800/20 hover:border-orange-600/80">
            <div className=" flex justify-between">
                <h5 className="font-serif text-xl text-slate-800/95">{ title }</h5>
                <PlusCircle className="ml-4 text-slate-800/60" strokeWidth={0.7} size={25}/>
            </div>
            { open && children}
            </button>
        </>
     );
}
 
export default Dropdown;