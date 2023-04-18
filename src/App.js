
import { useEffect, useState } from 'react';
import './App.css';
import ArticleProducts from './components/ArticleProduct';

function App() {

  const [products, setProduct] = useState([]);
  const fetchProducts = () => {
    fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setProduct(data);
    })
  }
  useEffect(() =>{
    fetchProducts();
  }, []);
  return (
    <table className='table'>
       <ArticleProducts products={products}/>
     
    </table>
  );
}

export default App;
