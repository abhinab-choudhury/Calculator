import React, { useState } from 'react'
import calculator from './utils/script';

function Calculator() {
  const [expression, setExpression] = useState("");

  return (
    <div>
      Calculator
      <form onSubmit={(e) => {
        e.preventDefault();
        let answer = new calculator();
        answer.calculate(expression);
        console.log(answer.getResult());
      }}>
        <input value={expression} onChange={(event) => setExpression(event.target.value)} placeholder='Enter the Expression'></input>
        <button type="submit">Calculate</button>
      </form>
    </div>
  )
}

export default Calculator
