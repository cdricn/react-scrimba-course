import './Main.css'
import { useState } from 'react'

export default function Main() {
  const [ingredients, setIngredients] = useState(Array<string>)

  function addIngredient(formData:FormData) {
    const newIngredient = formData.get("ingredient") as string;
    
    if (newIngredient) {
      setIngredients(prev => [...prev, newIngredient])
    }
  }

  function displayIngredients() {
    return(
      ingredients.length < 1 ? null :
      <section className='ingredients'>
        <h2>Ingredients on hand:</h2>
        <ul>
          {
            ingredients.map((item, i)=>{
              return (
                <li key={i}>{item}</li>
              )
            })
          }
        </ul>
        { ingredients.length < 4 ? null :
          <div className="get-recipe-container">
            <div>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button>Get a recipe</button>
          </div>
        }
      </section>
    )
  }

  return (
    <main>
      <div className='main-container'>
        <form className="main-form" action={addIngredient} >
          <input 
            type="text"
            id="ingredient"
            name="ingredient"
            aria-label="Add ingredient"
            placeholder="e.g. oregano"
            className="ingredient_input"
          />
          <button 
            type="submit"
            className="button"
          > + Add Ingredient </button>
        </form>
        {displayIngredients()}
      </div>
    </main>
  )
}