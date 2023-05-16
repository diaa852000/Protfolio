import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='home'  element={<Home/>}/>
        <Route path='about'  element={<About/>}/>
        <Route path='services'  element={<Services/>}/>
        <Route path='*'  element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
