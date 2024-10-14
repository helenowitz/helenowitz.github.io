import React from "react";

function CssCanvas({cssMenuData}){
    let canvasStyle = {
        display: cssMenuData.displayType, gridTemplateColumns: cssMenuData.rowsColumns.gridColumn, gridTemplateRows: cssMenuData.rowsColumns.gridRow
    }
    console.log("canvas:", canvasStyle);

    return (
        <div className="CssCanvas" style={canvasStyle}>
            <div className="boxes">1</div>
            <div className="boxes">2</div>
            <div className="boxes">3</div>
            <div className="boxes">4</div>
            <div className="boxes">5</div>
        </div>
    );
}

export default CssCanvas;