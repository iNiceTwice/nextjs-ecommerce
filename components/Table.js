import { IoAlertCircleOutline, IoCheckmark, IoHelp, IoClose } from "react-icons/io5"
import Logo from "./Logo"

const Table = () => {
    return ( 
        <>
            <div className="w-full border rounded-md shadow-md px-[6vw]">
                <table className="w-full text-slate-800/90 border-spacing-0">
                    <tbody>
                        <tr>
                            <th></th>
                            <th className="relative bg-red-50 ">
                                <div className="absolute bg-red-50 -top-10 pt-10 w-full">
                                </div>
                                <div className=" w-full pt-10 flex justify-center">
                                    <div className="w-[1rem] lg:w-full lg:flex lg:justify-center overflow-hidden">
                                        <Logo/>
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className="w-full pt-10 flex justify-center">
                                    <h4 className="text-sm lg:text-2xl font-serif font-medium">Other Brands</h4>
                                </div>
                            </th>
                        </tr>
                        <tr className="border-b">
                            <td className="py-8 w-1/3">
                                <div className="flex items-center">
                                    <h4 className="font-serif text-sm lg:text-xl">Full Spectrum CBD</h4>
                                    <IoAlertCircleOutline className="ml-2" size={21}/>
                                </div>
                            </td>
                            <td className="py-8 w-1/3 bg-red-50">
                                <div className="flex w-full justify-center">
                                    <div className="p-1 lg:p-2 w-fit rounded-full text-center bg-orange-600/80">
                                        <IoCheckmark size={20} className="text-white" />
                                    </div>
                                </div>
                            </td>
                            <td className="py-8 w-1/3">
                                <div className="flex w-full justify-center">
                                    <div className="p-1 lg:p-2 w-fit rounded-full text-center border border-slate-800/90">
                                        <IoHelp size={20} />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-8 w-1/3">
                                <div className="flex items-center">
                                    <h4 className="font-serif text-sm lg:text-xl">Concentration Promise</h4>
                                    <IoAlertCircleOutline className="ml-2" size={21}/>
                                </div>
                            </td>
                            <td className="py-8 w-1/3 bg-red-50">
                                <div className="flex w-full justify-center">
                                    <div className="p-1 lg:p-2 w-fit rounded-full text-center bg-orange-600/80">
                                        <IoCheckmark size={20} className="text-white" />
                                    </div>
                                </div>
                            </td>
                            <td className="py-8 w-1/3">
                                <div className="flex w-full justify-center">
                                    <div className="p-1 lg:p-2 w-fit rounded-full text-center border border-slate-800/90">
                                        <IoHelp size={20} />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b-[0.5px]">
                            <td className="py-8 w-1/3">
                                <div className="flex items-center">
                                    <h4 className="font-serif text-sm lg:text-xl">3x Lab Tested</h4>
                                    <IoAlertCircleOutline className="ml-2" size={21}/>
                                </div>
                            </td>
                            <td className="py-8 w-1/3 bg-red-50">
                                <div className="flex w-full justify-center">
                                    <div className="p-1 lg:p-2 w-fit rounded-full text-center bg-orange-600/80">
                                        <IoCheckmark size={20} className="text-white" />
                                    </div>
                                </div>
                            </td>
                            <td className="py-8 w-1/3">
                                <div className="flex w-full justify-center">
                                    <div className="p-1 lg:p-2 w-fit rounded-full text-center border border-slate-800/90">
                                        <IoClose size={20} />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-8 w-1/3">
                                <div className="flex items-center">
                                    <h4 className="font-serif text-sm lg:text-xl">Clean Ingredients</h4>
                                    <IoAlertCircleOutline className="ml-2" size={21}/>
                                </div>
                            </td>
                            <td className="py-8 w-1/3 bg-red-50">
                                <div className="flex w-full justify-center">
                                    <div className="p-1 lg:p-2 w-fit rounded-full text-center bg-orange-600/80">
                                        <IoCheckmark size={20} className="text-white" />
                                    </div>
                                </div>
                            </td>
                            <td className="py-8 w-1/3">
                                <div className="flex w-full justify-center">
                                    <div className="p-1 lg:p-2 w-fit rounded-full text-center border border-slate-800/90">
                                        <IoHelp size={20} />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-8 w-1/3">
                                <div className="flex items-center">
                                    <h4 className="font-serif text-sm lg:text-xl">Return Policy</h4>
                                    <IoAlertCircleOutline className="ml-2" size={21}/>
                                </div>
                            </td>
                            <td className="py-8 w-1/3 bg-red-50">
                                <div className="flex w-full justify-center">
                                    <p className="font-medium text-sm md:text-md px-3 text-center">30-day risk-free trial</p>
                                </div>
                            </td>
                            <td className="py-8 w-1/3">
                                <div className="flex w-full justify-center">
                                    <p className="font-medium text-sm md:text-md">Limited</p>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-8 w-1/3">
                                <div className="flex items-center">
                                    <h4 className="font-serif text-sm lg:text-xl">Free Shipping</h4>
                                    <IoAlertCircleOutline className="ml-2" size={21}/>
                                </div>
                            </td>
                            <td className="py-8 w-1/3 bg-red-50">
                                <div className="flex w-full justify-center">
                                    <div className="p-1 lg:p-2 w-fit rounded-full text-center bg-orange-600/80">
                                        <IoCheckmark size={20} className="text-white" />
                                    </div>
                                </div>
                            </td>
                            <td className="py-8 w-1/3">
                                <div className="flex w-full justify-center">
                                    <div className="p-1 lg:p-2 w-fit rounded-full text-center border border-slate-800/90">
                                        <IoHelp size={20} />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b-[0.5px]">
                            <td className="py-8 w-1/3">
                                <div className="flex items-center">
                                    <h4 className="font-serif text-sm lg:text-xl">CBD Concierge</h4>
                                    <IoAlertCircleOutline className="ml-2" size={21}/>
                                </div>
                            </td>
                            <td className="py-8 w-1/3 bg-red-50">
                                <div className="flex w-full justify-center">
                                    <p className="font-medium text-sm md:text-md px-3 text-center">Real Humans</p>
                                </div>
                            </td>
                            <td className="py-8 w-1/3">
                                <div className="flex w-full justify-center">
                                    <p className="font-medium text-sm md:text-md">Email or bot</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="bg-red-50 relative">
                                <div className="py-4"></div>
                                <div className="absolute bg-red-50 -bottom-10 pt-10 w-full"></div>
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>        
            </div>
        </>
     );
}
 
export default Table;