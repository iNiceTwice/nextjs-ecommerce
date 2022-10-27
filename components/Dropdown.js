import { useState } from "react"
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci"
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
                        ? <CiCircleMinus size="30" className="ml-4 text-slate-800/60 group-hover:text-orange-600/80 transition-colors"/> 
                        : <CiCirclePlus size="30" className="ml-4 text-slate-800/60 group-hover:text-orange-600/80 transition-colors"/>
                    }
                </div>
            </div>
            { open && children}
            </button>
        </>
     );
}
 
export default Dropdown;