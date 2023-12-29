const API_URL = "http://localhost:4000";

// ---------------GET Request-------------------------------------

//  get all recipes
async function getRecipes() {
  try {
    const response = await fetch(`${API_URL}/recipes`);
    const recipes = await response.json();
    return recipes;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

// get recipe by id
async function getrecipeById(id) {
  try {
    if (!id) throw new Error("id must not be null or undefined");

    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(`${API_URL}/recipes/${id}`, requestOptions);
    const recipe = await response.json();
    return recipe;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
// filterring by field
async function getrecipeBy(fieldName, fieldValue) {
  try {
    if (!fieldName || !fieldValue)
      throw new Error("field , fieldValue must not be null or undefined");
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      `${API_URL}/recipes?${fieldName}=${fieldValue}`,
      requestOptions
    );
    const recipe = await response.json();
    return recipe;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

// sorting by field in Ascending order
async function getRecipesAndSortByAscendingOrder(fieldName) {
  //TODO : add additional fieldNames
  try {
    if (!fieldName) throw new Error("fieldName must not be null or undefined");
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      `${API_URL}/recipes?_sort=${fieldName}`,
      requestOptions
    );
    const recipes = await response.json();
    return recipes;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

// sorting by field in Descending order
async function getRecipesAndSortByDescendingOrder(fieldName) {
  //TODO : add additional fieldNames
  try {
    if (!fieldName) throw new Error("field  must not be null or undefined");
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      `${API_URL}/recipes?_sort=${fieldName}&_order=desc`,
      requestOptions
    );
    const recipes = await response.json();
    return recipes;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

// Paginateing
async function getRecipesByPageNumber(pageNumber = 1, limit = 10) {
  try {
    if (!pageNumber)
      throw new Error("pageNumber  must not be null or undefined");

    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      `${API_URL}/recipes?_page=${pageNumber}&_limit=${limit}`,
      requestOptions
    );
    const recipes = await response.json();
    return recipes;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

// Paginateing
async function getRecipesBetweenRange(fieldName, lowestValue, highestValue) {
  try {
    if (!fieldName || !lowestValue || highestValue)
      throw new Error(
        "fieldName , lowestValue and highestValue must not be null or undefined"
      );
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      `${API_URL}/recipes?${fieldName}_gte=${lowestValue}&${fieldName}_lte=${highestValue}`,
      requestOptions
    );
    const recipes = await response.json();
    return recipes;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

// search the whole recipes table
async function getRecipesByTextQuery(queryText) {
  try {
    if (!queryText) throw new Error("query must not be null or undefined");
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      `${API_URL}/recipes?q=${queryText}`,
      requestOptions
    );
    const recipes = await response.json();
    return recipes;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
//----------------------------------------------------------------

// ---------------POST Request-------------------------------------
async function createRecipe(recipe) {
  try {
    if (!recipe) throw new Error("Recipe must not be null or undefined");

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    };

    const response = await fetch(`${API_URL}/recipes`, requestOptions);
    if (response.status !== 201) return null;
    const createdrecipe = await response.json();
    return createdrecipe;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
//----------------------------------------------------------------

// ---------------PATCH Request-------------------------------------
async function updaterecipeById(id, updatedrecipeBody) {
  try {
    if (!id || !updatedrecipeBody)
      throw new Error("id, updatedrecipeBody must not be null or undefined");

    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedrecipeBody),
    };
    const response = await fetch(`${API_URL}/recipes/${id}`, requestOptions);
    const updatedrecipe = await response.json();
    return updatedrecipe;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
//----------------------------------------------------------------

// ---------------DELETE Request-------------------------------------
async function deleterecipeById(id) {
  try {
    if (!id) throw new Error("id must not be null or undefined");

    const requestOptions = {
      method: "DELETE",
    };
    const response = await fetch(`${API_URL}/recipes/${id}`, requestOptions);
    const deletedrecipe = await response.json();
    return Object.keys(deletedrecipe).length === 0 &&
      deletedrecipe.constructor === Object
      ? true
      : false;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
//----------------------------------------------------------------

export {
  createRecipe,
  deleterecipeById,
  getrecipeBy,
  getrecipeById,
  getRecipes,
  getRecipesAndSortByAscendingOrder,
  getRecipesAndSortByDescendingOrder,
  getRecipesBetweenRange,
  getRecipesByPageNumber,
  getRecipesByTextQuery,
  updaterecipeById,
};
