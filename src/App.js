import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0);
  const [arr, setArr] = useState([]);
  const [Text, setText] = useState("");

  let add = () => {
    arr.push(Text)
    console.log(arr)
    setArr([...arr])

  };

  return (
    <div className="App">
      <header className="App-header">
        {arr.map((x, i) => {
          <p>{x}</p>;
        })}
        <p className="btn1">{arr}</p>
        <button className="btn" onClick={add}>
          add
        </button>
        <input onChange={(e) => {
          setText(e.target.value)
        }}>
        </input>
        <p>
          {Text}
        </p>
      </header>
    </div>
  );
}

export default App;
