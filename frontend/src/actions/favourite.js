import ourApi from "../constants/ourapi"
export default async function favourite(id,todo)
{  
    const user=sessionStorage.getItem('userid')
    if(user==null) 
     { 
        alert("YOU ARE NOT LOGGED IN")
        return(false)
    }
    else
    {
        const recipes = JSON.parse(localStorage.getItem('bigcard'))
        const tosend={
            todo:todo,
            user:user,
            id:id,
            readyInMinutes:recipes.readyInMinutes,
            servings:recipes.servings,
            image:recipes.image,
            title:recipes.title,
            veg:recipes.vegetarian,
            summary:recipes.summary,
            extendedIngredients:recipes.extendedIngredients,
            nutrition:recipes.nutrition,
            analyzedInstructions:recipes.analyzedInstructions
        }
        try {
            const result=await ourApi.post('/favs',tosend)    
        } 
        catch (error) {
            console.log(error)
        }
        return(true)
    }
}