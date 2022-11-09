import Image from "next/image"

const Benefits = ({title, benefits}) => {
    return ( 
        <>
            <section className="flex w-full justify-center items-center flex-col mt-32 text-center">
                <div className=" w-full lg:max-w-5xl px-10 lg:px-9 ">
                    <h2 className="text-slate-800/90 font-serif text-2xl lg:text-3xl xl:text-4xl">{ title }</h2>
                    <ul className="text-slate-800/90 font-medium grid gap-x-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:flex-row w-full mt-14">
                        {
                            benefits.map((benefit)=>(
                                <li key={ benefit.text } className="p-2 border-t flex lg:justify-start items-center">
                                    <Image src={ benefit.img } loading="lazy" height={70} width={70}/>   
                                    <p>{ benefit.text }</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
        </>
     );
}
 
export default Benefits;    