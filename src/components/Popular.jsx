import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const Popular = () => {
    const [ingredientList, setIngredientList] = useState([]);
    const [mainIngredients, setMainIngredients] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(()=>{
        function fetchMainIngredient(){
            try{
                fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
                    .then(res=>res.json())
                    .then(data=> setIngredientList(data.meals));
            }catch(error){
                console.log(error);
            }    
        }
        fetchMainIngredient();
    },[])

    useEffect(()=>{
        function filterIngredients(ingredient){
            return ingredientList.filter((item)=>(item.strIngredient === ingredient))
        }
        function addMainIgredient(ingredient){
            setMainIngredients(prev => [...prev,...filterIngredients(ingredient)]);
        }
        if(mainIngredients.length < 4){
            addMainIgredient("Chicken");
            addMainIgredient("Salmon");
            addMainIgredient("Beef");
            addMainIgredient("Pork");     
        }
        
        console.log("main ingredients")
        console.log(mainIngredients);
        
        setLoading(false);
    },[ingredientList, mainIngredients])



    console.log(mainIngredients)


    return ( 
        <section className="max-w-6xl mx-auto mt-10 mb-10">
            <h3 className="w-full text-center text-3xl mb-10">Popular Ingredients</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center">
            {loading && <Spinner />}
            {!loading && mainIngredients && mainIngredients.map((ingredient)=>(
                    <div className="flex flex-col items-center  cursor-pointer"
                    onClick={()=>navigate(`../ingredient/${ingredient.strIngredient}`)}
                    key={ingredient.strIngredient} 
                    >
                        <img src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`} alt={ingredient.strIngredient} />
                        <div className="font-bold text-xl mb-2">{ingredient.strIngredient}</div>
                    </div>
                ))}
        
            </div>
        </section>
     );
}
 
export default Popular;