import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MealCard = ({meal}) => {
    const [tags, setTags] = useState(null);

    const navigate = useNavigate();


    useEffect(()=>{
        let tempTags = meal.strTags
        if(tempTags !== null && tempTags !== "undefined"){
           tempTags = tempTags.split(',');
           tempTags = tempTags.filter(tag => tag.replaceAll(' ','') !== '#');
        } else {
            tempTags = null;
        }
        setTags(tempTags)
    },[meal.strTags, meal])

    console.log(tags)

    return ( 
        <div className="max-w-xs flex flex-col items-center"
        onClick={()=>navigate(`../meal/${meal.idMeal}`)} 
        >
            <img className="w-full h-40 object-cover" src={meal.strMealThumb} alt={meal.strMeal} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{meal.strMeal}</div>
            </div>
        </div>
     );
}
 
export default MealCard;