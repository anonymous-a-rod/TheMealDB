import { Banner } from "../components/Banner";
import MealByCountry from "../components/MealByCountry";
import MealByLetterSection from "../components/MealByLetterSection";
import MealCategories from "../components/MealCategories";
import Popular from "../components/Popular";
import RandomIngredients from "../components/RandomIngredients";
import RandomMeals from "../components/RandomMeals";
import { useState, useEffect } from "react";
import ScrollArrow from "../components/ScrollArrow";

const Home = () => {

  const [arrowDisplay, setArrowDisplay] = useState(false); 

  useEffect(() => {
    document.addEventListener("scroll", () => {
      (window.scrollY > 500)
      ?setArrowDisplay(true):setArrowDisplay(false);
    })
  }, [arrowDisplay]);

  const scrollToTop = ()=>{
    window.scrollTo({top:0, behavior:'smooth'}); 
  };

  return (
    <>
      <ScrollArrow arrowDisplay={arrowDisplay} scrollToTop={scrollToTop} />
      <Banner />
      <section className='max-w-6xl mx-auto'>
        <RandomMeals />
        <Popular />
        <MealCategories />
        <RandomIngredients />
        <MealByCountry />
        <MealByLetterSection />
      </section>
    </>
  );
};

export default Home;
