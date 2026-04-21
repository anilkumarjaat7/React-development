import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handelChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handelSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <div>
      <h1>Hello i am Form</h1>

      <form onSubmit={handelSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="enetr your name"
          onChange={handelChange}
        />

        <br />

        <br />
        <input
          type="email"
          name="email"
          placeholder="enetr your email"
          value={formData.email}
          onChange={handelChange}
        />

        <br />

        <br />
        <input
          type="password"
          name="password"
          placeholder="enetr your password"
          value={formData.password}
          onChange={handelChange}
        />

        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
