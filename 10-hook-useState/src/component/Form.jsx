import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <h1>Hello i am Form</h1>
      <p>Name : {name}</p>
      <p>Email : {email}</p>
      <form>
        <input
          type="text"
          name="name"
          placeholder="enetr your name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          name="email"
          placeholder="enetr your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Form;
