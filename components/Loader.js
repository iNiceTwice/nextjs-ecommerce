import { PuffLoader } from "react-spinners"

const Loader = () => {
    return ( 
        <>
        <div className="fixed top-0 z-10 flex justify-center items-center w-full h-screen bg-gray-200/20">
            <PuffLoader color="#f97316"/>
        </div>
        </>
     );
}
 
export default Loader;