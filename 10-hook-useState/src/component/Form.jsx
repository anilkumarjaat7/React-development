import { useState } from "react";

// value = ""
// value = {name : "", email:""}

// value = {email : "amit"}

function Form() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [value, setValue] = useState({ name: "", email: "" });

  function handleChange(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <h1>Hello i am Form</h1>
      <p>Name : {value.name}</p>
      <p>Email : {value.email}</p>

      <input
        type="text"
        name="name"
        placeholder="enetr your name"
        value={value.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="enetr your email"
        value={value.email}
        onChange={handleChange}
      />
    </div>
  );
}

export default Form;
