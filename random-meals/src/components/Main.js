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
        {meal.map(info => {
            return (
            <div className="main-cont">
                <RecipeCard data={meal}/>
                <h2>Ingredients</h2>
                    {info.strMeasure1 && info.strIngredient1 ? <li>{info.strMeasure1} - {info.strIngredient1}</li> : null}
                    {info.strMeasure2 && info.strIngredient2 ? <li>{info.strMeasure2} - {info.strIngredient2}</li> : null}
                    {info.strMeasure3 && info.strIngredient3 ? <li>{info.strMeasure3} - {info.strIngredient3}</li> : null}
                    {info.strMeasure4 && info.strIngredient4 ? <li>{info.strMeasure4} - {info.strIngredient4}</li> : null}
                    {info.strMeasure5 && info.strIngredient5 ? <li>{info.strMeasure5} - {info.strIngredient5}</li> : null}
                    {info.strMeasure6 && info.strIngredient6 ? <li>{info.strMeasure6} - {info.strIngredient6}</li> : null}
                    {info.strMeasure7 && info.strIngredient7 ? <li>{info.strMeasure7} - {info.strIngredient7}</li> : null}
                    {info.strMeasure8 && info.strIngredient8 ? <li>{info.strMeasure8} - {info.strIngredient8}</li> : null}
                    {info.strMeasure9 && info.strIngredient9 ? <li>{info.strMeasure9} - {info.strIngredient9}</li> : null}
                    {info.strMeasure10 && info.strIngredient10 ? <li>{info.strMeasure10} - {info.strIngredient10}</li> : null}
                    {info.strMeasure11 && info.strIngredient11 ? <li>{info.strMeasure11} - {info.strIngredient11}</li> : null}
                    {info.strMeasure12 && info.strIngredient12 ? <li>{info.strMeasure12} - {info.strIngredient12}</li> : null}
                    {info.strMeasure13 && info.strIngredient13 ? <li>{info.strMeasure13} - {info.strIngredient13}</li> : null}
                    {info.strMeasure14 && info.strIngredient14 ? <li>{info.strMeasure14} - {info.strIngredient14}</li> : null}
                    {info.strMeasure15 && info.strIngredient15 ? <li>{info.strMeasure15} - {info.strIngredient15}</li> : null}
                    {info.strMeasure16 && info.strIngredient16 ? <li>{info.strMeasure16} - {info.strIngredient16}</li> : null}
                    {info.strMeasure17 && info.strIngredient17 ? <li>{info.strMeasure17} - {info.strIngredient17}</li> : null}
                    {info.strMeasure18 && info.strIngredient18 ? <li>{info.strMeasure18} - {info.strIngredient18}</li> : null}
                    {info.strMeasure19 && info.strIngredient19 ? <li>{info.strMeasure19} - {info.strIngredient19}</li> : null}
                    {info.strMeasure20 && info.strIngredient20 ? <li>{info.strMeasure20} - {info.strIngredient20}</li> : null}         
                </div>
            )
        })}
      </div>
    );
};

export default Main;