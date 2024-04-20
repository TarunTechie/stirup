import ourApi from "../constants/ourapi"
export default async function favourite(id,todo)
{   
    const user=sessionStorage.getItem('userid')
    console.log(user)
    const recipes = JSON.parse(localStorage.getItem('bigcard'))
    const tosend={
        user:user,
        id:id,
        title:recipes.title,
        veg:recipes.vegetarian,
        summary:recipes.summary,
        ingridents:recipes.extendedIngredients,
        nutrition:recipes.nutrition.nutrients,
        instructions:recipes.analyzedInstructions[0].steps
    }
    try {
        const result=await ourApi.post('/favs',tosend)    
    } 
    catch (error) {
        console.log(error)
    }
}