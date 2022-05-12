import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Home from './Components/Home';

import DogCreate from './Components/DogCreate';
import Detail from './Components/Detail'
import NavBar from './Components/NavBar'
import MyDog from './Components/MyDog';


function App() {
  return (

    <BrowserRouter>
    <div className="App">
        <NavBar />
      <Routes>
        <Route exact path= '/' element={<LandingPage/>}></Route>
        <Route path ='/home' element={<Home/>}></Route>
       
        <Route path ='/createdog' element={<DogCreate/>}></Route>
        <Route path ='/dog/:id' element={<Detail/>}></Route>
        <Route path ='/mydog' element={<MyDog/>}></Route>
        </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;