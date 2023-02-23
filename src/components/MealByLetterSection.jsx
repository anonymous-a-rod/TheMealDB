import React from "react";
import { useNavigate } from "react-router";

export default function MealByLetterSection() {
  const navigate = useNavigate();
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <div className='max-w-6xl mx-auto px-10 mt-10'>
      <h4 className='text-center text-2xl my-6'>by First Letter</h4>
      <div className='flex justify-center flex-wrap cursor-pointer text-lg gap-2'>
        {letters.map((item, index) => {
          return (
            <div key={item} className='flex justify-center gap-2'>
              <p
                onClick={() => navigate(`/letter/${item}`)}
                className=' text-stone-600 hover:text-green-600 hover:text-xl'
              >
                {item}
              </p>
              {index === letters.length - 1 ? null : (
                <p className='text-stone-600'>/</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
