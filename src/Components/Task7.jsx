import React, { useEffect, useState } from 'react'

function Task7(Loading) {
    return function load(props){
        const [time,setTime] = useState(false)
        setTimeout(() => {
            setTime(true)
        }, 2000);
    return <>
    <h1 style={{textAlign:"center"}}>Task 7</h1>
   {time?<Loading {...props}></Loading>:<h1 style={{textAlign:"center"}}>Loading</h1>}
    </>
 }
}

export default Task7