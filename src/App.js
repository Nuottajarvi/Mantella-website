import { Routes, Route} from "react-router-dom";
import './App.css';
import Main from './Components/main';
import Gate from './Components/Gate/gate';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Main />}/>
        <Route path="/puppet" element={<Gate song="Puppet"/>}/>
        <Route path="/scarlet" element={<Gate song="Scarlet"/>}/>
        <Route path="/spectator" element={<Gate song="Spectator"/>}/>
        <Route path="/exitsigns" element={<Gate song="Exit Signs"/>}/>
        <Route path="/shattered" element={<Gate song="Shattered"/>}/>
        <Route path="/hourglass" element={<Gate song="Hourglass"/>}/>
        <Route path="/froggedbrain" element={<Gate song="Frogged Brain"/>}/>

      </Routes>
    </div>
  );
}

export default App;
