import React, { useState } from "react";
import "./calculate.css"
 export const Calc=()=>{

     const [item,setItem]=useState(``)
     const func=(e)=>{
       if( e.target==e.currentTarget)return
       
        if(e.target.textContent=="*" || e.target.textContent=="/" || e.target.textContent=="+" ||e.target.textContent=="-"){
           if(item[item.length-1]=="*" || item[item.length-1]=="/" || item[item.length-1]=="+" || item[item.length-1]=="-"){
           console.log(item.slice(0,item.length-1));
           setItem(item.slice(0,item.length-1) + e.target.textContent)
           }
           else{
            setItem(item + e.target.textContent)
           }
       }
       else if(e.target.textContent=="="){
           setItem(eval(item))
           return
        }
        else if(e.target.textContent=="AC"){
            setItem("")
        }
        else if(e.target.textContent=="SQRT"){
            setItem(Math.sqrt(eval(item)))
        }
        else if(e.target.textContent=="+/-"){
            setItem((-1)* eval(item))
        }
        else{
          setItem(item + e.target.textContent)
        }
     }



     return(
<div className="container" onClick={func}>

        <div className="monitor"><p>{item}</p></div>
        <div className="one"><p>1</p></div>
        <div className="two"><p>2</p></div>
        <div className="three"><p>3</p></div>
        <div className="four"><p>4</p></div>
        <div className="five"><p>5</p></div>
        <div className="six"><p>6</p></div>
        <div className="seven"><p>7</p></div>
        <div className="eight"><p>8</p></div>
        <div className="nine"><p>9</p></div>
        <div className="zero"><p>0</p></div>
        <div className="plus"><p>+</p></div>
        <div className="minus"><p>-</p></div>
        <div className="multiply"><p>*</p></div>
        <div className="divide"><p>/</p></div>
        <div className="equals"><p>=</p></div>
        <div className="dot"><p>.</p></div>
        <div className="ac"><p>AC</p></div>
        <div className="percent"><p>+/-</p></div>
        <div className="sign"><p>SQRT</p></div>

</div>
     )
 }