import Top from "../components/top";
import Bottom from "../components/bottom";
import Popular from "../components/Popular";
import Favs from "../actions/favs";
import Meals from "../actions/meals";

export default function CollectionScreen(){
    return(
        <div>
    <Top/>
    <div className="mt-32">

    <Favs/>
    <Meals/>
    </div>
    <div className="mt-40"><Popular/></div>
    <Bottom/>
    </div>
    )
    

}