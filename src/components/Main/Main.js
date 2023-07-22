import React from 'react';
import AboutCurs from "./AboutCurs";
import FrontEnd from "./FrontEnd";
import ProgramCurs from "./ProgramCurs";
import Form from "./Form";
import Master from "./Master";
import Process from "./Process";
import Accordion from "./Accordion";


const Main = () => {
    return (
        <div>
            <FrontEnd/>
            <AboutCurs/>
            <ProgramCurs/>
            <Form/>
            <Master/>
            <Process/>
            <Accordion/>
        </div>
    );
};

export default Main;