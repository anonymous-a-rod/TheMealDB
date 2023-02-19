import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const Meal = () => {
    const [meal,setMeal] = useState(null);
    const [loading, setLoading] = useState(true);
    const idMeal = useParams().idMeal;

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
        <>
            { meal && 
                <section className="max-w-6xl mx-auto flex flex-col items-center">
                    
                    <h2>{meal.strMeal}</h2>
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                </section>
            }
        </>
     );
}
 
export default Meal;