import React from 'react';

export default function MealByLetterSection() {

  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  return (
    <section>
      <h1 className='text-center text-3xl my-10'>Meals by Letter</h1>
          <div className='flex justify-center cursor-pointer text-2xl gap-2'>
              {letters.map((item, index)=>{
                  return <div key={item} className='flex justify-center gap-2'>
                      <a href={`/letter/${item}`} className='hover:text-red-400'>{item}</a>
                      {(index===letters.length-1)?null:<p>/</p>}
                    </div>
              })}
          </div>
    </section>
  )
}