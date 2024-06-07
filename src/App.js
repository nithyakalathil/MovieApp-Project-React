import logo from './logo.svg';
import './App.css';
import Addmovie from './components/Addmovie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import Delete from './components/Delete';
import ViewAll from './components/ViewAll';

function App() {
  return (
   
<BrowserRouter>
<Routes>
  <Route path='/' element={<Addmovie/>}/>
  <Route path='/s' element={<Search/>}/>
  <Route path='/d' element={<Delete/>}/>
  <Route path='/v' element={<ViewAll/>}/>
</Routes>
</BrowserRouter>


  );
}

export default App;
