import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const RandomMeals = () => {
  const [randomMeals, setRandomMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (randomMeals.length <= 5) {
      try {
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
          .then((res) => res.json())
          .then((data) => setRandomMeals((prev) => [...prev, ...data.meals]));
      } catch (error) {
        console.log(error);
      }
    }
    setLoading(false);
  }, [randomMeals]);

  const scrollToTop = ()=>{
    window.scrollTo({top:0}); 
  };

  // console.log(randomMeals)

  return (
    <div className='max-w-6xl mx-auto px-10 mt-10 pb-10 shadow-lg'>
      <h3 className='w-full text-center font-bold text-stone-800 text-3xl mb-10'>
        Featured Meals
      </h3>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 w-full'>
        {loading && <Spinner />}
        {!loading &&
          randomMeals &&
          [...new Set(randomMeals)].slice(0, 4).map((meal, index) => (
            <div
              className='flex flex-col h-full w-full cursor-pointer'
              onClick={() => {navigate(`../meal/${meal.idMeal}`);scrollToTop();}}
              key={index}
            >
              <img
                className='object-cover rounded-full shadow-lg mb-6'
                src={meal.strMealThumb}
                alt={meal.strMeal}
              />
              <div className='text-center'>
                <div className='text-stone-600 text-xl mb-2'>
                  {meal.strMeal}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RandomMeals;
