import React from "react";
import Block1 from "./Block1";
import Block2 from "./Block2";
import Block3 from "./Block3";

function BlockDetails() {
  return (
    <div id="BlockDetails">
      <div className="container">
        <div className="BlockDetails">
          <Block1 />
          <Block2 />
          <Block3 />
        </div>
      </div>
    </div>
  );
}

export default BlockDetails;
