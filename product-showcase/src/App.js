 import './App.css'; 
 import Section from './components/Section';
 import ProductCard from './components/ProductCard';

 import { products } from './components/products.js';

 const App = () => {

   return (
    <div className="App">
      <header>
        <h1>Product Showcase</h1>
        <Section title = "All Products" />
      </header>
      <main className='product-grid'>
        {products.map(product =>(
          <ProductCard
            key={product.id}
            {...product} />
        ))} 
      </main>
      

    </div>
   );
 }

 export default App;