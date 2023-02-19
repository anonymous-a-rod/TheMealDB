import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const RandomMeals = () => {
    const [randomMeals, setRandomMeals] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(()=>{
        if(randomMeals.length <= 5){
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

    // console.log(randomMeals)

    return ( 
        <section className="max-w-6xl mx-auto pl-10 pr-10">
            <h3 className="w-full text-center text-3xl mb-10">Random Meal Selection</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                {loading && <Spinner />}
                {!loading && randomMeals && [...new Set(randomMeals)].slice(0,4).map((meal,index)=>(
                    <div className="flex flex-col h-full w-full cursor-pointer"
                    onClick={()=>navigate(`../meal/${meal.idMeal}`)} 
                    key={index}
                    >
                        <img className=" object-cover" src={meal.strMealThumb} alt={meal.strMeal} />
                        <div className="text-center">
                            <div className="font-bold text-xl mb-2">{meal.strMeal}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
     );
}
 
export default RandomMeals;