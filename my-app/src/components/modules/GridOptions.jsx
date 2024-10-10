import React from "react";

function GridOptions(){
     return (
            <div className="GridOptions">
                <label for="gridRows">grid-template-rows: </label>
                <input name="gridRows" type="number" placeholder="min = 1 / max = 5" min={1} max={5}></input><br></br>
                <label for="gridColumns">grid-template-columns: </label>
                <input name="gridColumns" type="number" placeholder="min = 1 / max = 5" min={1} max={5}></input>
            </div>
        );
}

export default GridOptions;