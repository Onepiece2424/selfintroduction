import './App.css';

// components
import Changeform from './components/changeform/Changeform';

// function
import showResults from "./func/showResults";

function App() {
  return (
    <div className="App">
      <Changeform onSubmit={showResults}/>
    </div>
  );
}

export default App;
