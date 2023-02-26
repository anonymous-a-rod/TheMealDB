import React from "react";

export const Banner = () => {
  return (
    <div className='w-full text-center'>
      <div className="h-full bg-[url('https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2272&q=80')] bg-no-repeat bg-cover bg-center">
        <div className='w-full h-full px-16 py-48 justify-start items-center backdrop-brightness-50'>
          <span className='mb-8 text-white text-6xl text-left'>
            Delicious Meal Inspiration <br />& Recipes
          </span>
          <p className='text-white mt-4'>
            Explore by Category, Ingredient, Country, Name or First Letter
          </p>
        </div>
      </div>
    </div>
  );
};
