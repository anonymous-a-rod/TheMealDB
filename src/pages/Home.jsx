import MealByCountry from "../components/MealByCountry";
import MealByLetterSection from "../components/MealByLetterSection";
import MealCategories from "../components/MealCategories";
import Popular from "../components/Popular";
import RandomIngredients from "../components/RandomIngredients";
import RandomMeals from "../components/RandomMeals";


const Home = () => {

    return ( 
        <section className="max-w-6xl mx-auto">
            <h1 className="w-full text-center text-6xl font-semibold pb-10 border-b-2">TheMealDB</h1>
            <RandomMeals />
            <Popular />    
            <MealCategories />
            <RandomIngredients />
            <MealByCountry />
            <MealByLetterSection />
        </section>
     );
}
 
export default Home;