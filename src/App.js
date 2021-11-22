import { Routes, Route} from "react-router-dom";
import './App.css';
import Main from './Components/main';
import Gate from './Components/Gate/gate';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Main />}/>
        <Route path="/bird" element={<Gate song="Bird"/>}/>
        <Route path="/creek" element={<Gate song="Creek"/>}/>
      </Routes>
    </div>
  );
}

export default App;
