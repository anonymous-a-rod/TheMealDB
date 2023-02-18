import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";


const Ingredients = () => {

    const [meals,setMeals] = useState(null);
    const [loading, setLoading] = useState(true);
    const ingredient = useParams().ingredient;
    const navigate = useNavigate();
    

    useEffect(()=>{
        setLoading(true);
        try{
            console.log(ingredient)
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
                .then(res=>res.json())
                .then(data=> setMeals(data.meals));
        }catch(error){
            console.log(error);
        }
        setLoading(false);
    },[ingredient])

    console.log(meals)

    return ( 
        <section className="max-w-6xl mx-auto">
            
            <h3 className="w-full text-center text-3xl mb-10">{ingredient}</h3>
            <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center">
                {loading && <Spinner/> }
                {!loading && meals && meals.map((meal)=>(
                    <div className="flex flex-col items-center"
                    onClick={()=>navigate(`../meal/${meal.idMeal}`)} 
                    >
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                        <label>{meal.strMeal}</label>
                    </div>
                ))}
            </div>
        </section>
     );
}
 
export default Ingredients;