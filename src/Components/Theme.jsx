import React, { useEffect, useState } from 'react'

function Theme() {
    const [theme,setTheme] = useState("dark");
    const [bg,setBg] = useState("black");
    const [clr,setClr] = useState("white");
    useEffect(()=>{
        if(theme=="dark"){
            setBg("black");
            setClr("white")
        }
        else{
            setBg("white");
            setClr("black")
        }
    },[theme])
  return (
    <>
    <div style={{background:`${bg}`,color:`${clr}`}}>
        <h1>Mini Project 2</h1>
        <button onClick={()=>setTheme(theme=="dark"?"Light":"dark")}>{theme}</button>
    </div>
    </>
  )
}

export default Theme