import React from 'react';
import AboutCurs from "./AboutCurs";
import FrontEnd from "./FrontEnd";
import ProgramCurs from "./ProgramCurs";
import Form from "./Form";
import Master from "./Master";
import Process from "./Process";
import Faq from "./FAQ";


const Main = () => {
    return (
        <div>
            <FrontEnd/>
            <AboutCurs/>
            <ProgramCurs/>
            <Form/>
            <Master/>
            <Process/>
            <Faq/>
        </div>
    );
};

export default Main;