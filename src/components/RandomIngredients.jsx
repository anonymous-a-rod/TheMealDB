import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const RandomIngredients = () => {
  const [randomIngredients, setRandomIngredients] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 100);

    try {
      fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
        .then((res) => res.json())
        .then((data) =>
          setRandomIngredients([
            data.meals[randomNumber],
            data.meals[(randomNumber + 1) * 2],
            data.meals[(randomNumber + 1) * 3],
            data.meals[(randomNumber + 1) * 4],
          ])
        );
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }, []);

  const scrollToTop = ()=>{
    window.scrollTo({top:0}); 
  };

  // console.log(randomIngredients)

  return (
    <div className='max-w-6xl mx-auto px-10 mt-10 pb-10 shadow-sm'>
      <h3 className='w-full text-center text-2xl mb-10 text-stone-800'>
        by Random Ingredient
      </h3>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center'>
        {loading && <Spinner />}
        {!loading &&
          randomIngredients &&
          randomIngredients.map((ingredient) => (
            <div
              className='flex flex-col items-center  cursor-pointer'
              onClick={() =>
                {navigate(`../ingredient/${ingredient.strIngredient}`);scrollToTop();}
              }
              key={ingredient.strIngredient}
            >
              <img
                src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`}
                alt={ingredient.strIngredient}
              />
              <div className='text-stone-600 text-lg my-2 w-fill text-center'>
                {ingredient.strIngredient}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RandomIngredients;
