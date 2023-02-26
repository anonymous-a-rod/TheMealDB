import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MealCategories from "../components/MealCategories";
import ScrollArrow from "../components/ScrollArrow";
import Spinner from "../components/Spinner";

const Category = () => {
  const [meals, setMeals] = useState(null);
  const [loading, setLoading] = useState(true);
  const categoryName = useParams().categoryName;
  const navigate = useNavigate();
  const [arrowDisplay, setArrowDisplay] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
      )
        .then((res) => res.json())
        .then((data) => setMeals(data.meals));
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, [categoryName]);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      (window.scrollY > 500)
      ?setArrowDisplay(true):setArrowDisplay(false);
    })
  }, [arrowDisplay]);

  const scrollToTop = ()=>{
    window.scrollTo({top:0, behavior:'smooth'}); 
  };

  // console.log(meals)

  return (
    <section className='max-w-6xl mx-auto pl-10 pr-10'>
      <ScrollArrow arrowDisplay={arrowDisplay} scrollToTop={scrollToTop} />
      <h1 className='w-full text-center text-4xl my-16 font-semibold'>
        {categoryName}
      </h1>
      <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center'>
        {loading && <Spinner />}
        {!loading &&
          meals &&
          meals.map((meal) => (
            <div
              className='max-w-xs mx-auto overflow-hidden flex flex-col items-center cursor-pointer hover:opacity-75'
              onClick={() => navigate(`../meal/${meal.idMeal}`)}
              key={meal.idMeal}
            >
              <img
                className='rounded-full drop-shadow-lg mb-4'
                src={meal.strMealThumb}
                alt={meal.strMeal}
              />
              <p className='text-stone-600 text-center'>{meal.strMeal}</p>
            </div>
          ))}
      </div>
      <MealCategories />
    </section>
  );
};

export default Category;
