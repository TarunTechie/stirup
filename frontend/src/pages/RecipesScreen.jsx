import RecCard from "../components/recCard";
import recipes from "../constants/recipes";
import Top from "../components/top";
import Bottom from "../components/bottom";


export default function RecipesScreen(){
    return(
        <div className="h-fit w-screen">
        <Top/>

        <div className="grid mt-32">
                <h1 className="pgheading underline mb-6 mx-auto">RECIPES</h1>
                <div className="grid grid-cols-4 mx-auto gap-12">
                    {recipes.map((rec) => (
                        <RecCard key={rec.id} recipe={rec} />
                    ))}
                </div>
            </div>
            <Bottom />
            </div>
    )
}