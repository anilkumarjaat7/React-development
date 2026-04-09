// import { useState } from "react";

import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0);
  // let count = 0;
  // let value = "";
  const [value, setValue] = useState("");
  return (
    <div>
      <p>{value}</p>
      <input
        onChange={(e) => {
          setValue(e.target.value);
          // value = e.target.value;
          console.log(value);
        }}
      />
    </div>

    // <div>
    //   <p>count :{count}</p>
    //   <button
    //     onClick={() => {
    //       setCount(count + 1);

    //       // count = count + 1;
    //       console.log(count);
    //     }}
    //   >
    //     Add +1
    //   </button>
    //   <button
    //     onClick={() => {
    //       setCount(count - 1);
    //       console.log(count);
    //     }}
    //   >
    //     sub -1
    //   </button>
    // </div>
  );
}

export default App;

// useState
// const [count, setCount] = useState(0);

// count - current value (varible)
// setCount -> funcation to update value  (state update)
//  0
