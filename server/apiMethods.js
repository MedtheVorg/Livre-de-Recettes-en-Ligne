const API_URL = 'http://localhost:4000';

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
async function getRecipeById(id) {
  try {
    if (!id) throw new Error('id must not be null or undefined');

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
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
async function getRecipeBy(fieldName, fieldValue) {
  try {
    if (!fieldName || !fieldValue)
      throw new Error('field , fieldValue must not be null or undefined');
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
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
    if (!fieldName) throw new Error('fieldName must not be null or undefined');
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
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
    if (!fieldName) throw new Error('field  must not be null or undefined');
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
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
      throw new Error('pageNumber  must not be null or undefined');

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
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
        'fieldName , lowestValue and highestValue must not be null or undefined'
      );
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
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
    if (!queryText) throw new Error('query must not be null or undefined');
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
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
    if (!recipe) throw new Error('Recipe must not be null or undefined');

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipe),
    };

    const response = await fetch(`${API_URL}/recipes`, requestOptions);
    if (response.status !== 201) return null;
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
//----------------------------------------------------------------

// ---------------PATCH Request-------------------------------------
async function updateRecipeById(id, updatedRecipeBody) {
  try {
    if (!id || !updatedRecipeBody)
      throw new Error('id, updatedRecipeBody must not be null or undefined');

    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedRecipeBody),
    };
    const response = await fetch(`${API_URL}/recipes/${id}`, requestOptions);
    const updatedRecipe = await response.json();
    return updatedRecipe;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
//----------------------------------------------------------------

// ---------------DELETE Request-------------------------------------
async function deleteRecipeById(id) {
  try {
    if (!id) throw new Error('id must not be null or undefined');

    const requestOptions = {
      method: 'DELETE',
    };
    const response = await fetch(`${API_URL}/recipes/${id}`, requestOptions);
    const deletedRecipe = await response.json();
    return Object.keys(deletedRecipe).length === 0 &&
      deletedRecipe.constructor === Object
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
  deleteRecipeById,
  getRecipeBy,
  getRecipeById,
  getRecipes,
  getRecipesAndSortByAscendingOrder,
  getRecipesAndSortByDescendingOrder,
  getRecipesBetweenRange,
  getRecipesByPageNumber,
  getRecipesByTextQuery,
  updateRecipeById,
};
