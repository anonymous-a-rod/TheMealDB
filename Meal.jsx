import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";




const Meal = () => {
  const [meal,setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const idMeal = useParams();



  

  useEffect(()=>{
      setLoading(true);
      try{
          fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52803`)
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
          <section className="max-w-2xl  mx-auto flex flex-col items-center">
              
               <div class=" grid grid-rows-6 border grid-flow-col gap-4">
                  <div class="col-start-1 col-start-2 ">1{meal.strMeal}</div>
                  <div class="row-start-1 col-start-3 ">2{meal.strTags}</div>

                  <div class="row-start-2 col-start-2 ">3
                  <div class="flip-card">
    <div class="flip-card-inner">
    <div class="flip-card-front">
    <img  src={meal.strMealThumb} alt={meal.strMeal} />
    </div>
    <div class="flip-card-back">  
      <h1>{meal.strInstructions}</h1> </div> 
      </div></div></div>
      
                  <div class="row-start-2 col-start-3 ">4{meal.strIngredient1} <br></br>{meal.strMeasure1}</div>
                  <div class="row-start-2 col-start-4 ">5{meal.strIngredient2}<br></br>{meal.strMeasure2}</div>
                  <div class="row-start-2 col-start-5 ">6{meal.strIngredient3}<br></br>{meal.strMeasure3}</div>
                  <div class=" row-start-2 col-start-6 ">7{meal.strIngredient4}<br></br>{meal.strMeasure4}</div>
                  <div class=" row-start-3 col-start-3 ">8{meal.strIngredient5} <br></br>{meal.strMeasure5}</div>
                  <div class="row-start-3 col-start-4 ">9{meal.strIngredient6}<br></br>{meal.strMeasure6}</div>
                  <div class="row-start-3 col-start-5 ">10{meal.strIngredient7}<br></br>{meal.strMeasure7}</div>
                  <div class=" row-start-3 col-start-6 ">11{meal.strIngredient8}<br></br>{meal.strMeasure8}</div>
                  </div>

          </section>
      }

      </>
);
}


export default Meal;
