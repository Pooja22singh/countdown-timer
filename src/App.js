import './App.css';
import { TimerWrapper } from "./timer/TimerWrapper";

function App() {
  return (
    <div className="App">
      <TimerWrapper duration={2100} onExpiry={()=>console.log("done")}/>
    </div>
  );
}

export default App;
