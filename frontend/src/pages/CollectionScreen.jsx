import Top from "../components/top";
import Bottom from "../components/bottom";
import Popular from "../components/Popular";
import Favs from "../actions/favs";


export default function CollectionScreen(){
    return(
        <div>
    <Top/>
    <div className="mt-32">

    <Favs/>
    </div>
    <div className="mt-40"><Popular/></div>
    
    <Bottom/>
    </div>
    )
    

}