import { Banner } from "../components/Banner";
import MealByCountry from "../components/MealByCountry";
import MealByLetterSection from "../components/MealByLetterSection";
import MealCategories from "../components/MealCategories";
import Popular from "../components/Popular";
import RandomIngredients from "../components/RandomIngredients";
import RandomMeals from "../components/RandomMeals";
import { TbArrowBigUpLines } from "react-icons/tb";
import { useState, useEffect } from "react";

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
      <div className={(arrowDisplay)?'flex flex-col items-center fixed bottom-5 right-5 md:right-10 md:bottom-20 cursor-pointer z-10 transition-all delay-150':'fixed bottom-5 -right-20 md:bottom-20 md:-right-20 transition-all delay-150'} onClick={scrollToTop}>
        <TbArrowBigUpLines className="text-6xl md:text-7xl"/>
        <label className="text-sm">Back to top</label>
      </div>
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
