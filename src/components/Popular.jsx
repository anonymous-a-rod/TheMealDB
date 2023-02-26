import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const Popular = () => {
  const [ingredientList, setIngredientList] = useState([]);
  const [mainIngredients, setMainIngredients] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    function fetchMainIngredient() {
      try {
        fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
          .then((res) => res.json())
          .then((data) => setIngredientList(data.meals));
      } catch (error) {
        console.log(error);
      }
    }
    fetchMainIngredient();
  }, []);

  useEffect(() => {
    if (mainIngredients.length < 4) {
      function filterIngredients(ingredient) {
        return ingredientList.filter(
          (item) => item.strIngredient === ingredient
        );
      }
      function addMainIgredient(ingredient) {
        setMainIngredients((prev) => [
          ...prev,
          ...filterIngredients(ingredient),
        ]);
      }

      addMainIgredient("Chicken");
      addMainIgredient("Salmon");
      addMainIgredient("Beef");
      addMainIgredient("Pork");
    }

    // console.log("main ingredients")
    // console.log(mainIngredients);

    setLoading(false);
  }, [ingredientList, mainIngredients.length]);

  const scrollToTop = ()=>{
    window.scrollTo({top:0}); 
  };

  // console.log(mainIngredients)

  return (
    <div className='max-w-6xl mx-auto px-10 mt-14 pb-10 shadow-sm'>
      <h4 className='w-full text-center text-2xl mb-4 text-stone-800'>
        by Choice of Meat
      </h4>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center'>
        {loading && <Spinner />}
        {!loading &&
          mainIngredients &&
          mainIngredients.map((ingredient) => (
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
              <div className='text-stone-600 text-xl mb-2'>
                {ingredient.strIngredient}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Popular;
