import './App.css';

// components
// import UserForm from './components/UserForm';
import ChangeForm from './components/changeform/ChangeForm';
// import LikeButton from './components/likeButton/LikeButton';
import CatImages from './components/cats/CatImages';

// function
import showResults from "./func/showResults";

function App() {
  return (
    <div className="App">
      <ChangeForm onSubmit={showResults} />
      <br></br>
      <br></br>
      <CatImages />
    </div>
  );
}

export default App;
