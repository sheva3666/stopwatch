import React, {useState} from 'react';
import ClockFace  from './Components/ClockFace';
import Buttons from './Components/Buttons';
import './App.css';

function App() {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var mSeconds = time.ms, seconds = time.s, minutes = time.m, hours = time.h;

  const run = () => {
    if(minutes === 60){
      hours++;
      minutes = 0;
    }
    if(seconds === 60){
      minutes++;
      seconds = 0;
    }
    if(mSeconds === 100){
      seconds++;
      mSeconds = 0;
    }
    mSeconds++;
    return setTime({ms:mSeconds, s:seconds, m:minutes, h:hours});
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0})
  };

  const resume = () => start();


  return (
    <div className="main-section">
     <div className="clock-holder">
          <div className="stopwatch">
               <ClockFace time={time}/>
               <Buttons status={status} resume={resume} reset={reset} stop={stop} start={start}/>
          </div>
     </div>
    </div>
  );
}

export default App;
