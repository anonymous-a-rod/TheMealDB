import React from 'react';
import { useNavigate } from 'react-router';

export default function MealByLetterSection() {

  const navigate = useNavigate();
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  return (
    <section>
      <h1 className='text-center text-3xl my-10'>Meals by Letter</h1>
          <div className='flex justify-center flex-wrap cursor-pointer text-2xl gap-2'>
              {letters.map((item, index)=>{
                  return <div key={item} className='flex justify-center gap-2'>
                      <p onClick={()=>navigate(`/letter/${item}`)} className='hover:text-red-400'>{item}</p>
                      {(index===letters.length-1)?null:<p>/</p>}
                    </div>
              })}
          </div>
    </section>
  )
}