import Image from "next/image"

const Intro = ({img, title, buttonText, buttonColor, bgColor,text}) => {
    return ( 
        <>
            <section className="flex flex-col-reverse lg:flex-row h-full items-center mt-24 lg:mt-60">
                <div className={`w-11/12 -mt-10 lg:-mt-0 lg:w-[46vw] h-full lg:h-[40vw] lg:ml-[3vw] lg:-mr-36 py-8 lg:py-0 relative z-10 ${ bgColor } `}>
                    <div className="h-full px-7 lg:px-10 justify-center text-center flex flex-col items-center gap-y-5">
                    <h2 className=" text-3xl lg:text-4xl xl:text-6xl text-slate-800 font-serif">{ title }</h2>
                    <p className="lg:text-lg font-medium text-slate-800">{ text }</p>
                    <button className={`py-5 mt-3 font-medium w-40 ${ buttonColor === "primary" && "bg-orange-600/80 hover:bg-slate-800"} ${ buttonColor === "secondary" && "bg-slate-800 hover:bg-orange-600/80" } text-white`}>{ buttonText }</button>
                    </div>
                </div>
                <div className="relative lg:absolute right-0 w-full lg:w-[54vw] h-[67vw] lg:h-[48vw] lg:mr-[3vw]">
                    <Image src={ img } objectFit="cover" layout="fill" priority />
                </div>
            </section>
        </>
     );
}
 
export default Intro;