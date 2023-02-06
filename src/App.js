import './App.css';
import TimeLine from "./Component/Timeline";

function App() {
  return (
    <div className="App">
      <TimeLine statusIndex={1} timelinePoints={["Assigned", "Processing","Completed"]}/>
    </div>
  );
}

export default App;
