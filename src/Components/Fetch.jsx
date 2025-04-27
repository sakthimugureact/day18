import React, { useEffect, useState } from 'react'

function Fetch() {
    const [api,setApi] = useState([]);
    console.log(api);
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(data=>data.map(val=>setApi([...api,val])))
    },[])
  return (
    <div>
        <ul>
            {api.map((val,index)=>(
                <li style={{textAlign:"center"}} key={index}>{val.name}</li>
            ))}
        </ul>
        <hr/>
    </div>
  )
}

export default Fetch