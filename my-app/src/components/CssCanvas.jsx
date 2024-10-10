import React, {useState} from "react";

function CssCanvas({cssMenuData}){
    console.log('CssCanvas cssMenuData: ', cssMenuData)

    const [styleData, setStyleData] = useState({displayType: 'flex', rowsColumns:{gridColumn: 3, gridRow: 'auto'}})
    const canvasStyle = {
        display: styleData.displayType, gridTemplateColumns: styleData.rowsColumns.gridColumn, gridTemplateRows: styleData.rowsColumns.gridRow
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