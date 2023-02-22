import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";




const Meal = () => {
    const [meal,setMeal] = useState(null);
    const [loading, setLoading] = useState(true);
    const idMeal = useParams();

  
  const ingredients = Array(20).fill().map((_, index) => meal.strIngredient[index] || "");

  

  useEffect(()=>{
      setLoading(true);
      try{
          fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
              .then(res=>res.json())
              .then(data=> setMeal(data.meals[0]));
      }catch(error){
          console.log(error);
      }
      setLoading(false);
  },[idMeal])

  console.log(meal)

  if(loading){
      return <Spinner />
  }

  return ( 
      <>{ meal && 
          <section className="max-w-6xl mx-auto grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center">
              
          <div >
               
          <div class="flip-card">
    <div class="flip-card-inner">
    <div class="flip-card-front">
    <img  src={meal.strMealThumb} alt={meal.strMeal} />
    </div>
    <div class="flip-card-back">  
      <h1>{meal.strInstructions}</h1> </div> 
      </div>
        </div>
          <div >
                  <img
                    src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient1}.png`}
                    alt={meal.strIngredient1}
                    />
                  </div>
                  <div>{ingredients}</div>
                  </div>

              
                 
      
     
                 
                 


          </section>
      }

      </>
);
}


export default Meal;
