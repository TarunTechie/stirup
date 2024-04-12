import { useEffect } from "react"

function ListCard({image,heading})
{ 
    return(
        <div className="grid  bg-white m-5 rounded-xl w-1/2 border-2 border-maron no-scrollbar relative ">
            <div className="flex justify-end">
            <img src={image} className="rounded-xl"/>
            </div>
            <div className="flex justify-end ">
            </div>
            <h1 className="text-black text-2xl text-center font-bold font-heading my-1">{heading}</h1>
        </div>
    )
}
export default ListCard
