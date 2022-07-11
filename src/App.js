import { useState, useMemo } from "react";
import { Card, Button } from "./components";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(0);

  const squaredNumber = useMemo(() => {
    return squareNum(number);
  }, [number]);

  return (
    <div className="App">
      <header className="App-header">
        <Card title="LivDev" description="Subscribe Now!" />
        <br />
        <input onChange={(e) => setNumber(e.target.value)} />
        <p>SQUARE: {squaredNumber}</p>
        <div>
          <Button title="-" onClick={() => setCounter(counter - 1)} />
          <span>{counter}</span>
          <Button title="+" onClick={() => setCounter(counter + 1)} />
        </div>
      </header>
    </div>
  );
}

function squareNum(number) {
  console.log("Square function called");
  return Math.pow(number, 2);
}

export default App;
