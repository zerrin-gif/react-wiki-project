import { useState } from "react";
import React from "react";
import Form from './Form';
​
function App() {
  const [result, setResult] = useState(["",[],[],[]]);
  function handleData(vikipedia){
    fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${vikipedia}&format=json&origin=*&limit=10`)
    .then((response) => response.json())
    .then((json) => setResult(json));
  }
  return (
    <div className="container">
      <h1>Wikipedia Search with Function Component</h1>
      <Form handleData={handleData} result={result}/>
      <ul>{result[3].map((item,index) => {
        return (
          <a key={index} href={item}> <li>{item}</li></a>
        )
      })}
        </ul>
    </div>
  );
}
​
export default App;