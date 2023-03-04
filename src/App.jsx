import './App.css';

// components
// import UserForm from './components/UserForm';
import ChangeForm from './components/changeform/ChangeForm';

// function
import showResults from "./func/showResults";

function App() {
  return (
    <div className="App">
      <ChangeForm onSubmit={showResults} />
    </div>
  );
}

export default App;
