import './App.css';
import SchedulerComponent from './components/Scheduler.js';

function App() {
//ยังไม่ Login
  if(false){ 
    return (
    <>
      <div className="App">
      <h1>hello</h1>
      </div>
    </>
    );
}
//Login แล้ว
  else{
    return (
      <>
        <div className="Wrapper">
          <div className = "NavCon">

          </div>
          <div className = "Left">

          </div>
          <div className = "Right">
            <SchedulerComponent/>
          </div>
        
        </div>
      </>
      );
  }
 
}

export default App;
