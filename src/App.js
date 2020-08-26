import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';

function App() {
  const [countries,setCountries]=useState([])
  const [cart,setCart]=useState([])

  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res =>res.json())
    .then(data=>setCountries(data))
    .catch(error =>console.log(error))
   
  },[])

  const handleAddCountry=(country) =>{
    const newCart=[...cart,country]
    setCart(newCart);
    

}

  return (
    
    <div className="App">
      <h1>Country Loaded:  {countries.length}</h1>
      <h4>Country added:{cart.length}</h4>
      <Cart cart={cart}></Cart>
      <ul>
        { 
          countries.map(country=><Country country={country}  handleAddCountry={ handleAddCountry} key={country.alpha3Code}></Country>)
          
        }
      </ul>
      
     
     
    </div>
  );
}

export default App;
