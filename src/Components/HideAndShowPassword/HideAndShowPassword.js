import React, { useState } from "react";
import './HideAndShowPassword.css';
function HideAndShowPassword(){
    const [show,setShow]=useState(false)
    const handleShow=()=>{
        setShow(!show)
    }
    return(
        <div className="container">
            <input type={show?"text":"password"} />
            <label onClick={handleShow}>{show?"Hide":"Show"}</label>
        </div>
    );
}
export default HideAndShowPassword;