import { useState } from "react";
import "./App.css";

function App() {
  const [calc, setCalc] = useState("");
  const [output, setOutput] = useState("");
  const operators = ["/", "*", "+", "-", "."];

  const updateCalc = (val) => {
    if (
      (operators.includes(val) && calc === "") ||
      (operators.includes(val) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + val);

    if (!operators.includes(val)) {
      setOutput(eval(calc + val).toString());
    }
  };

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }

    return digits;
  };

  const evaluate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteDigit = () => {
    if (calc === "") {
      return;
    }

    const val = calc.slice(0, -1);
    setCalc(val);
  };

  const clearDigits = () => {
    setCalc("");
    setOutput("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {output ? <span>({output})</span> : ""}&nbsp;{calc || "0"}
        </div>
        <div className="operator">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={deleteDigit}>Del</button>
          <button onClick={clearDigits}>C</button>
        </div>
        <div className="digit">
          {createDigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={evaluate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
