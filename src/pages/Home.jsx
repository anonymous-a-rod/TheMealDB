import MealByLetterSection from "../components/MealByLetterSection";
import MealCategories from "../components/MealCategories";
import Popular from "../components/Popular";
import RandomIngredients from "../components/RandomIngredients";
import RandomMeals from "../components/RandomMeals";


const Home = () => {

    return ( 
        <section className="max-w-6xl mx-auto">
            <h1 className="w-full text-center text-6xl mb-10">TheMealDB</h1>
            <RandomMeals />
            <Popular />    
            <MealCategories />
            <RandomIngredients />
            <MealByLetterSection />
        </section>
     );
}
 
export default Home;