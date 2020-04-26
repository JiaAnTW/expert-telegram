import React from 'react';
import "./IncomeBox.css";

function IncomeBox(props) {
    const outerBoxStyle={
        display:"flex",
    }

    return (
        <div style={outerBoxStyle}>
            <div className="income-word-box" id="total-income"><label style={{color:"white"}}>本月淨收入</label><span>{props.rev-props.pay}</span></div>
        </div>
    );
}

export default IncomeBox;