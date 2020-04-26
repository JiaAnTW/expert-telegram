import React,{useState} from 'react';
import {Link} from "react-router-dom";
import {IconContext} from 'react-icons';
import {AppContext} from "../context/AppContext.js"
import { GoHome,GoInbox,GoGraph,GoGear } from "react-icons/go";
function Header(props){

}



function Menu(props) {
    const menuArr=[
        {name:"首頁",path:"/",component:<GoHome/>},
        {name:"我的發票",path:"/recipt",component:<GoInbox/>},
        {name:"我的帳本",path:"/accounting",component:<GoGraph/>},
        {name:"設定",path:"/setting",component:<GoGear/>},
    ];

    const btnStyle={
        display:"flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
        color:"#393E41",
        border:"none",
        fontSize:"10px",
        textDecoration:"none",
        borderTop:"1px solid rgba(0,0,0,0.2)"
    }
    const iconStyle={
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        //height:"20px",
        width:"100%",
        display:"inline",
        textAlign:"center",
        marginBottom:"3px"
    }

    const spawnMenuBtn=()=>{
        return menuArr.map((menu)=>{
            let selfBtnStyle= Object.assign({}, btnStyle);;
            selfBtnStyle["opacity"]=(props.path===menu.path)?1:0.4;
            return(
                <Link to={menu.path} key={menu.name} style={selfBtnStyle}>
                    <IconContext.Provider value={{ color: "#393E41",size:"1.5em" }}>
                        <div style={iconStyle}>
                            {menu.component}
                        </div>
                    </IconContext.Provider>
                    {menu.name}
                    </Link>
            );
        })
    }

    return <>{spawnMenuBtn()}</>
}

function Layout(props) {
    const [before,setBefore]=useState(null);
    const [month,setMonth]=useState(4);

    /*function monthReducer(state, action) {
        switch(action.type) {
          case 'SET_MONTH':
            return month: state.month
          default:
            return state
        }
      }*/


    const headerStyle={
        width:"100%",
        borderBottom:(before==null)?"none":"1px solid rgba(0,0,0,0.2)",
        display:"flex",
        alignItems:"center",
        padding:"0px 20px",
        backgroundColor:"rgb(57, 62, 65)",
        color:"white"
    }

    const contentStyle={
        overflowY: "auto",
    }

    const menuStyle={
        width: "100%",
        display:"grid",
        gridTemplateColumns:"repeat(4, 1fr)"
    }

    return (
        <AppContext.Provider value={{ before: '/',month: 4,}}>
            <div id="header" style={headerStyle}>{""}</div>
            <div id="content" style={contentStyle}>
                {props.children}
            </div>
            <div id="menu" style={menuStyle}>
                <Menu path={props.location.pathname}/>
            </div>
        </AppContext.Provider>
    );
}

export default Layout;
