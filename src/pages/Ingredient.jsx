import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";


const Ingredients = () => {

    const [meals,setMeals] = useState(null);
    const [loading, setLoading] = useState(true);
    const [ingredientList, setIngredientList] = useState([]);
    const [currentIngredient, setCurrentIngredient] = useState(null);
    const [currentIngredientIndex, setCurrentIngredientIndex] = useState(null);

    const navigate = useNavigate();
    const ingredient = useParams().ingredient;

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

    useEffect(()=>{
        try{
            fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
                .then(res=>res.json())
                .then(data=> setIngredientList(data.meals));
        }catch(error){
            console.log(error);
        }
        setLoading(false);
    },[ingredient])

    useEffect(()=>{
        if(ingredientList !== undefined && ingredientList.length > 1){
            setCurrentIngredient(ingredientList.filter(item => item.strIngredient === ingredient));
        } 
    },[ingredientList,ingredient])

    useEffect(()=>{
        if(currentIngredient){
            setCurrentIngredientIndex(Number(currentIngredient[0].idIngredient))
        } 
    },[currentIngredient])

    function prev(){
        let index = Number(currentIngredientIndex) === 0 ? 574 : Number(currentIngredientIndex-1);
        navigate(`../ingredient/${ingredientList[index].strIngredient}`)
    }

    function next(){
        let index = Number(currentIngredientIndex) === 574 ? 0 : Number(currentIngredientIndex+1);
        navigate(`../ingredient/${ingredientList[index].strIngredient}`)
    }

    console.log(meals)
    console.log(ingredientList)
    console.log(currentIngredient)   

    return ( 
        <section className="max-w-6xl mx-auto">
            <h3 className="w-full text-center text-3xl mb-10">{ingredient}</h3>
            <div className="flex flex-row items-center justify-center">
                <button onClick={prev}>prev</button>
                <img src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`} alt={ingredient} />
                <button onClick={next}>Next</button>  
            </div>    
            { currentIngredient && currentIngredient[0].strDescription}
            <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center">
                {loading && <Spinner/> }
                {!loading && meals && meals.map((meal)=>(
                    <div className="flex flex-col items-center"
                    onClick={()=>navigate(`../meal/${meal.idMeal}`)} 
                    key={meal.strMeal}
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