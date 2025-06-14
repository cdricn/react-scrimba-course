import './Main.css'

export default function Main() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"]

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient") as string;
    if (newIngredient) {
      ingredients.push(newIngredient);
    }
    console.log(ingredients)
  }

  return (
    <main>
      <div className='main-container'>
        <form className="main-form" onSubmit={handleSubmit} >
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
        <h2>Ingredients on hand:</h2>
        <ul>
          {
            ingredients.map((item)=>{
              return (
                <li>{item}</li>
              )
            })
          }
        </ul>
      </div>
    </main>
  )
}