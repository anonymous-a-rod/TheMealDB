import { useEffect, useState } from "react";
import MealCard from "../components/MealCard";
import Spinner from "../components/Spinner";

const Home = () => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        setLoading(true);
        try{
            fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
                .then(res=>res.json())
                .then(data=> setMeals(data.meals));
        }catch(error){
            console.log(error);
        }
        setLoading(false);
    },[])

    console.log(meals)

    if(loading){
        return <Spinner />
    }

    return ( 
        <section className="">
            <h1 className="w-full text-center text-4xl mb-10">The MealDB</h1>
            <div className="max-w-6xl mx-auto grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center">
                { meals && meals.map((meal)=>(
                    <MealCard 
                        meal={meal}
                        key={meal.idMeal}
                    />
                ))}
            </div>
        </section>
     );
}
 
export default Home;