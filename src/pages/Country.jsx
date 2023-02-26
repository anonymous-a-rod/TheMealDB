import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MealByCountry from "../components/MealByCountry";
import Spinner from "../components/Spinner";
import { TbArrowBigUpLines } from "react-icons/tb";

export default function Country() {
  const [arrowDisplay, setArrowDisplay] = useState(false); 
  const [display, setDisplay] = useState(true);
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();
  let country = useParams().area;

  useEffect(() => {
    const getData = async () => {
      setDisplay(false);
      const data = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
      );
      setMeals(data.data.meals);
      setDisplay(true);
    };
    getData().catch((err) => console.log(err));
  }, [country]);

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
    <section className='max-w-6xl mx-auto my-16 px-10'>
      <div className={(arrowDisplay)?'flex flex-col items-center fixed bottom-5 right-5 md:right-10 md:bottom-20 cursor-pointer z-10 transition-all delay-150':'fixed bottom-5 -right-20 md:bottom-20 md:-right-20 transition-all delay-150'} onClick={scrollToTop}>
        <TbArrowBigUpLines className="text-6xl md:text-7xl"/>
        <label className="text-sm">Back to top</label>
      </div>
      <h1 className='w-full text-center text-stone-800 text-4xl mb-10 font-semibold'>
        {country} Meals
      </h1>
      {display ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center'>
          {meals.map((item, index) => {
            return (
              <div
                key={item + index}
                className='max-w-xs mx-auto overflow-hidden flex flex-col items-center cursor-pointer hover:opacity-75'
                onClick={() => navigate(`../meal/${item.idMeal}`)}
              >
                <img
                  className='rounded-full drop-shadow-lg mb-4'
                  src={item.strMealThumb}
                  alt={item.strMeal}
                />
                <p className='text-stone-600'>{item.strMeal}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <Spinner />
      )}
      <MealByCountry />
    </section>
  );
}
