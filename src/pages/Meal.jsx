import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { TbArrowBigUpLines } from "react-icons/tb";

const Meal = () => {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tags, setTags] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [arrowDisplay, setArrowDisplay] = useState(false);
  const array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const idMeal = useParams().idMeal;

  useEffect(() => {
    setLoading(true);
    try {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        .then((res) => res.json())
        .then((data) => setMeal(data.meals[0]));
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, [idMeal]);

  useEffect(() => {
    if (meal) {
      if (meal.strTags && meal.strTags !== " " && meal.strTags !== null) {
        setTags(meal.strTags.split(","));
      }
      if (meal.strInstructions && meal.strInstructions !== " ") {
        setInstructions(meal.strInstructions.split("."));
      }
    }
  }, [meal]);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      (window.scrollY > 500)
      ?setArrowDisplay(true):setArrowDisplay(false);
    })
  }, [arrowDisplay]);

  const scrollToTop = ()=>{
    window.scrollTo({top:0, behavior:'smooth'}); 
  };

  //   console.log(meal)

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className={(arrowDisplay)?'flex flex-col items-center fixed bottom-5 right-5 md:right-10 md:bottom-20 cursor-pointer z-10 transition-all delay-150':'fixed bottom-5 -right-20 md:bottom-20 md:-right-20 transition-all delay-150'} onClick={scrollToTop}>
        <TbArrowBigUpLines className="text-6xl md:text-7xl"/>
        <label className="text-sm">Back to top</label>
      </div>
      {meal && (
        <section className='max-w-6xl mx-auto pl-10 pr-10 flex flex-col'>
          <div className='text-center flex flex-col items-center md:flex-row '>
            <div className='w-[60%] md:w-[40%]'>
              <h1 className='m-4 text-4xl text-stone-800 font-semibold pb-2'>
                {meal.strMeal}
              </h1>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className='mt-4 mb-4'
              />
              <div>
                {tags &&
                  tags.map((tag) => {
                    return (
                      <>
                        {tag && (
                          <span
                            className='mb-4 inline-block px-2 py-1 mr-2 text-sm font-medium text-gray-800 bg-gray-200 rounded-full'
                            key={tag + Math.random()}
                          >
                            {tag}
                          </span>
                        )}{" "}
                      </>
                    );
                  })}
              </div>
            </div>

            <div className='w-[60%] mx-auto md:pl-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center mt-10 text-stone-600'>
              {meal &&
                array.map((index) => {
                  return (
                    <>
                      {index &&
                        meal[`strMeasure${index}`] &&
                        meal[`strIngredient${index}`] && (
                          <div
                            className='flex flex-col h-full justify-start flex-center'
                            key={`${meal[`strIngredient${index}`] + Math.random()}`}
                          >
                            <img
                              src={`https://www.themealdb.com/images/ingredients/${
                                meal[`strIngredient${index}`]
                              }.png`}
                              alt={`${meal[`strIngredient${index}`]}`}
                              className=''
                            />
                            <p>
                              <span className=''>
                                {meal[`strMeasure${index}`]}
                              </span>{" "}
                              {meal[`strIngredient${index}`]}
                            </p>
                          </div>
                        )}
                    </>
                  );
                })}
            </div>
          </div>

          <div className='self-center max-w-2xl text-stone-600 text-center pt-10 pb-10'>
            {instructions &&
              instructions.map((instruction, index) => {
                return (
                  <>
                    {instruction && (
                      <p className='' key={instruction + Math.random()}>
                        <span className='font-semibold text-stone-800'>
                          Step {index + 1}:
                        </span>{" "}
                        {instruction}.
                      </p>
                    )}{" "}
                  </>
                );
              })}
          </div>
        </section>
      )}
    </>
  );
};

export default Meal;
