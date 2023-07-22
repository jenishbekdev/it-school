import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Registr from './components/Registr';

function App() {
  return (
    <div className="App">
      <Header />
      <Registr/>
      <div className='content'>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
