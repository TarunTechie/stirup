import { useEffect } from "react"

function Procard({image,heading,content})
{ 
    return(
        <div className="grid justify-items-center bg-white m-5 rounded-xl  max-h-96 max-w-80 border-4 border-maron no-scrollbar">
            <div className="flex justify-end">
            <img src="/icons/heart.svg" className="absolute w-10 h-10 m-2 object-top-right fill"/>
            <img src={image}/>
            </div>
            <h1 className="text-black text-2xl text-center font-bold font-heading my-1 ">{heading}</h1>
            <img src="/icons/heart.svg" className=" absolute left-0 w-7 h-7 "/>
            <div className="bg-black h-px w-4/5 mt-2 mb-4"></div>
            <div dangerouslySetInnerHTML={{ __html: content}} className="text-center text-black overflow-auto no-scrollbar"/>
        </div>
    )
}
export default Procard
