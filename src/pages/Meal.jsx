import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";


const Meal = () => {

  const [meal,setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tags, setTags] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  const param = useParams().idMeal;



  useEffect(()=>{
      setLoading(true);
      try{
          fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${param}`)
              .then(res=>res.json())
              .then(data=> setMeal(data.meals[0]));
      }catch(error){
          console.log(error);
      }
      setLoading(false);
  },[idMeal, param])

  useEffect(()=>{
    if(meal.strTags && meal.strTags !== " "){
       setTags(meal.strTags.split(",")) 
    }
    if(meal.strInstructions && meal.strInstructions !== " "){
        setInstructions(meal.strInstructions.split(".")) 
     }
  },[meal])

  console.log(meal)
  console.log(tags)

  if(loading){
      return <Spinner />
  }

  return ( 
      <>{ meal && 
        <section className="max-w-6xl mx-auto pl-10 pr-10 flex flex-col">
            <div className="text-center flex flex-col items-center md:flex-row ">

                <div className="w-[60%] md:w-[40%]">
                    <h1 className="m-4 text-4xl font-semibold">{meal.strMeal}</h1>
                    <img src={meal.strMealThumb} alt={meal.strMeal} className="mt-4 mb-4" />
                    <div>
                    {tags && tags.map((tag)=>{
                        return  <>{tag && <span className="mb-4 inline-block px-2 py-1 mr-2 text-sm font-medium text-gray-800 bg-gray-200 rounded-full" key={tag}>{tag}</span>} </>
                    })}
                    </div>
                </div>

                <div className="w-[60%] mx-auto md:pl-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center mt-10">
                    {meal && array.map((index)=>{
                        return (
                        <>
                            {index && meal[`strMeasure${index}`] && meal[`strIngredient${index}`] &&
                            <div className="flex flex-col h-full justify-start flex-center" key={index*Math.floor(Math.random()*1000)} >
                                <img 
                                    src={`https://www.themealdb.com/images/ingredients/${meal[`strIngredient${index}`]}.png`} 
                                    alt={meal.strIngredient1}
                                    className="" 
                                />
                                <p><span className="">{meal[`strMeasure${index}`]}</span> {meal[`strIngredient${index}`]}</p>              
                            </div>
                            }
                        </>    
                        )
                    })}
                </div>
                
            </div>

                <div className="text-center pt-10 pb-10">
                    {instructions && instructions.map((instruction,index)=>{
                        return <>{instruction && <p className="" key={instruction}><span className="font-semibold">Step {index+1}:</span> {instruction}.</p>} </>
                    })}
                </div>
   

          </section>
      }

      </>
);
}


export default Meal;
