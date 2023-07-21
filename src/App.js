import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import ParentSchool from "./components/ParentSchool/ParentSchool";
import AllCurs from "./components/ParentSchool/AllCurs/AllCurs";
import MasterClass from "./components/ParentSchool/MasterClass/MasterClass";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className='content'>
                <Routes>
                    <Route path='/ourSchool' element={<ParentSchool/>}/>
                    <Route path="/all-curs" element={<AllCurs/>}/>
                    <Route path="/master-klass" element={<MasterClass/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
