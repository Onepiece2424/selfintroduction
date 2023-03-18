import './App.css';

// components
// import UserForm from './components/UserForm';
import ChangeForm from './components/changeform/ChangeForm';
import LikeButton from './components/likeButton/LikeButton';

// function
import showResults from "./func/showResults";

function App() {
  return (
    <div className="App">
      <ChangeForm onSubmit={showResults} />
      <br></br>
      <LikeButton />
    </div>
  );
}

export default App;
