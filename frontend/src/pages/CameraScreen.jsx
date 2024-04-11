import Top from "../components/top"

function CameraScreen (){
return(
    <div className="bg-white">
    <Top />
    <div >
        <img src="/images/pagebg.jpg" className="w-screen" />
    </div>
    <h1 className="font-heading text-7xl ml-24 underline decoration-orange decoration-2 underline-offset-[12px] ">Snap and Cook</h1>
    </div>
)
}
export default CameraScreen