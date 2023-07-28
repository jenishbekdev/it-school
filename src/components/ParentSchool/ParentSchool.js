import React from 'react';
import School from "./School/School";
import Master from "./Master/Master";
import Card from "./Card";
import SliderPage from "./SliderPage";
import Curs from "./Curs";
import Todo from "./Todo/Todo";



const ParentSchool = () => {
    return (
        <>
            <School/>
            <Curs/>
            <Master/>
            <Card/>
            <SliderPage/>
            <Todo/>

        </>
    );
};

export default ParentSchool;