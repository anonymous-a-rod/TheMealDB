import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const MealCategories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(()=>{

        try{
            fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
                .then(res=>res.json())
                .then(data=> setCategories(data.categories.slice(0,12)));
        }catch(error){
            console.log(error);
        }
        
        setLoading(false);
    },[])

    console.log(categories)


    if(loading){
        return <Spinner />
    }

    return ( 
        <section className="max-w-6xl mx-auto mt-10 ">
            <h3 className="w-full text-center text-3xl mb-10">Meal Categories</h3>
            <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center">
            {!loading && categories.map((category)=>(
                <div className="flex items-center flex-col"
                onClick={()=>navigate(`../category/${category.strCategory}`)} 
                >
                    
                    <img src={category.strCategoryThumb} alt={category.strCategory} />
                    <div className="font-bold text-xl mb-2">{category.strCategory}</div>
                    
                </div>
            ))}
            </div>
        </section>
     );
}
 
export default MealCategories;