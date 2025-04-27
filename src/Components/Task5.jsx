import React from 'react'

function Task5(Conditional) {
  return function exp(){
    return <>
    {Conditional&&<div>
        <h1 style={{textAlign:"center"}}> Task 5</h1>
    <p style={{textAlign:"center"}}>Conditional rendered</p>
    <hr/>
        </div>}
    </>
  }
}

export default Task5