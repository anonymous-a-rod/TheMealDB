import { Banner } from "../components/Banner";
import MealByCountry from "../components/MealByCountry";
import MealByLetterSection from "../components/MealByLetterSection";
import MealCategories from "../components/MealCategories";
import Popular from "../components/Popular";
import RandomIngredients from "../components/RandomIngredients";
import RandomMeals from "../components/RandomMeals";

const Home = () => {
  return (
    <>
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
