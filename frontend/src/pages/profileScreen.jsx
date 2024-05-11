import { useEffect, useState } from "react"
import ourApi from "../constants/ourapi"
import { Link } from "react-router-dom"
export default function Profile()
{
    const[def,setDef]=useState()
    const cuisines=["Indian","Asian","Chinese","French","Italian","Mexican","Thai","American"]
    const intolerances=["Dairy","Egg","Gluten","Grain","Peanut","Seafood","Soy"]
    const[cus,setCus]=useState(false)
    const[cuisine,setCuisine]=useState("Select Cusine")
    const[cals,setCals]=useState()
    const Checkbox = ({ label, isChecked, onChange }) => {
        return (
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-indigo-600"
              checked={isChecked}
              onChange={onChange}
            />
            <span>{label}</span>
          </label>
        );
      };
      const [selectedIntolerances, setSelectedIntolerances] = useState([]);

  const handleCheckboxChange = (intolerance) => {
    if (selectedIntolerances.includes(intolerance)) {
      setSelectedIntolerances(selectedIntolerances.filter((item) => item !== intolerance));
    } else {
      setSelectedIntolerances([...selectedIntolerances, intolerance]);
    }
  };
    function drop()
    {
        if(cus==true)
        setCus(false)
        if(cus==false)
        setCus(true)
    }
    function handlecals(event)
    {
        console.log(event.target.value)
        setCals(event.target.value)
    }
    async function save(action)
    {
        console.log(selectedIntolerances)
        console.log(cuisine)
        console.log(cals)
        const tosend={
            "intol":selectedIntolerances,
            "cus":cuisine,
            "cals":cals,
            "action":action,
            "id":sessionStorage.getItem('userid')
        }
        const result=await ourApi.post("/user",tosend)
        console.log(result)
        if(action=='d')
            {
                sessionStorage.clear()
                localStorage.clear()
            }
    }
    async function defs()
    {
        const result=await ourApi.get('/getUser',{params:{id:sessionStorage.getItem('userid')}})
        console.log(result.data[0])
        setSelectedIntolerances(result.data[0].intols)
        setCuisine(result.data[0].cusine)
        setCals(result.data[0].cals)
    }
    useEffect(()=>{defs()},[])
    return(
        <div className="grid w-screen justify-center">
            <div className="bg-maron p-4">
                <Link to="/"><img src="/fulllogo.svg" alt="" srcset="" className="flex mx-auto justify-center p-4"/></Link>
            </div>
        <h1 className="mt-36 ml-16 object-center font-heading text-6xl  underline decoration-orange decoration-2 underline-offset-[12px]">PROFILE</h1>
        <div className="flex items-center mx-auto justify-center">
            <img src="\icons\profile.png" alt="" srcset=""className="flex mx-auto h-28 w-28" />
            <h1 className="font-heading text-5xl ml-16">{sessionStorage.getItem('name').toUpperCase()}</h1>
        </div>
        <div className="w-screen">
        <div className=" bg-maron my-5 w-3/5 h-1 mx-auto"></div>
        </div>
        <div className="grid gap-5">
        <div className="flex w-2/3 mx-auto items-center ">
        <h1 className="text-xl font-nat">Name</h1>
        <input
            type="text"
            className="mx-auto bg-white border-2 h-10  w-1/2 border-orange  focus: outline-none"
            value={sessionStorage.getItem('name')} 
            // onChange={(event) => handleInputChange(index, event)}
            placeholder="Enter ingredient"
          />
        </div>
        {/* <div className=" flex w-2/3  mx-auto items-center ">
        <h1>password</h1>
        <input
            type="password"
            className="mx-auto bg-white border-2 h-10  w-1/2 border-orange  focus: outline-none"
            value={"^^^^^^^^^"}
            //onChange={(event) => handleInputChange(index, event)}
            placeholder="Enter password"
          />
          <button onClick={() => handleDeleteInput(index)}><span><img src="/icons/edit.png" className="w-4 h-4"/></span></button>
        </div><div className=" flex w-2/3  mx-auto items-center ">
        <h1>confirm password</h1>
        <input
            type="password"
            className="mx-auto bg-white border-2 h-10  w-1/2 border-orange  focus: outline-none"
            
            //onChange={(event) => handleInputChange(index, event)}
            placeholder="Enter password"
          />
          <button onClick={() => handleDeleteInput(index)}><span><img src="/icons/edit.png" className="w-4 h-4"/></span></button>
        </div> */}

        <div className="flex w-2/3  mx-auto items-center ">
        <h1 className="text-xl font-nat">Calories</h1>
        <input
            type="text"
            defaultValue={cals}
            className="mx-auto bg-white border-2 h-10  w-1/2 border-orange  focus: outline-none"
            onChange={handlecals}
            placeholder="calories"
          />
        </div>
        
        <div className="grid place-items-center w-2/3 mx-auto">
            <button className={`flex justify-between mx-auto w-1/2 p-2 bg-white text-maron border-2 
             border-maron text-xl font-semibold  ${cus?"border-b-0 rounded-t-xl":"rounded-xl"}`}
            onClick={drop}>
            {cuisine} 
            <img src="/icons/dropdown.svg" className=""/>
            </button>
        <div className={`bg-white w-1/2 border-2 rounded-b-xl border-maron border-t-0 ${cus?"grid":"hidden"}`}>
                <ul>
                {
                cuisines.map((cus)=>(
                <li className="p-4 text-lg rounded-xl hover:underline decoration-orange 
                decoration-2 underline-offset-[10px] 
                hover:animate-bounce" onClick={()=>{setCuisine(cus);setCus(false)}}>{cus}</li>)
                )}
                </ul>
            </div>
            </div>
            <div className="container mx-auto mt-8">
      <h1 className="text-2xl mb-4 font-nat">Select Intolerances:</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10">
        {intolerances.map((intolerance, index) => (
          <Checkbox
            key={index}
            label={intolerance}
            isChecked={selectedIntolerances.includes(intolerance)}
            onChange={() => handleCheckboxChange(intolerance)}
          />
        ))}
      </div>

        </div>
        <div className="flex gap-20 justify-between">
            <button className="px-12 cambtn1 hover:bg-white hover:text-orange mx-auto my-12" onClick={()=>(save('c'))}>Save</button>
            <button className="px-12 cambtn1 hover:bg-white hover:text-orange mx-auto my-12" onClick={()=>(save('d'))}>Delete Profile</button>
        </div>
        </div>
        </div>
    )
}