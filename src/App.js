import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Card from './Component/Card';


function App() {
  const [products, setProducts] = useState([]);
  



  const getHandler = () => {
   axios.get('https://fakestoreapi.com/products').then((res) => {
     setProducts(res.data).catch((err) => {console.log(err)});
   }); 
 }
 
 useEffect(() => {
   getHandler();
 }, []);

 

  return (
  
    <>

    


    <div className='flex'>

    {products.map((item,i)=>{
     
         return <Card title={item.title} image={item.image} desc={item.description} price={item.price}/>
    })}

  </div>

  </>

  );
}

export default App;
