import Top from "../components/top";
import Bottom from "../components/bottom";
import Popular from "../components/Popular";


export default function CollectionScreen(){
    return(
        <div>
    <Top/>
    <div className="mt-40"><Popular/></div>
    
    <Bottom/>
    </div>
    )
    

}