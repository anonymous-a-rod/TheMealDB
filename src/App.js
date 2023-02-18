import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Meal from './pages/Meal';
import Team from './pages/Team';
import About from './pages/About';
import Error from './pages/Error';
import FAQ from './pages/FAQ';
import Category from './pages/Category';
import Ingredient from './pages/Ingredient';



function App() {
  return (
    <>
      <main>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/meal/:idMeal' element={<Meal />} />
            <Route exact path='/team' element={<Team />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/category/:categoryName' element={<Category />} />
            <Route exact path='/ingredient/:ingredient' element={<Ingredient />} />
            <Route exact path='/faq' element={<FAQ />} />
            <Route exact path='*' element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      </main>
    </>
  );
}

export default App;
