import "./App.css";
import Home from "./Home";
import UserContext from "./userContext";

function App() {
  let user = "lokesh";
  return (
    <div className="">
      <h1>Hello i a App</h1>
      <UserContext.Provider value={user}>
        <Home />
      </UserContext.Provider>
    </div>
  );
}

export default App;
