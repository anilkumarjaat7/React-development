// useEffect
// api data Fetching
//  update Dom
//  setting timers
//  Adding event liteners
//  local Storage Operations

// useEffect(()=>{}, dep)

//   emty - ui chage
//   [] -> one
// [dep]

import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setproducts] = useState([]);

  // const [num, setNum] = useState(0);
  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setproducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <h2 className="text-4xl font-bold text-center mb-10">Product List</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-md p-6"
            >
              <img
                src={product.image}
                className="w-full h-48 object-contain mb-4"
              />
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </div>
          );
        })}
      </div>

      {/* <h2>{num}</h2>
      <buttonnpm install axios onClick={() => setNum(num + 1)}>hello</buttonnpm> */}
    </div>
  );
}

export default App;
