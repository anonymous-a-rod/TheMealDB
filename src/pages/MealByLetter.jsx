import React from 'react';
import MealByLetterSection from '../components/MealByLetterSection';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom/dist';
import Spinner from '../components/Spinner';

export default function MealByLetter() {

    const letter = useParams().curr;
    const [meals, setMeals] = useState([]);   
    const navigate = useNavigate(); 
    const [display, setDisplay] = useState(true); 
    
    useEffect(()=>{
        async function getData (){
            setDisplay(false);
            const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
            setMeals(data.data.meals);
            setDisplay(true);
        };
        getData().catch(err=>console.log(err)); 
    },[]); 
    

  return (
    <div>{(display)?
        <div className="max-w-6xl mx-auto">
            <h1 className='text-3xl text-center mb-8'>Recipes that start with {letter}</h1>
            {(Array.isArray(meals))?<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center'>
                { 
                    meals.map((item, index)=>{
                        return <div key={item + index} 
                        className='max-w-xs rounded overflow-hidden shadow-lg bg-white flex flex-col items-center gap-5 cursor-pointer hover:opacity-75'
                        onClick={()=>navigate(`../meal/${item.idMeal}`)}>
                                <img src={item.strMealThumb} alt={item.strMeal}/>
                                <p>{item.strMeal}</p>
                        </div>
                    }) 
                }
            </div>
            :<p className='text-3xl text-center mb-8'>No Meals that start with {letter}</p>}
        </div>
        :<Spinner />}
        {(display)?<MealByLetterSection />:null}
    </div>
  )
}