import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const RandomIngredients = () => {
    const [randomIngredients, setRandomIngredients] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(()=>{
        const randomNumber = Math.floor(Math.random()*100);
        
        try{
            fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
                .then(res=>res.json())
                .then(data=> setRandomIngredients([data.meals[randomNumber],data.meals[randomNumber*2],data.meals[randomNumber*3],data.meals[randomNumber*4]]));
        }catch(error){
            console.log(error);
        }
       
        setLoading(false);
    },[])

    console.log(randomIngredients)

    return ( 
        <section className="max-w-6xl mx-auto">
            <h3 className="w-full text-center text-3xl mb-10">Random Ingredients</h3>
            <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center">
                {loading && <Spinner />}
                {!loading && randomIngredients && randomIngredients.map((ingredient)=>(
                    <div className="flex flex-col items-center"
                    onClick={()=>navigate(`../ingredient/${ingredient.strIngredient}`)} 
                    >
                        <img src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`} alt={ingredient.strIngredient} />
                        <div className="font-bold text-xl mb-2">{ingredient.strIngredient}</div>
                    </div>
                ))}
            </div>
        </section>
     );
}
 
export default RandomIngredients;