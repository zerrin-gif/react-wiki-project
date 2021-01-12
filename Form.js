import React from 'react';
import { useState } from "react";
​
function Form(props){
    const [search, setSearch] = useState('');
  function handleInput(e){
   setSearch(e.target.value)
  }
  function handleSearch(){
      props.handleData(search)
  } 
  console.log(props.result) 
 return (
  <div>
  <h3>SEARCH</h3> 
  <input type="text" onInput={handleInput} /> 
  <button onClick={handleSearch} > Click me
      </button>  
      
  </div>   
 )   
}
​
export default Form;
