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
        <div className="App">
        <SchedulerComponent/>
        </div>
      </>
      );
  }
 
}

export default App;
