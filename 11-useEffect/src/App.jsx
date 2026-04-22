import UseEff from "./Components/UseEff";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((r) => r.json())
      .then((d) => console.log(d))
      .catch((e) => console.log(e));
  }, []);

  // return <UseEff />;
  return (
    <div className="">
      <h1>Hello</h1>
      <h2>Hello</h2>
    </div>
  );
}

export default App;
