# My RESTful API Documentation

## Running the Server Locally

```bash
## npx ts-node src/index.ts


## The server will run on http://localhost:3000.

## Available Endpoints
## GET /api/products: Retrieve a list of products.
## GET /api/products/:id: Retrieve details of a specific product by ID.
## POST /api/products: Create a new product.
## PUT /api/products/:id: Update details of a specific product by ID.
## DELETE /api/products/:id: Delete a product by ID.



## Example Requests and Responses

## Retrieve a List of Products

## Request: GET
## curl http://localhost:3000/api/products

## Response:
[
  { "id": 1, "name": "Product 1", "price": 20 },
  { "id": 2, "name": "Product 2", "price": 30 }
]


## Retrieve Details of a Specific Product

## Request: GET(api/product:id)
curl http://localhost:3000/api/products/1

## Response
{ "id": 1, "name": "Product 1", "price": 20 }

## Add Details of a product

## Request: POST(api/products)
curl http://localhost:3000/api/products

body {
    {
    "id": 3,
    "name": "Product 3",
    "price": 60
  }
}

## Response
{
{
  "id": 3,
  "name": "Product 3",
  "price": 60
}
}
[2023-12-23T09:44:53.427Z] POST /api/products



## Edit Details of a Specific Product

## Request: PUT(api/product:id)
curl http://localhost:3000/api/products/1

{
    "id": 1,
    "name": "Product 5",
    "price": 100
  }

## Response
{
    "id": 1,
    "name": "Product 5",
    "price": 100
}
[2023-12-23T09:54:53.531Z] PUT /api/products/1


## Delete product with id

## Request: DELETE(api/product:id)
curl http://localhost:3000/api/products/:id

## Response
{
  "message": "Product deleted successfully"
}
[2023-12-23T09:52:25.424Z] DELETE /api/products/2






Server is running on http://localhost:3000




Serve Documentation:
To serve the documentation locally, you can use a static site server like 'serve'. Install it:

npm install --global serve



serve docs
Open your browser and visit http://localhost:5000 to view the documentation.