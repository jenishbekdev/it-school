import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Registr from './components/Registr';
import ParentSchool from "./components/ParentSchool/ParentSchool";
import AllCurs from "./components/ParentSchool/AllCurs/AllCurs";
import MasterClass from "./components/ParentSchool/MasterClass/MasterClass";
import Main from "./components/Main/Main";
import MasterMain from "./components/MasterClass/MasterMain";
import ParentsDetaile from "./ParentsDetile/ParentsDetaile";
import Registr from "../src/components/Registr/index"
import Curs from './components/ParentSchool/Curs';
import Youtube from './components/Registr/Youtube';
import HomePage from "./components/HomePage";

function App() {
    return (
        <div className="App">
            <Header/>
    

            <div className='content'>
                <Routes>
                {/* <Route path='/' element={<HomePage/>}/> */}
                    <Route path='/buyCourse' element={<Registr/> }/>
            <Route path='/' element={<HomePage/>}/>
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
                    <Route path="/aboutcours" element={<Curs/>}/>
                    <Route path='/pass' element={<Youtube/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
