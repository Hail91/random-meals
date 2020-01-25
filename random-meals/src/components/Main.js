import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import RecipeCard from './RecipeCard';
import Axios from 'axios';

const Main = () => {  
    const [meal, setMeal] = useState([])
    
    useEffect(() => {
        Axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => {
            console.log(res);
            setMeal(res.data.meals)
        })
        .catch(error => {
            console.log("No data returned", error)
        })
    }, []);

    console.log(meal)
    
    return (
    <div>
      <NavBar />
      <div className="recipe-cont">
        <h1>{meal.map(info => {
            return (
            <h1>{info.strMeal}</h1>
            )
        })}</h1>
      </div>
    </div>
    );
};

export default Main;