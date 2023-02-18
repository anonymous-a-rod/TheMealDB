import { useEffect, useState } from "react";
import MealCard from "../components/MealCard";
import Spinner from "../components/Spinner";

const RandomMeals = () => {
    const [randomMeals, setRandomMeals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        if(randomMeals.length <= 3){
        try{
            fetch('https://www.themealdb.com/api/json/v1/1/random.php')
                .then(res=>res.json())
                .then(data=> setRandomMeals(prev => [...prev, ...data.meals]));
        }catch(error){
            console.log(error);
        }
        }
        setLoading(false);
    },[randomMeals])

    console.log(randomMeals)

    return ( 
        <section className="max-w-6xl mx-auto">
            <h3 className="w-full text-center text-3xl mb-10">Random Meal Selection</h3>
            <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center">
                {loading && <Spinner />}
                {!loading && randomMeals && randomMeals.slice(0,4).map((meal)=>(
                    <MealCard 
                        meal={meal}
                        key={meal.idMeal}
                    />
                ))}
            </div>
        </section>
     );
}
 
export default RandomMeals;