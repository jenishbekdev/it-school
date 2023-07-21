import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Main from "./components/Main/Main";
import MasterClass from "./components/MasterClass/MasterClass";

function App() {
  return (
    <div className="App">
      <Header />
        <div className='content'>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/ourSchool' element={<Main/>}/>
          {/*<Route path='/aboutUs' element={<MasterClass/>}/>*/}
        </Routes>
      </div>
    </div>
  );
}

export default App;
