import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom/dist";
import Spinner from "../components/Spinner";
import MealByLetterSection from "../components/MealByLetterSection";
import ScrollArrow from "../components/ScrollArrow";

export default function MealByLetter() {
  let letter = useParams().curr;
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();
  const [display, setDisplay] = useState(true);
  const [arrowDisplay, setArrowDisplay] = useState(false);

  useEffect(() => {
    async function getData() {
      setDisplay(false);
      const data = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
      );
      setMeals(data.data.meals);
      setDisplay(true);
    }
    getData().catch((err) => console.log(err));
  }, [letter]);

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
        <div className='max-w-5xl mx-auto'>
          <h1 className='w-full text-center text-4xl my-16 font-semibold text-stone-800'>
            Recipes that start with {letter}
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
            <p className='text-3xl text-center mb-8'>
              No Meals that start with {letter}
            </p>
          )}
        </div>
      ) : (
        <Spinner />
      )}
      <MealByLetterSection />
    </div>
  );
}
