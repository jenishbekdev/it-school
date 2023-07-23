import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import ParentSchool from "./components/ParentSchool/ParentSchool";
import AllCurs from "./components/ParentSchool/AllCurs/AllCurs";
import MasterClass from "./components/ParentSchool/MasterClass/MasterClass";
import Main from "./components/Main/Main";
import MasterMain from "./components/MasterClass/MasterMain";
import ParentsDetaile from "./ParentsDetile/ParentsDetaile";
import AboutCurs from "./components/Main/AboutCurs";
import Curs from "./components/ParentSchool/Curs";
import AboutWe from "./components/AboutWe";
import Data from "./components/Data";
import Section from "./components/SECTI0ON/inhdex";

function App() {
    return (
        <div className="App">
            <Header/>
            <Data/>
            <Section/>
            {/*<Registr/>*/}

            <div className='content'>
                <Routes>
                    <Route path='/curs' element={<Main/>}/>
                    <Route path='/ourSchool' element={<ParentSchool/>}/>
                    <Route path="/all-curs" element={<AllCurs/>}/>
                    <Route path="/master-klass" element={<MasterClass/>}/>
                    <Route path="/aboutUs" element={<MasterMain/>}/>
                    <Route path="/curs" element={<Main/>}/>
                    <Route path='/ourSchool' element={<ParentSchool/>}/>
                    <Route path="/all-curs" element={<AllCurs/>}/>
                    <Route path="/master-klass" element={<MasterClass/>}/>
                    <Route path="/choose" element={<ParentsDetaile/>}/>
                    <Route path="/aboutCourse" element={<Curs/>}/>
                    <Route path="/our" element={<AboutWe/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
