import { useEffect, useState } from "react";
import RandomMeals from "../components/RandomMeals";


const Home = () => {


    return ( 
        <section className="max-w-6xl mx-auto">
            <h1 className="w-full text-center text-4xl mb-10">The MealDB</h1>
            <RandomMeals />
        </section>
     );
}
 
export default Home;