import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import ScrollArrow from "../components/ScrollArrow";

export default function MealByName() {
  let mealName = useParams().name;
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();
  const [display, setDisplay] = useState(true);
  const [arrowDisplay, setArrowDisplay] = useState(false);

  useEffect(() => {
    async function getData() {
      setDisplay(false);
      const data = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
      );
      setMeals(data.data.meals);
      setDisplay(true);
    }
    getData().catch((err) => console.log(err));
  }, [mealName]);

  useEffect(()=>{
    // console.log(meals)
  },[meals,mealName])

  useEffect(() => {
    document.addEventListener("scroll", () => {
      (window.scrollY > 500)
      ?setArrowDisplay(true):setArrowDisplay(false);
    })
  }, [arrowDisplay]);

  const scrollToTop = ()=>{
    window.scrollTo({top:0, behavior:'smooth'}); 
  };

  return (
    <div>
      <ScrollArrow arrowDisplay={arrowDisplay} scrollToTop={scrollToTop} />
      {display ? (
        <div className='max-w-5xl mx-auto mb-10'>
          <h1 className='w-full capitalize text-center text-4xl my-16 font-semibold text-stone-800'>
            {mealName} Recipes
          </h1>
          {Array.isArray(meals) ? (
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center'>
              {meals.map((item, index) => {
                return (
                  <div
                    key={item + index}
                    className='max-w-xs mx-auto overflow-hidden flex flex-col items-center gap-1 cursor-pointer hover:opacity-75'
                    onClick={() => navigate(`../meal/${item.idMeal}`)}
                  >
                    <img
                      className='rounded-full shadow-lg'
                      src={item.strMealThumb}
                      alt={item.strMeal}
                    />
                    <p className='text-stone-600 mt-2 text-center'>{item.strMeal}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-lg text-center mb-8 mt-8">
              No meals found for "<span className="capitalize">{mealName}</span>".{" "}
              <Link to="/" className="text-stone-700 font-bold">
                Click here
              </Link>{" "}
              to return to the home page or search again.
            </p>
          )}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}