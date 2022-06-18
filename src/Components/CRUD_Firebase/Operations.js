import React, { useEffect, useState } from 'react';
import { dataRef } from './Firebases';
import "./Operation.css";
function Operations(){
    const [name,setName]=useState('')
    const [allValue,setAllValue]=useState([])
    const handleAdd=()=>{
        if(name!==""){
        dataRef.ref().child("all").push(name)
        setName("")
        }
    }
    useEffect(()=>{
        dataRef.ref().child("all").on('value',data=>{
            const getData=Object.values(data.val())
            setAllValue(getData)
        }) 
    },[])
    console.log(allValue)
    return(
        <div>
            <input value={name} onChange={(e)=>{setName(e.target.value)}} />
            <button onClick={handleAdd}>Add</button>
            <div>
                {allValue.map((valData,i)=><h1 key={i}>{valData}</h1>)}
            </div>
        </div>
    );
}
export default Operations;