import express from 'express';
import bodyParser from 'body-parser';
import { Request, Response } from 'express';
import loggerMiddleware from './middleware/logger';

const app = express();
const PORT = 3000;


app.use(loggerMiddleware);

app.use(bodyParser.json());

// In-memory data store
const products: { id: number; name: string; price: number }[] = [
  { id: 1, name: 'Product 1', price: 20 },
  { id: 2, name: 'Product 2', price: 30 },
];

// Endpoints
app.get('/api/products', (req: Request, res: Response) => {
  res.json(products);
});

app.get('/api/products/:id', (req: Request, res: Response) => {
  const productId = parseInt(req.params.id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  res.json(product);
});

app.post('/api/products', (req: Request, res: Response) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ error: 'Name and price are required' });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price,
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});

app.put('/api/products/:id', (req: Request, res: Response) => {
  const productId = parseInt(req.params.id, 10);
  const productIndex = products.findIndex((p) => p.id === productId);

  if (productIndex === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }

  const updatedProduct = {
    id: productId,
    name: req.body.name || products[productIndex].name,
    price: req.body.price || products[productIndex].price,
  };

  products[productIndex] = updatedProduct;

  res.json(updatedProduct);
});

app.delete('/api/products/:id', (req: Request, res: Response) => {
  const productId = parseInt(req.params.id, 10);
  const productIndex = products.findIndex((p) => p.id === productId);

  if (productIndex === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }

  products.splice(productIndex, 1);

  res.json({ message: 'Product deleted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export { app };