import { useState } from 'react'
import calculator from './utils/script';
import Button from './components/Button';

function Calculator() {
  const [expression, setExpression] = useState("");
  const [answer, setAnswer] = useState(0);
  const [realTimeResult, setRealTimeResult] = useState(0);
  return (
    <div>
      Calculator
      <form onSubmit={(e) => {
        e.preventDefault();
        let ans = new calculator();
        ans.calculate(expression);
        setAnswer(ans.getResult());
      }}>
        {realTimeResult ? <div style={{fontSize:"1.3rem", margin:"20px 0px"}}>Real-Time-Result : {realTimeResult} </div> : ""}
        <div style={{ display: "flex", flexDirection: "row", gap: "8px" }} >
          <input value={expression} onChange={(event) => { 
            setExpression(event.target.value)
            let ans = new calculator();
            ans.calculate(event.target.value);
            setRealTimeResult(ans.getResult())
          }} placeholder='Enter the Expression' style={{padding:"10px", marginTop:"30px", width:"580px", fontSize:"1rem"}}></input>
          <Button Border_radius={"10px"} Type={"submit"} text={"Calculate"} />
        </div>
      </form>
      {answer ? <div style={{fontSize:"2.3rem", height:"fit-content", marginTop:"30px", marginBottom:"30px"}}>Result: {answer} </div> : <div style={{height:"100px"}}></div> }
      <div style={{fontWeight:"200", fontSize:"1.2rem"}}>
        <ul>
          <li>Supports only Basic Expression</li>
          <li>Example:<code style={{ backgroundColor:"#d1d0d0", padding:"3px" ,borderRadius:"6px", margin:"0px 10px"}}>(4 + 8) / (5 * 74) + 9 / (83 + 4) + 4</code></li>
        </ul>
      </div>
    </div>
  )
}

export default Calculator
