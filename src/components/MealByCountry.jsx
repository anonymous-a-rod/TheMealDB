import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TbFlag2Off } from "react-icons/tb";

export default function MealByCountry() {
  const navigate = useNavigate();
  const [area, setArea] = useState([]);
  const countryCode = [
    "US",
    "GB",
    "CA",
    "CN",
    "HR",
    "NL",
    "EG",
    "FR",
    "GR",
    "IN",
    "IE",
    "IT",
    "JM",
    "JP",
    "KE",
    "MY",
    "MX",
    "MA",
    "PL",
    "PT",
    "RU",
    "ES",
    "TH",
    "TN",
    "TR",
    "Unknown",
    "VN",
  ];
  const isHomePage = window.location.pathname === "/";

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
      );
      setArea(data.data.meals);
    };
    getData().catch((err) => console.log(err));
  }, []);

  return (
    <div
      className={`max-w-6xl  mx-auto px-10 mb-16 pb-10 ${
        isHomePage ? "shadow-sm" : ""
      }`}
    >
      <h1 className='text-center text-2xl py-10  text-stone-800'>by Country</h1>
      <div className='flex justify-center flex-wrap cursor-pointer text-2xl gap-2'>
        {area &&
          area.map((item, index) => {
            return countryCode[index] !== "Unknown" ? (
              <div
                key={item.strArea}
                className='flex flex-col px-5 hover:opacity-75'
              >
                <img
                  src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode[index]}.svg`}
                  className='h-28 w-28'
                  alt={item.strArea}
                  onClick={() => navigate(`/country/${item.strArea}`)}
                />
                <label className=' text-stone-600 leading-3 text-sm text-center mt-0'>
                  {item.strArea}
                </label>
              </div>
            ) : (
              <div
                key={item.strArea}
                className='flex flex-col hover:opacity-75 mt-2'
              >
                <TbFlag2Off
                  className='h-24 w-24'
                  alt={item.strArea}
                  onClick={() => navigate(`/country/${item.strArea}`)}
                />
                <label className='text-sm  text-stone-600 leading-6 text-center'>
                  {item.strArea}
                </label>
              </div>
            );
          })}
      </div>
    </div>
  );
}
