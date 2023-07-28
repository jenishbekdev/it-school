import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';

import Registr from './components/Registr/Registr';
import ParentSchool from "./components/ParentSchool/ParentSchool";
import AllCurs from "./components/ParentSchool/AllCurs/AllCurs";
import MasterClass from "./components/ParentSchool/MasterClass/MasterClass";
import Main from "./components/Main/Main";
import MasterMain from "./components/MasterClass/MasterMain";
import ParentsDetaile from "./ParentsDetile/ParentsDetaile";
import Header from "./components/Header";
import Play from "./components/Registr/Play";
import Youtube from "./components/Registr/Youtube";


function App() {
    return (
        <div className="App">
            <Header/>

            <div className='content'>
                <Routes>
                    <Route path='/curs' element={<Main/>}/>
                    <Route path='/ourSchool' element={<ParentSchool/>}/>
                    <Route path="/all-curs" element={<AllCurs/>}/>
                    <Route path="/master-klass" element={<MasterClass/>}/>
                    <Route path="/aboutUs" element={<MasterMain/>}/>
                    <Route path="/curs" element={<Main/>}/>
                    <Route path='/ourSchool' element={<ParentSchool/>}/>
                    <Route path="/master-klass" element={<MasterClass/>}/>
                    <Route path="/choose" element={<ParentsDetaile/>}/>
                    <Route path="/you" element={<Youtube/>}/>
                    <Route path="/regis" element={<Registr/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
