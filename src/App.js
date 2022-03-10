import logo from './logo.svg';
import './App.css';
import Firstpage from './pages/Firstpage';
import Secondpage from './pages/Secondpage';
import Searchpage from './pages/Searchpage';
 


function App() {
  return (
    <div className="App">
      <Searchpage />
      <hr></hr>
       <Firstpage /> 
       <hr></hr>
       <Secondpage />
    </div>
  );
}

export default App;
