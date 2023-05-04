
import './App.css';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import BeerDetail from './pages/BeerDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/beers' element={<Beers/>}/>
        <Route path='/random-beer' element={<RandomBeer/>}/>
        <Route path='/new-beer' element={<NewBeer/>}/>
        <Route path='/beer/:idBeer' element={<BeerDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
