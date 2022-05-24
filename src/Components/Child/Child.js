import React, { useEffect } from "react";

function ChildComponent(props){
    useEffect(()=>{
        props.GetDataValue("ABCDEFG")
    })
    return(
        <>

        </>
    );
}
export default ChildComponent;