import React,{useState,useEffect} from 'react';
import IncomeBox from "./component/IncomeBox.js";
import "./Accounting.css"
import {IconContext} from 'react-icons';
import { GoPlus,GoGraph } from "react-icons/go";
import AccountList from "./component/AccountList.js";

function Accounting() {
    const containerStyle={
        width:"100%",
        height:"100%",
        display:"grid",
        gridTemplateRows:"1fr 5fr",
        position:"relative"
    };

    const statStyle={
        width:"250px",
        height:"200px",
        border:"1px dashed rgba(0,0,0,0.4)"
    }

    const controlBtnStyle={
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        width:"60px",
        height:"60px",
        borderRadius:"100px",
        border:"1px solid rgba(0,0,0,0.3)"
    };

    const addStyle={position:"absolute",top:"450px",right:"50px"};
    const manageStyle={position:"absolute",top:"450px",right:"50px"};

    const controlList=[
        {name:"",size:"1em",component:<GoPlus/>,color:"white",style:
            {
                position:"fixed",
                top:"550px",
                right:"20px",
                backgroundColor:"rgb(57, 62, 65)"
            }
        },
        {name:"分析報表",size:"0.7em",component:<GoGraph/>,color:"#393E41",style:{
            position:"absolute",top:"135px",right:"140px",
            width:"100px",
            height:"30px",
            backgroundColor:"rgb(243,243,243)",
            color:"#393E41",
            flexDirection:"row",
            border:"none"
        }}
    ]

    const spawnControlList=()=>{
        return controlList.map((Element)=>{
            let tmpStyle=Object.assign({},controlBtnStyle);
            for(let props in Element["style"]){
                tmpStyle[props]=Element["style"][props];
            }
            return (
            <div style={tmpStyle}>                    
                <IconContext.Provider value={{ color: Element.color,size:Element.size }}>
                    <div style={{display:"flex"}}>
                        {Element.component}
                    </div>
                </IconContext.Provider>
                <span style={{fontSize:"1px"}}>{Element.name}</span>
            </div>
            );
        })
    }

    return (
        <div style={containerStyle}>

            <div className="income-box">
                <IncomeBox rev={900} pay={400}/>
            </div>
            <div className="accountList" style={{overflowY:"auto"}}>
                <AccountList/>
            </div>
            {spawnControlList()}
        </div>
    )
}

export default Accounting;