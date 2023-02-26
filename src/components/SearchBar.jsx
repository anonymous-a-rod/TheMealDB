import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function SearchBar() {
  const navigate = useNavigate();
  const [mealName, setMealName] = useState("");


  const handleSearchSubmit = () => {
    navigate(`/mealName/${mealName}`)
    setMealName("")
  }

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      // Do something when the user presses Enter
      handleSearchSubmit()
    }
  };

  return (
    <div className="flex rounded-full border-grey-light border">
      <div className='flex justify-center'>
        <button  
          onClick={handleSearchSubmit}
        >
          <span className="w-auto flex justify-end items-center text-grey p-2">
            <FaSearch />
          </span>
        </button>
        <input
          className="w-32 rounded pl-1 mr-3 focus:outline-none"
          type="text"
          placeholder="Find Your Meal" 
          value={mealName}
          onChange={(e)=>setMealName(e.target.value)}
          onKeyDown={handleInputKeyDown}
        />
      </div>
    </div>
  );
}