import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import {IconContext} from 'react-icons';
import { GoPencil } from "react-icons/go";

function AccountList() {
    const data=[
        {payRev:"pay",type:"食物",amount:50,date:"04/25"},
        {payRev:"pay",type:"食物",amount:50,date:"04/25"},
        {payRev:"rev",type:"薪水",amount:1000,date:"04/25"},
        {payRev:"pay",type:"食物",amount:50,date:"04/25"},
        {payRev:"pay",type:"食物",amount:50,date:"04/25"},
        {payRev:"rev",type:"薪水",amount:1000,date:"04/25"},
        {payRev:"pay",type:"食物",amount:50,date:"04/25"},
        {payRev:"pay",type:"食物",amount:50,date:"04/25"},
        {payRev:"rev",type:"薪水",amount:1000,date:"04/25"}
    ];
    const listStyle={
        display:"grid",
        gridTemplateColumns:"50px auto 30px",
        padding:"0.65rem 0.75rem",
    };
    const itemStyle={
        display:"flex",
        alignItems:"center",
        paddingLeft:"20px",
        paddingright:"20px",
    };

  return (
    <ListGroup>
        {data.map((element,index)=>{
            const lightStyle={
                height:"100%",
                width:"2.5px",
                position:"absolute",
                top:"0",
                left:"0",
                backgroundColor:(element.payRev==="pay")?"#F75940":"#3DC7BE"
            };

            const priceStyle={
                fontSize:"18px",
                fontWeight:500,
                color:(element.payRev==="pay")?"#F75940":"#3DC7BE"
            }

            const dateStyle={
                color:(element.payRev==="pay")?"#F75940":"#3DC7BE",
                fontSize:"10px"
            }

            return(
                <ListGroup.Item style={listStyle} key={index}>
                    <div style={lightStyle}></div>
                    <div style={{textAlign:"center",width:"50px"}}>
                        <div style={priceStyle}>
                            {element.amount}
                        </div>
                        <span style={dateStyle}>{element.date}</span>
                    </div>
                    <div style={itemStyle}>{element.type}</div>
                    <IconContext.Provider value={{  }}>
                        <div style={{display:"flex",alignItems:"center"}}>
                            <GoPencil/>
                        </div>
                    </IconContext.Provider>
                </ListGroup.Item>
            );
        })}
    </ListGroup>
  );
}

export default AccountList;
