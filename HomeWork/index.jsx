import React, { useState } from "react";
import "./style.css"
export const Project =()=>{

       const [arr,setArr]= [
            {
                name:"Valod",
                age:30
            },
            {
                name:"Karen",
                age:52
            },
            {
                name:"Armen",
                age:74
            },
            {
                name:"Leonardo",
                age:14
            },
            {
                name:"Tigran",
                age:86
            },
            {
                name:"Samvel",
                age:26
            }
        ]
       const [value,setValue]= useState([])
       let [item,setItem]=useState(``);
       const [filteredData,setFilteredData]= useState()
       const maxFunc=()=>{
           arr.sort(function(a,b){
               return a.age-b.age
           })
               setValue(arr)
        }
        const minFunc=()=>{
            arr.sort(function(a,b){
                return a.age-b.age
            })
                setValue(arr);
         }
         const searchFunc=(e)=>{
            arr.forEach(elem=>{
                if(elem.name==item)setValue(<p>{elem.name}   {elem.age}</p>)
            })
         }
        const changeFunc=(e)=>{
            setItem(e.target.value)
        }
        return(
            <div>
                <input type="text" value={item} onChange={changeFunc}/>
                <button onClick={searchFunc}>Search</button>
                <button onClick={maxFunc}>Sort max</button>
                <button onClick={minFunc}>Sort min</button>
                <div className="container">{filteredData?filteredData.map((elem=>(
                   <p key={Math.random() * 10}>{elem.name}   {elem.age}</p>
               ))):value.map((elem=>(
                <p key={Math.random() * 10}>{elem.name}   {elem.age}</p>
            )))}</div>
            </div>
        )
    
}