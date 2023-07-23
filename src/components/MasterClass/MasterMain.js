import React from 'react';
import MasterCurs from "./MasterCurs";
import Class from "./Class";
import Program from "./Program";
import Image from "./Image";
import Block from "./Block";
import Faq from "./FAQ";

const MasterMain = () => {
    return (
        <div>
            <MasterCurs/>
            <Class/>
            <Program/>
            <Image/>
            <Block/>
            <Faq/>
        </div>
    );
};

export default MasterMain;