import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const MealCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const isHomePage = window.location.pathname === "/";

  useEffect(() => {
    try {
      fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((res) => res.json())
        .then((data) => setCategories(data.categories.slice(0, 12)));
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }, []);

  const scrollToTop = ()=>{
    window.scrollTo({top:0}); 
  };

  // console.log(categories)

  return (
    <div
      className={`max-w-6xl mx-auto px-10 mt-10 pb-10 ${
        isHomePage ? "shadow-sm" : ""
      }`}
    >
      <h4 className='w-full text-center text-2xl mb-10 text-stone-800'>
        by Category
      </h4>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-center items-center'>
        {loading && <Spinner />}
        {!loading &&
          categories.map((category) => (
            <div
              className='flex items-center flex-col cursor-pointer'
              onClick={() => {navigate(`../category/${category.strCategory}`);scrollToTop();}}
              key={category.strCategory}
            >
              <img src={category.strCategoryThumb} alt={category.strCategory} />
              <div className='text-stone-600 text-lg my-2 text-center w-full'>
                {category.strCategory}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MealCategories;
