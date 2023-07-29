import React from "react";
import BlockImg from "./BlockImg";
import BlockTitle from "./BlockTitle";
import BlockKomment from "./BlockKomment";
import Block from "./Block";

function GetAccess() {
  return (
    <div id="getaccess">
      <div className="container">
        <div className="getaccess">
          <BlockImg />
          <BlockTitle />
          <BlockKomment />
          <Block />
        </div>
      </div>
    </div>
  );
}

export default GetAccess;
