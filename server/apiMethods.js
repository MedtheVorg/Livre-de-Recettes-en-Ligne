const API_URL = "http://localhost:4000/";

// ---------------GET Request-------------------------------------

//  get all recipies
async function getRecipies() {
  try {
    const response = await fetch(`${API_URL}/recipies`);
    const recipies = await response.json();
    return recipies;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

// get recipie by id
async function getRecipieById(id) {
  try {
    if (!id) throw new Error("id must not be null or undefined");

    const requestOptions = {
      method: "GET",
      Headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(`${API_URL}/recipies/${id}`, requestOptions);
    const recipie = await response.json();
    return recipie;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
// filterring by field
async function getRecipieBy(fieldName, fieldValue) {
  try {
    if (!fieldName || !fieldValue)
      throw new Error("field , fieldValue must not be null or undefined");
    const requestOptions = {
      method: "GET",
      Headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      `${API_URL}/recipies?${fieldName}=${fieldValue}`,
      requestOptions
    );
    const recipie = await response.json();
    return recipie;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

// sorting by field in Ascending order
async function getRecipiesAndSortByAscendingOrder(fieldName) {
  //TODO : add additional fieldNames
  try {
    if (!fieldName) throw new Error("fieldName must not be null or undefined");
    const requestOptions = {
      method: "GET",
      Headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      `${API_URL}/recipies?_sort=${fieldName}`,
      requestOptions
    );
    const recipies = await response.json();
    return recipies;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

// sorting by field in Descending order
async function getRecipiesAndSortByDescendingOrder(fieldName) {
  //TODO : add additional fieldNames
  try {
    if (!fieldName) throw new Error("field  must not be null or undefined");
    const requestOptions = {
      method: "GET",
      Headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      `${API_URL}/recipies?_sort=${fieldName}&_order=desc`,
      requestOptions
    );
    const recipies = await response.json();
    return recipies;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

// Paginateing
async function getRecipiesByPageNumber(pageNumber = 1, limit = 10) {
  try {
    if (!pageNumber)
      throw new Error("pageNumber  must not be null or undefined");

    const requestOptions = {
      method: "GET",
      Headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      `${API_URL}/recipies?_page=${pageNumber}&_limit=${limit}`,
      requestOptions
    );
    const recipies = await response.json();
    return recipies;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

// Paginateing
async function getRecipiesBetweenRange(fieldName, lowestValue, highestValue) {
  try {
    if (!fieldName || !lowestValue || highestValue)
      throw new Error(
        "fieldName , lowestValue and highestValue must not be null or undefined"
      );
    const requestOptions = {
      method: "GET",
      Headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      `${API_URL}/recipies?${fieldName}_gte=${lowestValue}&${fieldName}_lte=${highestValue}`,
      requestOptions
    );
    const recipies = await response.json();
    return recipies;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

// search the whole Recipies table
async function getRecipiesByTextQuery(queryText) {
  try {
    if (!queryText) throw new Error("query must not be null or undefined");
    const requestOptions = {
      method: "GET",
      Headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      `${API_URL}/recipies?q=${queryText}`,
      requestOptions
    );
    const recipies = await response.json();
    return recipies;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
//----------------------------------------------------------------

// ---------------POST Request-------------------------------------
async function createRecipie(Recipie) {
  try {
    if (!Recipie) throw new Error("Recipie must not be null or undefined");

    const requestOptions = {
      method: "POST",
      Headers: {
        "Content-Type": "application/json",
      },
      body: Recipie,
    };
    const response = await fetch(`${API_URL}/recipies`, requestOptions);
    const createdRecipie = await response.json();
    return createdRecipie;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
//----------------------------------------------------------------

// ---------------PATCH Request-------------------------------------
async function updateRecipieById(id, updatedRecipieBody) {
  try {
    if (!id || !updatedRecipieBody)
      throw new Error("id, updatedRecipieBody must not be null or undefined");

    const requestOptions = {
      method: "PATCH",
      Headers: {
        "Content-Type": "application/json",
      },
      body: updatedRecipieBody,
    };
    const response = await fetch(`${API_URL}/recipies/${id}`, requestOptions);
    const updatedRecipie = await response.json();
    return updatedRecipie;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
//----------------------------------------------------------------

// ---------------DELETE Request-------------------------------------
async function deleteRecipieById(id) {
  try {
    if (!id) throw new Error("id must not be null or undefined");

    const requestOptions = {
      method: "DELETE",
    };
    const response = await fetch(`${API_URL}/recipies/${id}`, requestOptions);
    const deletedRecipie = await response.json();
    return Object.keys(deletedRecipie).length === 0 &&
      deletedRecipie.constructor === Object
      ? true
      : false;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
//----------------------------------------------------------------

export {
  createRecipie,
  deleteRecipieById,
  getRecipieBy,
  getRecipieById,
  getRecipies,
  getRecipiesAndSortByAscendingOrder,
  getRecipiesAndSortByDescendingOrder,
  getRecipiesBetweenRange,
  getRecipiesByPageNumber,
  getRecipiesByTextQuery,
  updateRecipieById,
};
