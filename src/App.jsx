import './App.css';
import AsyncValidationForm from './components/Form/AsyncValidationForm';
import Submit from './components/Form/Submit';
import SyncValidationForm from './components/Form/SyncValidationForm';
import MyForm from './components/MyForm/MyForm';

// components
// import UserForm from './components/UserForm';

// function
import showResults from "./func/showResults";

function App() {
  return (
    <div className="App">
      {/* <Submit onSubmit={showResults}/> */}
      {/* <SyncValidationForm onSubmit={showResults}/> */}
      {/* <AsyncValidationForm onSubmit={showResults} /> */}
      <MyForm onSubmit={showResults}/>
    </div>
  );
}

export default App;
