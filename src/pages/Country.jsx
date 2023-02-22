import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import MealByCountry from '../components/MealByCountry';
import Spinner from '../components/Spinner';

export default function Country() {

    const [display, setDisplay] = useState(true);
    const [meals, setMeals] = useState([]); 
    const navigate = useNavigate(); 
    let country = useParams().area;
    
    useEffect(()=>{
        const getData = async ()=>{
            setDisplay(false);
            const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
            setMeals(data.data.meals);
            setDisplay(true);
        }
        getData().catch(err=>console.log(err)); 
    }, [country]);

  return (
    <section>
        <h1>{country} Meals</h1>
        {(display)?<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center'>
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
        :<Spinner />
        }
        <MealByCountry />
    </section>
  )
}
