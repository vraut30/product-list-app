import React from 'react';
import './App.css';
import { useProducts } from './features/products/hooks/useProducts';
import ProductList from './features/products/components/ProductList/ProductList';

function App() {
  const { products, loading, error } = useProducts();

  if (loading) return <div className="App"><p>Loading...</p></div>;
  if (error) return <div className="App"><p>Error: {error}</p></div>;

  return (
    <div className="App">
      <h1>Product Store</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
