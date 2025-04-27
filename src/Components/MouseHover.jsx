import React from 'react'

function MouseHover() {
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Task 10</h1>
        <h1 onMouseEnter={()=>alert("Hovered")} style={{textAlign:"center"}}>Hover ME</h1>
        <hr/>
    </div>
  )
}

export default MouseHover