import React, { useState } from 'react'

function Click() {
    const [count,setCount] = useState(0);

  return (
    <div>
        <h1 style={{textAlign:"center"}}>Mini Project 1</h1>
        <h1>Count : {count}</h1>
        <button onClick={()=>setCount((p)=>p+1)}>Addd</button>
        <hr/>
    </div>
  )
}

export default Click