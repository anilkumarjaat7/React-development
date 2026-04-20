// import { useState } from "react";
import Form from "./component/Form";

function App() {
  // let count = 0;
  // const [count, setCount] = useState(0);
  // let message = "";

  // const [message, setMessage] = useState("");
  return (
    <div>
      <h1>Hello word</h1>
      <Form />

      {/* <p>{count}</p> */}
      {/* <button
        onClick={() => {
          count = count + 1;
          console.log(count);
        }}
      > */}

      {/* <button
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        +1
      </button> */}

      {/* <p>Messae : {message}</p> */}

      {/* <input
        placeholder="enter you message"
        onChange={(e) => {
          message = e.target.value;
          console.log(message);
        }} */}

      {/* <input
        placeholder="enter you message"
        onChange={(e) => {
          setMessage(e.target.value);
          console.log(message);
        }}
      /> */}
    </div>
  );
}

export default App;
