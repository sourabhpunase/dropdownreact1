
import './App.css';
import Dropdown from './dropdown/Dropdown';



function App() {
const options=['yes','no','maybe']
  return (
    <div className="App">
     <Dropdown options={options}  />
     
    </div>
  );
}

export default App;
