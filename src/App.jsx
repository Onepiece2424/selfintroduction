import './App.css';

// components
import UserForm from './components/UserForm';

// function
import showResults from "./func/showResults";

function App() {
  return (
    <div className="App">
      <UserForm onSubmit={showResults} />
    </div>
  );
}

export default App;
