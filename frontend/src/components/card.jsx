function Card({image,name,content})
{
    return(
        <div className="w-fit grid justify-items-center items-end m-4 hover:items-center card">
        <div className="rounded-xl w-fit bg-orange shaeff">
            <img src={image} alt="" srcset="" className="h-96 w-80 rounded-xl"/>
        </div>
        <div className="bg-orange p-2 rounded-lg z-1 text-white text-center font-extrabold absolute crdtext shaeff">
            <h1 className="crdname">{name}</h1>
            <p className="content font-normal">{content}</p>
        </div>
        </div>
    )
}
export default Card