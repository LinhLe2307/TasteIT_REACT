import { React, useState } from 'react';
import axios from 'axios';

const AddRecipes = () => {
  const [recipes, setRecipes] = useState({
    name: "",
    author: "",
    country: "",
    description: "",
    image: "",
    instructions: ""
  });
  const [ingredients, setIngredients] = useState({
    quantity: "",
    ingredient: ""
  })

  const inputHandler = (e) => {
    setRecipes(() => ({
      ...recipes,
      [e.target.name]: e.target.value
    }));
    setIngredients(() => ({
      ...ingredients,
      [e.target.name]: e.target.value,
    }));
  }
  const addSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3010/notes", recipes, ingredients)
      .then(res => console.log("success", res))
      .catch(error => console.log("error", error))
    
    setRecipes("");
    setIngredients("");
  }

  return (
    <div>
      <h1>Add New Recipe</h1>
      <form onChange={inputHandler} onSubmit={addSubmitHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" defaultValue={recipes.name}/>
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" name="author" defaultValue={recipes.author}/>
        </div>
        <div>
          <label htmlFor="country">Recipe is from</label>
          <input type="text" id="country" name="country" defaultValue={recipes.country}/>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea type="text" id="description" name="description" defaultValue={recipes.description}/>
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input type="text" id="image" name="image" defaultValue={recipes.image}/>
        </div>
        <div>
          <label>Ingredients</label>
          <label htmlFor="quantity">Quantity</label>
          <input type="text" id="quantity" name="quantity" defaultValue={ingredients.quantity}/>
          <label htmlFor="ingredient">Ingredient</label>
          <input type="text" id="ingredient" name="ingredient" defaultValue={ingredients.ingredient}/>
        </div>
        <div>
          <label htmlFor="instructions">Instructions</label>
          <textarea id="instructions" name="instructions" defaultValue={recipes.instructions}/>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  )
}

export default AddRecipes