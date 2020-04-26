import React,{useState,useEffect} from 'react';
import {getRecipt,getReciptDetail} from "./function/http.js";
import Spinner from 'react-bootstrap/Spinner'

function Reciept() {
    const [data,setData]=useState([]);
    const [detail,setDetail]=useState([]);
    const layoutStyle={
        display:"grid",
        gridTemplateRows:"50px auto",
        width:"100%",
        height:"100%"
    }


    const listStyle={
        border: "none",
        borderBottom: "0.5px solid rgba(0,0,0,0.3)",
        backgroundColor:"white",
        display:"grid",
        gridTemplateColumns:"60px auto 50px",
        height: "60px",
        width:"100%",
        overflowY:"auto"
    };

    const classStyle={
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    };

    const nameStyle={
        display:"flex",
        alignItems:"center",
        //border: "1px solid red",
    };

    const priceStyle={
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        //border: "1px solid red",
    };

    const iconStyle={
        alignItems:"center",
        backgroundColor:"#E8CA78",
        color:"white",
        display:"flex",
        height: "40px",
        justifyContent:"center",
        width:"40px",
        borderRadius:"50px"
    };


    useEffect(()=>{
        getRecipt.then((dataRe)=>{
                setData(dataRe)
            }
        );
    },[])

    useEffect(()=>{
        if(detail.length===0&&data.length!==0){
            Promise.all(data.map((item,index)=>{
                const year=(item["invDate"]["year"]+1911).toString();
                const month=(item["invDate"]["month"]<10)?"0"+item["invDate"]["month"].toString():item["invDate"]["month"];
                const date=(item["invDate"]["date"]<10)?"0"+item["invDate"]["date"].toString():item["invDate"]["date"].toString();
                return getReciptDetail(item["invNum"],year+"/"+month+"/"+date,index)
            })).then(values=>{
                let tmp=[];
                for(let i=0;i<values.length;++i)
                    tmp.push(values[i]);
                setDetail(tmp);
            })
        }
    },[data])

    const spawnRecieptList=(items,info)=>{
        if(items.length!==0&&info.length!==0)
        return items.map((item,Index)=>{
            return(
            <div key={Index} style={listStyle}>
                <div style={classStyle}>
                    <div style={iconStyle}>食</div>      
                </div>
                <div style={nameStyle}> {info[Index]["details"][0]["description"]}</div>
                <div style={priceStyle}> {item.amount} </div>
            </div>
                );
        })
        else
            return <div className="align-center"><Spinner animation="grow"/></div>
    }

    return (spawnRecieptList(data,detail))
}

export default Reciept;