import React, { useState } from "react";

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  

function RecipeCreate({createNewRecipes}) {
  
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  
  const [formData, setFormData] = useState({...initialFormState});
  
  const handleChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    createNewRecipes(formData);
    setFormData({...initialFormState});
  };
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
            <label htmlFor="name">
           <input
              id="name"
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              placeholder = "Name"
              />
              </label>
            </td>
            
            <td>
            <label htmlFor="cuisine">
            <input
              id="cuisine"
              type="text"
              name="cuisine"
              onChange={handleChange}
              value={formData.cuisine}
              placeholder = "Cuisine"
              />
              </label>
            </td>
            
            <td>
            <label htmlFor="photo">
            <input
              id="photo"
              type="url"
              name="photo"
              onChange={handleChange}
              value={formData.photo}
              placeholder = "URL"
              />
              </label>
            </td>
            
            <td>
            <label htmlFor="ingredients">
            <textarea
              id="ingredients"
              type="text"
              name="ingredients"
              onChange={handleChange}
              value={formData.ingredients}
              placeholder = "Ingredients"
              rows={5}
              />
              </label>
              
            </td>
            
            <td>
           <label htmlFor="preparation">
            <textarea
              id="preparation"
              type="text"
              name="preparation"
              onChange={handleChange}
              value={formData.preparation}
              placeholder = "Preparation"
              rows={5}
              />
              </label>
             
            </td>
            
            <td>
              <button type="submit">Create</button>
            </td>
            

         
          </tr>
        </tbody>
      </table>

    </form>
    
  );
}

export default RecipeCreate;
