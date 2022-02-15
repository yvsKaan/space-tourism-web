import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Crew from './components/Crew/Crew';
import Destination from './components/Destination/Destination';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/destination" element={ <Destination /> } />
          <Route path="/technology" element="{}" />
          <Route path="/crew" element={ <Crew /> } />
          <Route exact path="/" element={ <Home /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
