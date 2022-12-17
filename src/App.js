import { useState } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import Clock from "./components/Clock";
import LoginControl from "./components/LoginControl";
import Blog from "./components/Blog";

function App() {
  const [flag, setflag] = useState(true);
  const userInfo = {
    firstName: "Sana",
    lastName: "mirza",
  };

  //  const toggle = () => {
  //   console.log("Toggle Clicked")
  //   setflag(!flag)
  //  }

  //const element = <h1>HEllo, world</h1>
  return (
    <>
      <Blog />
    </>
  );
}

export default App;

// <LoginControl/>
