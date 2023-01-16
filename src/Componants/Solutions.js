import React from "react";
import "./Solutions.css";
import { useState } from "react";

export default function Solutions() {
  const [first, setfirst] = useState();
  const [pera, setPera] = useState();

  function findarea() {
    const len = document.getElementById("length").value;
    const bre = document.getElementById("breath").value;
   if(!bre || !len){
      alert("Please insert values in both")
    }
    setfirst(len * bre);
   
  }
 

  function findpera() {
    const len = document.getElementById("len").value;
    const bre = document.getElementById("bre").value;
    if(!bre || !len){
      alert("Please insert values in both")
    }
    setPera(len * 2 + bre * 2);
  }

  return (
    <>
      <div className="com">
        <div className="ar" style={{ display: "flex" }}>
          <h1>Area of rectangle</h1>
          <a className="back" href="/"></a>
        </div>

        <div id="potal">
          <h3 style={{ color: "white", marginLeft: "3%", fontSize: "20px" }}>
            Length{" "}
          </h3>
          <input id="length" type="number"></input>
          <h3 style={{ color: "white", marginLeft: "3%", fontSize: "20px" }}>
            Breath
          </h3>
          <input id="breath" type="number"></input>
        </div>

        <h3
          style={{ color: "white", margin: "1% 3% 1% 3%", fontSize: "20px" }}
          id="h3"
        >
          Total area {first} sq unit
        </h3>
        <button
          type="button"
          class="btn btn-danger"
          style={{ margin: "0 3%" }}
          onClick={findarea}
        >
          Find
        </button>
      </div>
      {/* ################################################################################################ */}
      <div className="com">
        <div className="ar" style={{ display: "flex" }}>
          <h1>Parameter of rectangle</h1>
        </div>

        <div id="total">
          <h3 style={{ color: "white", marginLeft: "3%", fontSize: "20px" }}>
            Length{" "}
          </h3>
          <input id="len" type="number"></input>
          <h3 style={{ color: "white", marginLeft: "3%", fontSize: "20px" }}>
            Breath
          </h3>
          <input id="bre" type="number"></input>
        </div>

        <h3
          style={{ color: "white", margin: "1% 3% 1% 3%", fontSize: "20px" }}
          id="h3"
        >
          Total parameter {pera} unit
        </h3>
        <button
          type="button"
          class="btn btn-danger "
          style={{ margin: "0 3%" }}
          onClick={findpera}
        >
          Find
        </button>
      </div>
    </>
  );
}
