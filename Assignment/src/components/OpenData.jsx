import {useState} from 'react'
import axios from 'axios'

function RandomCocktail() {
    const [drink, setDrink] = useState(null)

    async function getDrink() {
        const response = await axios('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        const data = response.data
        setDrink(data.drinks[0])
    }


  return (
    <>
      <button onClick={getDrink}>Get a drink</button>
      {drink && (
        <>
        <h2>{drink.strDrink}</h2>
        <h3>Ingredients</h3>
        <h3>Instructions</h3>
        <p>{drink.strInstructions}</p>
        
        </>
      )}
    </>
  );
};

export default RandomCocktail