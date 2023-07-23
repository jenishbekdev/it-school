import React from 'react';
import School from "./School/School";
import Master from "./Master/Master";
import Card from "./Card";
import SliderPage from "./SliderPage";
import Curs from "./Curs";



const ParentSchool = () => {
    return (
        <>
            <School/>
            <Curs/>
            <Master/>
            <Card/>
            <SliderPage/>

        </>
    );
};

export default ParentSchool;