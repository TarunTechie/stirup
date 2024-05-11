import spoon from "../constants/spoon";
import Top from "../components/top";
import Bottom from "../components/bottom";
import RecCard from "../components/recCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ScrollRestoration } from "react-router-dom";

export default function Cuisines() {
    const [food, setFood] = useState([]);
    const { name } = useParams();
    const [ids, setIds] = useState('');

    useEffect(() => {
        // Define a function to fetch recipes
        async function getRecipes() {
            try {
                if (name === 'indian') {
                    setIds("654532,798400,716364,660290,643775,637422,646043,650484,632983");
                }
                if (name === 'chinese') {
                    setIds("716426,716311,638649,638722,643808,1095843,660707,638717,659038");
                }
                if (name === 'italian') {
                    setIds("715495,715769,658515,648257,640819,664737,648247,646549,656972");
                }
                if (name === 'thai') {
                    setIds("663177,663108,663126,663149,663151,663100,663176,1697535,663175");
                }
                if (name === 'asian') {
                    setIds("716426,632812,716217,665379,647875,637440,652078,632822,663157");
                }
                if (name === 'french') {
                    setIds("640693,639599,662291,715569,659037,643372,642230,640869,643330");
                }
                if (name === 'mexican') {
                    setIds("795751,640062,715421,715391,645856,157399,1697763,635291,659674");
                }
                if (name === 'american') {
                    setIds("646512,639392,633837,795749,637631,642695,637265,657226,641627");
                }
                
                
                const result = await spoon.get('recipes/informationBulk', { params: { 'ids': ids, 'includeNutrition': true } });
                setFood(result.data);
            } catch (error) {
                console.error(error);
            }
        }

        // Call the function to fetch recipes
        getRecipes();
    }, [ids]); // Add ids as a dependency to the useEffect hook

    return (
        <div className="h-fit w-screen">
            <ScrollRestoration/>
            <Top />
            <div className="grid mt-32">
                <h1 className="pgheading underline mb-6 mx-auto">{name.toUpperCase()} CUISINE</h1>
                <div className="grid grid-cols-4 mx-auto gap-12">
                    {food.map((rec) => (
                        <RecCard key={rec.id} recipe={rec} />
                    ))}
                </div>
            </div>
            <Bottom />
        </div>
    );
}
