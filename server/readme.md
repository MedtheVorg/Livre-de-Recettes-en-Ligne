# Json Server

<br/>

## Definition

    - json server is an npm package that lets you create a fake Rest API with zero coding.

    - as a front end developer , you will constantly need mock data (fake data) to use to quickly prototype front end componenets.

    - that's where json web server comes into play, you can send asynchrounous fetch requests to create ,read, update and delete data stored in a .json file.

    - this is far simpler than creating  a node + express + mongodb backend just to test a front-end prototype componenet.

# How to use it ?

<br/>

## Fetching Data (GET Request)

### Querying a list of items

$ http://localhost:3000/products ( where products is name of our table inside db.json)

### Querying by id

$ http://localhost:3000/products/id ( id can be a number or a string like 1 or 'drfz@è_34')

### Filtering

$ http://localhost:3000/products?category="electronics" ( here we are using query params to filter products by category ?filter=value)

### Filtering nested props

$ http://localhost:3000/products?discount.type="shipping" (we can use dot annotation to access nested props )
{
"id": 2,
"title": "Product 2",
"category": "electronics",
"price": 2000,
"description": "This is description about product 2",
"discount": {
"type": "shipping"
}
},

### Sorting from low to high

$ http://localhost:3000/products?\_sort=price ( here we are using pre defined query param '\_sort' to sort the products table in asc order low => high)

### Sorting from high to low

$ http://localhost:3000/products?\_sort=price&\_order=desc
(by adding order=desc we can reverse the order in which our table is sorted, in this case its high to low)

### Sorting by multiple fields

$ http://localhost:3000/products?\_sort=price,category&\_order=desc,asc
(we simply add additional fields to sort by after a comma , and the same logic applies for \_order query params desc,asc)

### Pagination

$ http://localhost:3000/products?\_page=1
( by default \_page = 1 returns the first 10 products and \_page = 2 returns the next 10 products and so on, but we can alter this behaviour by using the \_limit query params)

- products/\_page=1&\_limit=2

### Querying with operators

http://localhost:3000/products?price_gte=400&price_lte=3000 (operators allow us to query based on a range)

- \_gte (greater than >)
- \_lte (less han <)
- \_ne (not equal to !=)
- category_like=^f (get all products where category starts with the letter f)

### Querying by full text search

we can use the 'q' query param to perform a text search on the entire table. <br/>
example :

- http://localhost:3000/products?q=in
  this will return all the products that contain "in" as a text in any property field value

### Querying parent or child entities

- using \_embed query param we can fetch and insert a child table related data into a parent table.
  example : http://localhost:3000/products?\_embed=reviews
  this will return all the products and their related reviews

- using \_expand query param we can fetch and insert a parent table related data into a child table.
  example : http://localhost:3000/reviews?\_expand=product
  (notice that the parent table is singular as a child can only have one parent)

<br>

## Adding Data (POST Request)

- to make a post request against the products table , we simply send a POST request to http://localhost:3000/products including the product information in the request body

```javascript
const requestOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  }, // this header is required
  body: JSON.stringify({
    //JSON.stringify is also required otherwise the request will fail
    id: 6,
    title: "Product 6",
    category: "table",
    price: 6000,
    description: "This is description about product 6",
    discount: {
      type: "shipping",
    },
  }),
};

const response = await fetch("http://localhost:3000/products", requestOptions);
const createdProduct = await response.json();
// the created product will be returned as te request response
```

## Updating Data (PUT Request) full update

- for the PUT request we target a product by its id and we provide the whole new updated object

```javascript
const requestOptions = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  }, // this header is required
  body: JSON.stringify({
    //JSON.stringify is also required otherwise the request will fail
    id: 6,
    title: "Product 6",
    category: "table",
    price: 6000,
    description: "This is description about product 100",
    discount: {
      type: "shipping",
    },
  }),
};

const response = await fetch(
  "http://localhost:3000/products/6",
  requestOptions
);
const createdProduct = await response.json();
// the updated product will be returned as te request response
```

## Updating Data (PATCH Request) partial update

- for the PATCH request we target a product by its id and we provide only the fields that wa want to update (ex: price)

```javascript
const requestOptions = {
  method: "PATH",
  headers: {
    "Content-Type": "application/json",
  }, // this header is required
  body: JSON.stringify({
    //JSON.stringify is also required otherwise the request will fail
    price: 8000,
  }),
};

const response = await fetch(
  "http://localhost:3000/products/6",
  requestOptions
);
const createdProduct = await response.json();
// the updated product will be returned as te request response
```

## Deleting Data (DELETE Request)

- for the DELETE request we target a product by its id and that's it.

```javascript
const requestOptions = {
  method: "DELETE",
};

const response = await fetch(
  "http://localhost:3000/products/6",
  requestOptions
);
const deletedProduct = await response.json();
// if successfull an empty object will be returned
```

## Customizition

### adding a custom port

- add the --port flag followed by a port number after the start script of json-server (ex : json-server --watch --port 4000)

### adding custom routes

- create a routes.json file and add the following object details to it:

```json
{
  "api/v1/*": "/$1"
  // this is equivalant to http://localhost:3000/api/v1/products
}
```

- after that add the --routes routes.json flag to your starter json-server script

### adding custom filtering

```json
{
  "api/v1/*": "/$1",
  "/products/category/:category": "/products?category=:category"
}
```
