import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function MealByCountry() {

    const navigate = useNavigate(); 
    const [area, setArea] = useState([]); 

    useEffect(()=>{
        const getData = async ()=>{
            const data = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
            console.log(data.data.meals)
            setArea(data.data.meals); 
        }; 
        getData().catch(err=>console.log(err)); 
    }, []);

    
  return (
    <div className='flex justify-center flex-wrap cursor-pointer text-2xl gap-2'>
        {
            area && area.map(item=>{
                return <img src={``}
                className=''
                alt={item.strArea} 
                key={item.strArea} 
                onClick={()=>navigate(`/country/${item.strArea}`)} />
            })
        }
    </div>
  )
}
