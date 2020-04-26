import React,{useState} from 'react';
import BarCode from "./asset/barcode.png";
import {IconContext} from 'react-icons';
import { GoDeviceCamera,GoCreditCard } from "react-icons/go";
import Carousel from 'react-bootstrap/Carousel'

function Home() {
    const [index,setIndex]=useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    const layoutStyle={
        display:"grid",
        gridTemplateRows:"1fr 1.5fr",
        width:"100%",
        height:"100%",
    }

    const btnArr=[
        {name:"相機掃描",component:<GoDeviceCamera/>},
        {name:"其他載具",component:<GoCreditCard/>}
    ]

    const btnStyle={
        width:"50px",
        height:"50px",
        borderRadius:"60px",
        backgroundColor:"rgb(57, 62, 65)",
        border:"none",
        marginBottom:"5px"
    }

    const btnBoxStyle={
        display:"flex",
        justifyContent:"space-evenly"
    }

    const conrolBoxStyle={
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        margin:"20px 20px"
    }

    const otherDeviceStyle={
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        padding:"30px 50px",
    }

    const topicStyle={
        fontSize:"27px"
    }

    const CarouselStyle={
        display:"flex",
        //justifyContent:"center",
        alignItems:"center",
        backgroundColor:"rgb(57, 62, 65)",
        color:"white"
    }

    const CarouselCaptionStyle={
        position:"static"
    }

    const cardStyle={
        backgroundColor:"white",
        padding:"20px 20px",
        width: "80%",
        marginLeft: "10%",
        borderRadius: "12px"
    }

    const spawnBtnList=()=>{
        return btnArr.map((item)=>{
            return(
            <div style={conrolBoxStyle}>
                <button style={btnStyle}>
                    <IconContext.Provider value={{ color: "white",size:"1em" }}>
                        <div>
                            {item.component}
                        </div>
                    </IconContext.Provider>
                </button>
                <span>{item.name}</span>
            </div>
            );
        })
    }

    return (
    <>
        <div style={layoutStyle}>
            <Carousel style={CarouselStyle} activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item >
                    <div style={cardStyle}>                       
                        <img
                            className="d-block w-100"
                            src={BarCode}
                            alt="Third slide"
                        />
                    </div>
                    <Carousel.Caption style={CarouselCaptionStyle}>
                        <h3 style={{fontSize:"14px"}}>載具條碼1</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <div style={cardStyle}>                       
                        <img
                            className="d-block w-100"
                            src={BarCode}
                            alt="Third slide"
                        />
                    </div>
                    <Carousel.Caption style={CarouselCaptionStyle}>
                        <h3 style={{fontSize:"14px"}}>載具條碼2</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div style={otherDeviceStyle}>
                <h3 style={{fontSize:"20px"}}>你也可以用</h3>
                <div id="btn-box" style={btnBoxStyle}>
                    {spawnBtnList()}
                </div>
            </div>
        </div>
    </>
    );
}

export default Home;