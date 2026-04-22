import { useState, useEffect } from "react";

function UseEff() {
  const [count, setCount] = useState(0);
  const [img, setImg] = useState("");
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setImg(data.message));
  }, []);

  return (
    <div className="">
      <img src={img} />
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default UseEff;
