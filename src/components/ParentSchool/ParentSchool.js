import React from 'react';
import School from "./School/School";
import Master from "./Master/Master";
import Curs from "./Curs/index";
import Card from "./Card";
import SliderPage from "./SliderPage";

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