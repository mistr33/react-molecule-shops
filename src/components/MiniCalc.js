import React from "react";
import { useState } from "react";

function MiniCalc() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);

  const getRes = (x1, x2) => {
    return Math.pow(x1, 2) + Math.pow(x2, 2);
  };

  const inputChange = (e) => {
    let func;
    if (e.target.name == "a") func = setA; //setA(e.target.value);
    if (e.target.name == "b") func = setB; //
    console.log(e.target.name);
    func(e.target.value);
  };

  return (
    <div className="grid">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-2">a^2+b^2=c</div>
      </div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-2">
          <input
            name="a"
            type="number"
            value={a}
            onChange={(e) => inputChange(e)}
          />
          <input
            name="b"
            type="number"
            value={b}
            onChange={(e) => inputChange(e)}
          />
          <label name="c">result c={getRes(a, b)}_</label>
        </div>
      </div>
    </div>
  );
}

export default MiniCalc;
