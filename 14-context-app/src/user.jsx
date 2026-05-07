import { useContext } from "react";
import UserContext from "./userContext";

export default function User() {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>hello i am User Component</h1>
      <p>welcome {user}</p>
    </div>
  );
}
