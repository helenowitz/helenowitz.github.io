import React, { useState } from "react";
import CssMenu from "./CssMenu";
import CssCanvas from "./CssCanvas";

function CssPlayground(){
    const [cssMenuData, setCssMenuData] = useState({
        displayType: 'flex', 
        rowsColumns:{
            gridColumn: 3, 
            gridRow: 'auto'
            }
        });
    
    const handleCssMenuData = (menuData) => {
        setCssMenuData(menuData);
        console.log('Data from CssMenu;', menuData);
    };
    // displayType={displayTypeState} rowsColumns={rowsColumns}
    return (
        <div className="CssPlayground">
            <CssMenu menuData4Canvas={handleCssMenuData}/>
            <CssCanvas cssMenuData={cssMenuData} />
        </div>
    );
}

export default CssPlayground;