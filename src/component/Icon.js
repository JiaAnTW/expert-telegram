import React from 'react';
import {IconContext} from 'react-icons';
const Icon=(props)=>{
    const containerStyle={
        display:"flex",
        alignItems:"center",
        justifyContents:"center"
    }

    return(
        <IconContext.Provider value={props.style}>
            <span style={containerStyle}>
                    {props.component()}
            </span>
        </IconContext.Provider>
    );
}
export default Icon;