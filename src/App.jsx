import './App.css';

// components
// import UserForm from './components/UserForm';
import ChangeForm from './components/changeform/ChangeForm';
// import LikeButton from './components/likeButton/LikeButton';
import CatImages from './components/cats/CatImages';
// import FavoriteButton from './components/likeButton/FavoriteButton';

// function
import showResults from "./func/showResults";

function App() {
  return (
    <div className="App">
      <CatImages />
      <br></br>
      <br></br>
      <ChangeForm onSubmit={showResults} />
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
