import React from 'react'

function TAsk2(Wrapcomponent) {
 return function ot(props){
  console.log(Wrapcomponent.name);
  return <Wrapcomponent {...props}></Wrapcomponent>
 }
}

export default TAsk2