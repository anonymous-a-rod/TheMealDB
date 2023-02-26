import React from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SearchForm() {
  const navigate = useNavigate();

  return (
    <div className="flex rounded-full border-grey-light border">
      <form className='flex justify-center'>
        <button onClick={() => navigate(`../mealName/`)} >
          <span className="w-auto flex justify-end items-center text-grey p-2">
            <FaSearch />
          </span>
        </button>
        <input
          className="w-32 rounded pl-0.5 mr-3 focus:outline-none"
          type="text"
          placeholder="Find Your Meal" />
      </form>
    </div>
  );
}