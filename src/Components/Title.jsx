import React, { useEffect } from 'react'

function Title() {
    useEffect(()=>{
        document.title="component"
    })
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Task 12</h1>
        <h1 style={{textAlign:"center"}}>Title changed</h1>
        <hr/>
    </div>
  )
}

export default Title