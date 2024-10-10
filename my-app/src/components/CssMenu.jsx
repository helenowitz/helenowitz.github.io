import React, {useState} from "react";
import GridOptions from "./modules/GridOptions.jsx";

// 

function CssMenu({cssMenuData4Canvas}) {
    // STATES DEFINITION
    const [displayTypeState, setDisplayType] = useState("flex");
    const [gridVisibility, setGridVisibility] = useState({display: "none"});
    const [rowsColumns, setRowsColumns] = useState({gridRow: 1, gridColumn: 5})
    
    let cssJson = {};

    function handleSubmit(e){
        // prevent refresh
        e.preventDefault();
        // create JSON Object
        const cssForm = e.target;
        const cssFormData = new FormData(cssForm);
        cssJson = Object.fromEntries(cssFormData.entries());
        
        // SETTINGS
        setDisplayType(cssJson.canvasDisplay);
        (cssJson.canvasDisplay === "grid") ? setGridVisibility({display: "inherit"}) : setGridVisibility({display: "none"});
        setRowsColumns({gridRow: cssJson.gridRows, gridColumn: cssJson.gridColumns})

        const dataToSendCanvas = {displayTypeState, rowsColumns};
        cssMenuData4Canvas(dataToSendCanvas);
    }

    return (
        <div className="CssMenu">
            <form onSubmit={handleSubmit}>
                <label for="canvasDisplay">display: </label>
                <select name="canvasDisplay" defaultValue={"flex"}>
                    <option value={"flex"}>flex</option>
                    <option value={"block"}>block</option>
                    <option value={"grid"}>grid</option>
                    <option value={"inline"}>inline</option>
                    <option value={"none"}>none</option>
                </select>
                <div style={gridVisibility}>    
                    <GridOptions />
                </div>    
                <button type="submit">Refresh Canvas</button>
            </form>
        </div>
    )
} 

export default CssMenu;