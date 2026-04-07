import Card from "./Card";
import wtech from "./assets/wtech.png";
import "./App.css";
function App() {
  return (
    <div>
      <h1>Teacher profiles</h1>

      <div className="cards">
        <Card
          img={wtech}
          name="amil kumar"
          expetices="php full stack"
          email="amitkumar@gmail.com"
          phones={[89745874385, 839475894]}
        />

        <Card
          img="mtech.png"
          name="lokesh kumar"
          expetices="java full stack"
          email="lokeshkumar@gmail.com"
          phones={[988874385, 909475894]}
        />
      </div>
    </div>
  );
}

export default App;
