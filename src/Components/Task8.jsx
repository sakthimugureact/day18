import React, { useState } from 'react'

function Task8() {
  return function ext(props){
    const [log,setLog] = useState(props);
    return <>
    <h1 style={{textAlign:"center"}}>Task 8</h1>
    <h1 style={{textAlign:"center"}}>{log?"Logged IN":"Logged Out"}</h1>
    <button style={{display:"block",margin:"auto"}} onClick={()=>setLog(false)}>{log?"Logout":"Login"}</button>
    <hr></hr>
    </>
  }
}

export default Task8