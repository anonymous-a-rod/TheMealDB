import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MealCard = ({meal}) => {
    const [tags, setTags] = useState(null);

    const navigate = useNavigate();


    useEffect(()=>{
        let tempTags = meal.strTags
        if(tempTags !== null){
           tempTags = tempTags.split(',');
           tempTags = tempTags.filter(tag => tag.replaceAll(' ','') !== '#');

        }
                setTags(tempTags)
    },[meal.strTags, meal])

    console.log(tags)

    return ( 
        <div className="max-w-xs h-80 rounded overflow-hidden shadow-lg bg-white flex flex-col items-center"
        onClick={()=>navigate(`../meal/${meal.idMeal}`)} 
        >
            <img className="w-full h-40 object-cover" src={meal.strMealThumb} alt={meal.strMeal} />
            <div className="px-6 py-4">
                <div >
                    <div className="font-bold text-xl mb-2">{meal.strMeal}</div>
                    <p className="text-gray-700 text-base">{meal.description}</p>
                </div>
                <div className="overflow-hidden">
                    { tags && tags.map((tag)=>(
                        <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 m-1">
                        #{tag} 
                        </span>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default MealCard;